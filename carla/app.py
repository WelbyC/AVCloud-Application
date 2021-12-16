from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def health():
    return '', 200

@app.route('/', methods=['POST'])
def carla():
    data = request.get_json()
    vehicle = data['vehicle']
    booking_id = data['booking_id']
    car_id = data['car_id']
    start = data['start']
    end = data['end']
    os.system(f'python3 ./PythonAPI/examples/automatic_control.py --filter={vehicle} --bookingid={booking_id} --carid={car_id} --start="{start}" --end="{end}"')
    return '', 200

if __name__ == '__main__':
    app.run()
