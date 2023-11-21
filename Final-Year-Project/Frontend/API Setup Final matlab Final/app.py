from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/color_values', methods=['GET'])  # Change method to GET
def get_color_values():
    # Replace this with your logic to retrieve color values if necessary
    # For now, let's return a sample set of values
    color_values = {
        'red': 50,
        'blue': 70,
        'green': 90
    }

    return jsonify(color_values)

if __name__ == '__main__':
    app.run(debug=True)
