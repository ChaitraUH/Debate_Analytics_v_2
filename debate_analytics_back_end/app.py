from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)


@app.route('/post_debate_data', methods=['POST', 'GET'])
def post_data():
    if request.method == 'POST':
        data = request.json['data']
        print(data)
        mongo_insert(data)
    return "submitted data\n"

def mongo_insert(data):
    # client = MongoClient('mongodb://localhost:27017')
    client = MongoClient('mongodb+srv://chegde:LS1setup!@cluster0-ef4b7.azure.mongodb.net/test?retryWrites=true&w=majority')
    db = client["debatedata"]
    collection = db["tags"]
    insertion = collection.insert_one(data)
    print(insertion)

if __name__ == '__main__':
    app.run()
