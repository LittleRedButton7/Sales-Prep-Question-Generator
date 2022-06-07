from flask import Flask
import json

app = Flask(__name__)

@app.route("/questions", methods=['GET'])
def question_api():
    data_set = [{"text": "How are you?"}, {"text": "How old are you?"}, {"text": "What is your name?"}]
    json_dump = json.dumps(data_set)
    # question_database = json.dumps({"text": "Question1", "text": "Question2", "text": "Question3"})
    return json_dump

if __name__ == "__main__":
    app.run(debug=True)
