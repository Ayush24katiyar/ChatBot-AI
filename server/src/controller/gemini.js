import { asyncHandler } from "../utils/Asynchandler.js";
import { apiresponse } from "../utils/apiresponse.js";
import { apierror } from "../utils/apierror.js";
import dotenv from 'dotenv'
dotenv.config()
const GeminiAPI = process.env.GEMINI_API_KEY
const GeminiURL = process.env.GEMINI_API_URL

const GeminiController = asyncHandler(async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            throw new apierror(400, "Message is required in the request body");
        }

        if (!process.env.GEMINI_API_KEY) {
            throw new apierror(500, "Gemini API key not configured");
        }

        const response = await fetch(
            `${GeminiURL}?key=${GeminiAPI}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: message
                        }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new apierror(
                response.status,
                `Gemini API Error: ${errorData.error?.message || response.statusText}`
            );
        }

        const data = await response.json();

        // Try to extract text in a few common Gemini response shapes.
        const candidate = data?.candidates?.[0];

        // helper to safely join parts
        const joinPartsText = (parts) => {
            if (!parts) return '';
            if (Array.isArray(parts)) return parts.map(p => p?.text ?? '').join('');
            return typeof parts === 'string' ? parts : '';
        }

        let generatedText = '';

        if (candidate) {
            // Candidate.content may be an object with `parts` or a nested structure
            const parts = candidate?.content?.parts ?? candidate?.content;
            generatedText = joinPartsText(parts);
        }

        // Fallbacks for alternate response shapes
        if (!generatedText) {
            // Some responses include `output` or different nesting
            const altParts = data?.output?.[0]?.content ?? data?.candidates?.[0]?.content ?? null;
            generatedText = joinPartsText(Array.isArray(altParts) ? altParts : (altParts?.parts ?? altParts));
        }

        if (!generatedText) {
            throw new apierror(500, 'No generated text found in Gemini API response');
        }

        // Return only the generated text (plain text, no metadata)
        return res.status(200).type('text/plain').send(generatedText);
    } catch (error) {
        throw new apierror(error.status || 500, error.message || "Internal server error")
    }
})


export {GeminiController}