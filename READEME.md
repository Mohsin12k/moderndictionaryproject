# 📚 Interactive Dictionary App

An interactive dictionary web application that allows users to search for words, view their meanings, examples, and pronunciation, with smooth animations and a clean user interface.

## ✨ Features

- **Animated Search Bar**  
  - Initially, only a magnifying glass icon is shown.  
  - On click, the magnifying glass disappears and is replaced by an animated close (X) button.  
  - An input box with two buttons appears:  
    - **Search** button  
    - **Clear** button  

- **Search Functionality**  
  - Type a word into the input box and click **Search** or press **Enter**.  
  - The results drop down, showing:
    - Word
    - Meanings
    - Examples (if available)  
      - If no example exists: `"Sorry, example is not found."`
  - If the word is not found, API fails, or input is empty, an appropriate **error message** is displayed under the input box.

- **Results Section**  
  - Includes two additional buttons:  
    - **Play Sound**: Pronounces the word  
    - **Close**: Hides the result section  
  - Below the input box, a **changing message** appears each time you search, e.g.:  
    - `"Search words meanings above!"`
    - `"Ready to explore another word?"`
    - `"Type a word and discover its meaning!"`

## 🛠 How It Works
1. Hover over the header’s search icon (magnifying glass).
2. Click it to reveal the input box with **Search** and **Clear** buttons.
3. Enter a word and click **Search** (or press Enter).
4. View the meanings, examples, and pronunciation in the dropdown section.
5. Use the **Play Sound** button to hear the pronunciation.
6. Use the **Close** button to hide the dropdown and continue searching.

## 📷 Screenshots
![App Screenshot](assets/image-1.png)
![App Screenshot](assets/image-2.png)
![App Screenshot](assets/image-3.png)

## 📦 Technologies Used
- HTML5
- CSS3 / TailwindCSS (if used)
- JavaScript (Vanilla JS)
- Dictionary API

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
