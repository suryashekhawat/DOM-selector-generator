from fastapi import FastAPI
import joblib
import pandas as pd

app = FastAPI()

# Load model and encoders
model = joblib.load("dom_selector_model.pkl")
label_encoders = joblib.load("label_encoders.pkl")
y_encoder = joblib.load("y_encoder.pkl")

@app.post("/predict/")
def predict_css_selector(sample: dict):
    df = pd.DataFrame([sample])
    
    for col in ["tag", "id", "classes", "attributes"]:
        known_classes = set(label_encoders[col].classes_)
        df[col] = df[col].apply(lambda x: x if x in known_classes else "unknown")
        df[col] = label_encoders[col].transform(df[col])

    pred = model.predict(df)[0]
    predicted_selector = y_encoder.inverse_transform([pred])[0]
    
    return {"predicted_css_selector": predicted_selector}

# Run the API
# uvicorn filename:app --reload
