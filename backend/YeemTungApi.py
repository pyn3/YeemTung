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


@app.route('/insertscore')
def insertscore():
    mydict = {
        'id': request.args.get('id'),
        'quiz1': int(request.args.get('q1')),
        'quiz2': int(request.args.get('q2')),
        'quiz3': int(request.args.get('q3')),
        'quiz4': int(request.args.get('q4')),
        'quiz5': int(request.args.get('q5')),
        'sum': int(request.args.get('sum'))
    }
    db.score.insert_one(mydict)
    return '<h3 align = center >Your data has been added.</h3>'


@app.route('/findscore')
def findscore():
    data_id = {'id': request.args.get('id')}
    found = db.score.find_one(data_id)
    del found['_id']
    ret = dict()
    ret['data'] = found
    return jsonify(ret)


@app.route('/find')
def find():
    found_list = list()
    found = db.score.find({})
    for i in found:
        del i['_id']
        found_list.append(i)
    ret = dict()
    ret['data'] = found_list
    return jsonify(ret)


app.run()
