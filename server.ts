import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client safely (lazy or check)
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// API endpoint for AI Referee Assistant
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array" });
    }

    const ai = getGenAI();
    
    // Format conversation history for Gemini chat
    const systemInstruction = `You are FIBA Ref AI, an elite FIBA Technical Official and FIBA Referee Instructor with absolute mastery of the official FIBA Official Basketball Rules (OBR), FIBA Interpretations, and FIBA Referee Mechanics.
Your tone is professional, authoritative, precise, and encouraging.
Always cite the exact FIBA Rule article numbers (e.g. Art. 33 for Contact, Art. 36 for Technical Foul, Art. 37 for Unsportsmanlike Foul, Art. 29/50 for 24-second clock, Art. 31 for Goaltending, Art. 25 for Travelling, Art. 24 for Dribbling) when answering referee questions.
Provide clear explanations of mechanics, penalties, restarting play, and signal execution. If there is ambiguity in a game situation, explain how the crew chief and table officials should resolve it according to FIBA OBR.`;

    // Convert messages to contents format for generateContent or chat
    const history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const lastMessage = messages[messages.length - 1]?.content || "";

    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    // Replay history if any
    for (const h of history) {
      // For simplicity with chats, we can send messages or use generateContent with full history
    }

    // Alternatively, construct full contents for ai.models.generateContent with history
    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    res.json({ text: response.text || "No response generated." });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Failed to communicate with AI referee assistant." });
  }
});

async function startServer() {
  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FIBA Referee Pro server running on http://localhost:${PORT}`);
  });
}

startServer();
