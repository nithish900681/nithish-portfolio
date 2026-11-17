# Nithish K R — Personal Portfolio

A dark, responsive React portfolio with:
- A five-second anime-inspired welcome screen
- Browser text-to-speech greeting (requires sound permission/user interaction in some browsers)
- Animated profile, skills, experience, education, projects and certifications
- Resume download link (add your PDF to `frontend/public/resume.pdf`)
- Optional FastAPI backend for contact form submissions

## Requirements
- Node.js 18+ (recommended)
- Python 3.10+

## 1. Start the backend
Open a terminal in the project folder:

```bash
cd backend
python -m venv venv
```

Windows PowerShell:
```powershell
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload
```

Windows CMD:
```cmd
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

macOS/Linux:
```bash
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at http://127.0.0.1:8000

## 2. Start the frontend
Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://localhost:5173.

## 3. Add your photo and resume
- Put your professional photo at `frontend/public/profile.jpg`
- Your resume is not embedded, displayed, or offered as a download. Its relevant information is presented as portfolio sections (About, Skills, Experience, Projects, Education and Certifications).
- If you use a different photo filename, update `PHOTO_PATH` in `frontend/src/data.js`.

A default illustrated avatar is shown until you add your own photo.

## 4. Welcome sound and browser restrictions
The site attempts to speak the greeting using your browser's built-in speech synthesis. Browsers may block audio that starts without a user gesture. If that happens, click **Enable sound & start** on the welcome screen. The dashboard still opens automatically after five seconds. The speaker button in the dashboard can replay the greeting.

## 5. Personalize before publishing
Review `frontend/src/data.js` and update:
- Email, phone, LinkedIn and GitHub links
- Resume-derived content in the About, Skills, Experience, Projects, Education and Certifications sections
- Any project demo/GitHub URLs
- Your photo and resume files

The portfolio uses the details from the two resumes provided. The third project, AI Pantry, is included from the earlier resume. Confirm all metrics and links are accurate before publishing.

## 6. Build for deployment
```bash
cd frontend
npm run build
```
The production files are created in `frontend/dist`. You can deploy the frontend to Vercel. Deploy the FastAPI backend separately if you want the contact form to work online, then set `VITE_API_URL` to your backend URL.
