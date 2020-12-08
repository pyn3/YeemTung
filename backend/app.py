import pandas as pd
import requests
from pymongo import MongoClient
from flask import Flask, request, jsonify
from urllib.parse import urlencode
from flask_cors import CORS, cross_origin
from flask_ngrok import run_with_ngrok

try:
    client = MongoClient("mongodb+srv://pie31267:31267@cluster0.x3dkn.mongodb.net/YeemTung?retryWrites=true&w=majority")
    db = client.YeemTung.all_data
    print('Connected to database sucessfully, Congratulations.')

except:
    print('Connected to database error, please try again later.')


app = Flask(__name__)
CORS(app, support_credentials=True)
run_with_ngrok(app)

@app.route('/')
def home():
    return '<h1>Hello Flask</h1>'

@app.route('/insertdata', methods=['POST'])
def addData():
    data = request.get_json()
    
    if type(db.find_one({'borrower': data['borrower'],'lender': data['lender']})) == type(dict()):
      output = db.find_one_and_update({'borrower': data['borrower'],'lender': data['lender']},{'$inc': {'money': int(data['money'])}})

    elif type(db.find_one({'borrower': data['lender'],'lender': data['borrower']})) == type(dict()):
      output = db.find_one_and_update({'borrower': data['lender'],'lender': data['borrower']},{'$inc': {'money': -int(data['money'])}})

    else:
      data['money'] = int(data['money'])
      db.insert_one(data)

    del data['_id'] 
    return jsonify(data)


@app.route('/find', methods=['POST'])
def findOne():
  data=request.get_json()
  output = db.find_one({'borrower': data['borrower'],'lender': data['lender']})
  if type(output) == type(dict()):
    del output['_id']
  else:
    return 'Not Found!'
  return jsonify(output)

app.run()