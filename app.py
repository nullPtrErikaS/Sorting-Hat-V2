from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sort', methods=['POST'])
def sort():
    houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    chosen_house = random.choice(houses)
    return jsonify({'house': chosen_house})

if __name__ == "__main__":
    app.run(debug=True)
