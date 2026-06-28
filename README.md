<div align="center">

# 🚀 Rabia Ahmed — Developer Portfolio

### Code • Ship • Repeat

A full-stack developer portfolio with a 3D animated nav, scroll-triggered transitions,
a live animated background, and a working contact form — built with **Flask** on the
backend and pure HTML/CSS/JS on the front.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## ✨ Overview

This isn't a template — every section was rebuilt from scratch around one idea:
a developer's portfolio should *feel* like code. The nav flips in 3D, the hero
types itself out like a terminal, project cards tilt toward your cursor, and a
field of drifting `</>`, `{ }`, and `git` symbols animates quietly behind it all.

| | |
|---|---|
| 🎨 **Theme** | `#95B9D0` (steel blue) on `#0B1319` (deep navy) |
| 🧠 **Backend** | Flask, serving a single Jinja template |
| 🎬 **Motion** | CSS 3D transforms + Canvas particle animation |
| 📬 **Contact** | Live message form → opens visitor's email app |
| 📱 **Responsive** | Mobile nav with a 3D door-style reveal |

---

## 🧩 Features

- **3D Navigation** — desktop nav links flip up in 3D on hover; mobile menu opens with a rotating panel reveal
- **Animated Hero** — a self-typing terminal card (`const developer = {...}`) that floats gently in 3D space
- **Tilting Project Cards** — cards tilt toward the cursor with a soft glare, each linking straight to the GitHub repo
- **Ambient Code Background** — drifting `</>`, `{ }`, `=>`, `git`, `npm` symbols connected by faint circuit-style lines (respects `prefers-reduced-motion`)
- **Flip-to-Reveal Contact Cards** — LinkedIn, GitHub, Facebook, and Email flip open on hover/tap
- **Message Box** — a real contact form that opens the visitor's email client, pre-filled and addressed
- **Scroll Reveals** — every section animates into view as you scroll, with staggered timing

---

## 🗂️ Project Structure

```
flask_app/
├── app.py                  # Flask app + route
├── requirements.txt        # Python dependencies
├── README.md
├── templates/
│   └── index.html          # Jinja template (markup only)
└── static/
    ├── css/
    │   └── style.css       # theme, layout, 3D transforms, animations
    └── js/
        └── script.js       # nav logic, canvas background, tilt, form handling
```

---

## ⚙️ Getting Started

### Prerequisites
- Python 3.9+
- `pip`

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Rabia-Ahmed18/<your-repo-name>.git
cd <your-repo-name>

# 2. (optional) create a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 3. install dependencies
pip install -r requirements.txt

# 4. run the app
python app.py
```

Then open **http://127.0.0.1:5000/** in your browser.

---

## 🌍 Deployment

This app needs a host that runs Python, not just static files. A few good free options:

| Platform | Notes |
|---|---|
| [Render](https://render.com) | Connect the repo, set start command `gunicorn app:app` |
| [Railway](https://railway.app) | Auto-detects Flask, one-click deploy |
| [PythonAnywhere](https://www.pythonanywhere.com) | Simple, always-on free tier |

> Add `gunicorn` to `requirements.txt` before deploying to a production host.

---

## 🛠️ Built With

- **[Flask](https://flask.palletsprojects.com/)** — lightweight Python web framework
- **Vanilla JS** — no frameworks, just the DOM, Canvas, and Intersection Observer
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

---

## 📬 Contact

**Rabia Ahmed** — Full-Stack Developer, Karachi, Pakistan

- ✉️ [rabiaahmed16111999@gmail.com](mailto:rabiaahmed16111999@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/rabia-ahmed-14442a2b6/)
- 🐙 [GitHub](https://github.com/Rabia-Ahmed18)
- 📘 [Facebook](https://www.facebook.com/profile.php?id=100093964790046)

---

<div align="center">

**If this caught your eye, the contact form on the live site works too — say hi 👋**

</div>
