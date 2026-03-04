import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateRiskAnalysis = async (userData: any) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following user activity for potential insider threat risks: ${JSON.stringify(userData)}. Provide a risk score (0-100) and a brief summary of concerns.`,
  });
  return response.text;
};
