from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    print("Received data:")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)

    return jsonify({
        "success": True,
        "message": "Data received successfully",
        "data": {
            "name": name,
            "email": email,
            "message": message
        }
    })


@app.route("/")
def home():
    return "Flask Backend is running!"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)