# DOM Selector Prediction Using Machine Learning
🚀 **A research & development project to predict CSS selectors based on user clicks and DOM structure using Machine Learning.**

---

## 📌 Project Overview
This project aims to predict **CSS selectors** based on user **click data** and **page DOM structure**.  
It leverages a **Machine Learning model** trained on real-world DOM datasets.

### Key Features
- 🖥️ **Chrome Extension** to capture DOM structure.
- 📡 **Node.js Server** to store data locally.
- 🤖 **Machine Learning Model** to predict the best CSS selector.
- 🌐 **FastAPI** for serving predictions via an API.
- 📊 **Training & Testing Pipeline** using `scikit-learn`.

---

## 🛠️ Tech Stack
- **Frontend:** Chrome Extension (JavaScript)
- **Backend:** Node.js (Express)
- **Machine Learning:** Python, Scikit-learn
- **API:** FastAPI
- **Data Storage:** JSON / SQLite / MongoDB (optional)

---

## 📂 Project Structure
```
📂 dom-selector-project
│── 📂 chrome-extension/    # Chrome extension for capturing DOM
│── 📂 server/              # Node.js server to save data
│── 📂 model/               # Python scripts for ML training
│── 📂 api/                 # FastAPI server for predictions
│── 📂 transformer_model/   # Transformer Model for predictions
│── README.md               # Project documentation
```

---

## 🚀 How to Run the Project
### 1️⃣ Setup Chrome Extension
1. Open `chrome://extensions/`
2. Enable **Developer Mode** (top right corner)
3. Click **Load Unpacked** and select the `chrome-extension/` folder
4. Open any webpage, capture data using the extension.

---

### 2️⃣ Run the Node.js Server
1. Navigate to the `server/` folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```

---

### 3️⃣ Train the Machine Learning Model
1. Navigate to the `model/` directory.
2. Create a virtual environment:
   ```sh
   python -m venv dom_env
   ```
3. Activate the environment:
   - **Windows**: `dom_env\Scripts\activate`
   - **Mac/Linux**: `source dom_env/bin/activate`
4. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Run training script:
   ```sh
   python train_model.py
   ```
6. Save trained model:
   ```sh
   python save_model.py
   ```

---

### 4️⃣ Run the API for Predictions
1. Start the FastAPI server:
   ```sh
   uvicorn api:app --reload
   ```
2. Test with **cURL**:
   ```sh
   curl -X POST "http://127.0.0.1:8000/predict/" \
        -H "Content-Type: application/json" \
        -d '{"tag": "li", "id": "check-scoring", "classes": "", "attributes": "[{\"name\": \"class\", \"value\": \"reference internal\"}, {\"name\": \"href\", \"value\": \"sklearn.gaussian_process.kernels.WhiteKernel.html\"}]", "bounding_x": -413.5, "bounding_y": -5.3125, "bounding_width": 215.33334350585938, "bounding_height": 37.04166793823242}'
   ```

---

## 🛠️ Future Improvements
- ✅ **Improve model accuracy** with more training data.
- ✅ **Deploy API** using AWS / DigitalOcean.
- ✅ **Build a UI Dashboard** for predictions.
- ✅ **Use Deep Learning** (LSTMs, Transformers).

---

## 🤝 Contributions
💡 Open-source contributions are welcome! Fork the project, submit PRs, or report issues.

---

## 📜 License
📝 MIT License.
