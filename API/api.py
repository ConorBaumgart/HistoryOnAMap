import flask
from flask import request, jsonify
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

testData = [
    {'lat': 38.8484726, 'lng': 18.62791634 },
    {'lat': 38.8484726, 'lng': 18.62763977 },
    {'lat': 38.84875107, 'lng': 18.62763977 },
    {'lat': 38.84875107, 'lng': 18.62708282 },
    {'lat': 38.84902954, 'lng': 18.62708282 },
    {'lat': 38.84902954, 'lng': 18.62680626 },
]

countries = ['Sudan2011']
countryData = []

for country in countries:
    with open('./countrydata/' + country + '/' + country + '.json') as json_file:
        jsonObj = json.load(json_file)
        countryData.append(jsonObj['data'])

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/api/resources/countrydata/all', methods=['GET'])
def country_data_all():
    response = jsonify(countryData)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run()