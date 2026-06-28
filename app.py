from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    """Render the single-page portfolio."""
    return render_template("index.html")


if __name__ == "__main__":
    # Matches the original local dev URL: http://127.0.0.1:5000/
    app.run(debug=True, host="127.0.0.1", port=5000)
