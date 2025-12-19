# 🎮 Simon Says – Memory Game 

A modern, interactive **Simon Says memory game** built using **HTML, CSS, and JavaScript**.  
This version features a **Hard Mode** where the color sequence is **never replayed**, pushing players to rely entirely on memory and focus.

---

## ✨ Features

- 🧠 **Hard Mode Gameplay** – No sequence replay after each round
- 🎨 **Modern UI** – Glassmorphism design with smooth animations
- 🌈 **Live Background** – Subtle animated gradient with floating orbs
- 🎵 **Local Sound Effects** – Fast, offline-ready audio feedback
- 📊 **Score Tracking** – Displays current level and high score
- 📱 **Responsive Design** – Works on desktop, tablet, and mobile
- ♿ **Accessible Motion** – Respects reduced-motion preferences

---

## 🚀 Tech Stack

### Frontend
- **HTML5** – Structure
- **CSS3** – Styling, animations, and responsive layout
- **JavaScript (Vanilla)** – Game logic and interactions

### Assets
- **Local Audio Files** – Pad sounds and error feedback

---

## 📦 Installation

### Prerequisites
- A modern web browser
- Git (optional, for cloning)

---

### 1. Clone the repository

```bash
git clone https://github.com/Adhityae-506/Simon-Says.git
```
---

### 2. Open the project

```bash
Open index.html in your browser
```
-No dependencies or build tools required.

---

### 🧠 How to Play (Hard Mode)

1. Press **Start** — Simon flashes one color.
2. Repeat the color by clicking the correct pad.
3. Simon then flashes **only one new color**.
4. Repeat the **entire sequence from memory**, in order.
5. Each correct round adds **one more color**.
6. **No hints. No replays.**
7. One wrong move ends the game.

> This mode is intentionally challenging and focuses on pure memory skills.

---

## 🧪 Game Logic

### Sequence Rule

- The game stores the full sequence internally.
- Only the **newly added color** is shown each round.
- The player must recall **all previous steps** without visual help.

---

## 📁 Project Structure

```
Simon-Says/
│
├── index.html          # Game structure
├── styles.css          # UI styles & animations
├── script.js           # Game logic
├── README.md
│
└── assets/
    └── sounds/
        ├── green.mp3
        ├── red.mp3
        ├── yellow.mp3
        ├── blue.mp3
        └── wrong.mp3
```

---

## 🎨 Customization

- Adjust pad colors and visual effects in `styles.css`.
- Replace sound files in `assets/sounds` to customize audio feedback.
- Modify difficulty and game logic in `script.js`.

---
## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open-source and free to use for learning and personal projects.

Made with ❤️ by Adhitya.
