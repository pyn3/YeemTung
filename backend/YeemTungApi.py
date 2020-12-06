from flask import Request,Flask
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from flask_ngrok import run_with_ngrok

try:
    client = MongoClient(
        "mongodb+srv://pie31267:31267@lab7.x3dkn.mongodb.net/student_score?retryWrites=true&w=majority")
    db = client.student_score
    print('Connected to database sucessfully, congratulations.')
except:
    print('Connected to database error, please try again later.')
app = Flask(__name__)
CORS(app, support_credentials=True)
run_with_ngrok(app)


@app.route('/')
def home():
    return '<h1>Hello Flask</h1>'


app.run()
