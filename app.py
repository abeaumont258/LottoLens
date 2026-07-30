from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyse")
def analyse():
    return "<h1>Analyse page coming soon...</h1>"


@app.route("/tickets")
def tickets():
    return "<h1>Ticket Generator coming soon...</h1>"


@app.route("/statistics")
def statistics():
    return "<h1>Statistics page coming soon...</h1>"


@app.route("/settings")
def settings():
    return "<h1>Settings page coming soon...</h1>"


if __name__ == "__main__":
    app.run(debug=True)