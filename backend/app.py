from flask import Flask,request
from pymongo import MongoClient
from flask_cors import CORS
from flask_ngrok import run_with_ngrok

try:
    client = MongoClient("mongodb+srv://pie31267:31267@cluster0.x3dkn.mongodb.net/YeemTung?retryWrites=true&w=majority")
    db = client.YeemTung
    print('Connected to database sucessfully, congratulations.')

except:
    print('Connected to database error, please try again later.')
app = Flask(__name__)
CORS(app, support_credentials=True)
run_with_ngrok(app)


@app.route('/')
def home():
    return '<h1>Hello Flask</h1>'

@app.route('/addData', methods=['POST'])
def addData():
    data = request.get_json()
    db.insert_one(data)
    return jsonify(data)

app.run()