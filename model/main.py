# Importing necessary libraries

import uvicorn

import pickle

from pydantic import BaseModel

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from prediction import *

# Initializing the fast API server

app = FastAPI()

origins = [

"http://localhost.tiangolo.com",

"https://localhost.tiangolo.com",

"http://localhost",

"http://localhost:8080",

"http://localhost:3000",

]

app.add_middleware(

CORSMiddleware,

allow_origins=origins,

allow_credentials=True,

allow_methods=["*"],

allow_headers=["*"],

)
# Setting up the home route

@app.get("/")

def read_root():

    return {"data": "Badge Classification"}

    # Setting up the prediction route


@app.get("/prediction/")

def get_predict(userImage):
    
    club = prediction(userImage)
    
    return {

        "data": {
            'prediction': club
        }

    }

# Configuring the server host and port

if __name__ == '__main__':

    uvicorn.run(app, port=8080, host='0.0.0.0')

