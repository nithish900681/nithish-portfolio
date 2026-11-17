from pathlib import Path
from datetime import datetime, timezone
import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Nithish Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = Path(__file__).parent / "messages.json"

class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: str = Field(min_length=5, max_length=160)
    subject: str = Field(min_length=2, max_length=150)
    message: str = Field(min_length=10, max_length=3000)

@app.get("/")
def root():
    return {"message": "Nithish Portfolio API is running"}

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.post("/api/contact")
def contact(payload: ContactMessage):
    record = {
        **payload.model_dump(),
        "received_at": datetime.now(timezone.utc).isoformat()
    }
    existing = []
    if DATA_FILE.exists():
        try:
            existing = json.loads(DATA_FILE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            existing = []
    existing.append(record)
    DATA_FILE.write_text(json.dumps(existing, indent=2), encoding="utf-8")
    return {"success": True, "message": "Thank you! Your message has been received."}
