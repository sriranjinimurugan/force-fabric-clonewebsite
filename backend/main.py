from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymysql

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Subscriber(BaseModel):
    email: str


@app.get("/")
def home():
    return {"message": "ForceFabric Backend Running"}


@app.post("/subscribe")
def subscribe(subscriber: Subscriber):

    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="root123",
        database="forcefabric"
    )

    cursor = conn.cursor()

    try:
        sql = "INSERT INTO subscribers(email) VALUES(%s)"
        cursor.execute(sql, (subscriber.email,))
        conn.commit()

        return {
            "message": "Subscribed Successfully"
        }

    except pymysql.err.IntegrityError:
        return {
            "message": "Email already subscribed"
        }

    finally:
        cursor.close()
        conn.close()