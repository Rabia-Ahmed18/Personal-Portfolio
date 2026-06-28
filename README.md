# Rabia Ahmed — Portfolio (Flask App)

A Python/Flask version of the portfolio: same 3D nav, scroll transitions,
animated background, and message box — now served from a real backend
instead of a static HTML file.

## Project structure

```
flask_app/
├── app.py                  # Flask app + route
├── requirements.txt
├── templates/
│   └── index.html          # Jinja template (markup only)
└── static/
    ├── css/style.css        # all styles
    └── js/script.js         # nav, animations, background canvas, form logic
```

## Run it

1. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate        # Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Start the app:
   ```
   python app.py
   ```

4. Open **http://127.0.0.1:5000/** in your browser — same address as before.

## Notes

- The "Message Me" form still opens the visitor's email app with a
  pre-filled message (no SMTP setup needed to use the site).
- If you'd like the form to actually send email from the server instead
  (e.g. via Gmail SMTP or an API like SendGrid), that's a small addition
  to `app.py` — happy to wire it in if you want that next.
