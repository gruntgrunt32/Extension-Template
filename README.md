# 🧩Extension Template  

_A simple and customizable Chrome Extension template for building browser extensions with a flask app to add additional functionalities._  

---

## 🚀 Features  
- ✅ **Manifest v3**: Uses the latest Chrome extension standard.  
- ✅ **Popup UI**: Basic popup interface with HTML, CSS, and JavaScript.  
- ✅ **Content Scripts**: Inject scripts into webpages for DOM manipulation.  
- ✅ **Background Scripts**: Manage extension events and persistent state.  
- ✅ **Storage API**: Save and retrieve user preferences.  
- ✅ **Flask API Integration**: Backend server to interact with the extension.  

---

## 📦 Installation & Usage  

### 🔹 Clone the Repository  
```sh
git clone https://github.com/gruntgrunt32/Extension-Template.git
cd Chrome-Extension-Template
```  

### 🔹 Load the Extension in Chrome  
1. Open **Google Chrome** and navigate to `chrome://extensions/`.  
2. Enable **Developer mode** (toggle in the top right).  
3. Click **Load unpacked** and select the project folder.  
4. The extension is now installed and ready to use!  

---

## 🌐 API Setup (Flask)  

This extension includes a **Flask API** for handling backend requests.  

### 🔹 Install Flask & Dependencies  
```sh
cd api
python -m venv venv  # Create virtual environment
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate  # Windows

pip install -r requirements.txt  # Install dependencies
```  

### 🔹 Run the Flask Server  
```sh
python app.py
```  
The API will now be available at **http://127.0.0.1:5000** and can interact with the extension.  

---

## 📂 Project Structure  

```
📂 Chrome-Extension-Template
 ┣ 📂 src
 ┃ ┣ 📜 popup.html        # Extension popup UI
 ┃ ┣ 📜 popup.js          # JavaScript for popup functionality
 ┃ ┣ 📜 content.js        # Content script for interacting with web pages
 ┃ ┣ 📜 background.js     # Background script for handling events
 ┃ ┗ 📜 styles.css        # Styles for the extension UI
 ┣ 📂 api
 ┃ ┣ 📜 app.py            # Flask API main file
 ┃ ┣ 📜 database.py       # Database setup and connection
 ┃ ┗ 📜 requirements.txt  # Dependencies for the API
 ┣ 📜 manifest.json        # Chrome extension manifest file (v3)
 ┣ 📜 README.md            # Project documentation
```  

---

## 🎨 Customization  

- Modify `manifest.json` to update extension details like **name, description, and permissions**.  
- Edit `popup.html` and `popup.js` to customize the extension's UI and behavior.  
- Use `content.js` to interact with web pages dynamically.  
- Update `api/app.py` to extend the Flask API functionality.  

---

## 📜 License  
This project is open-source and licensed under the **MIT License**.  

---


## 📢 Connect with Austin Reed  
🔗 **GitHub:** [gruntgrunt32](https://github.com/gruntgrunt32)  
🔗 **Website:** [austin-reed.com](https://austin-reed.com)  

---

### 🎉 **Happy Coding!** 🚀  
