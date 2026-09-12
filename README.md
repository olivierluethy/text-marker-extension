# 💾 Text Marker – Chrome-Erweiterung zum Markieren, Bearbeiten und Speichern von Text

[![License](https://img.shields.io/github/license/olivierluethy/text-marker-extension)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0-blue.svg)]()
[![Chrome](https://img.shields.io/badge/Chrome-unterstützt-brightgreen.svg)]()
[![Made for PromptIn](https://img.shields.io/badge/Built_for-PromptIn-blueviolet)]()

---

## 📸 Vorschau

| Text markieren | Modal mit Bearbeitung | Popup mit gespeicherten Texten |
|----------------|------------------------|-------------------------------|
| ![2qDkDGKqz8](https://github.com/user-attachments/assets/41529b53-5f59-4f49-940f-19a6abc80c02)| ![image](https://github.com/user-attachments/assets/834ae13d-cb45-4e70-bc16-e5853438834a) | ![mDoRTPXFuG](https://github.com/user-attachments/assets/51191380-d1d7-47d1-9b2b-34e8dbbf06cc) | ![Popup](screenshots/popup.png) |

---

## ✨ Features

- ✅ **Markieren von Text** auf beliebigen Webseiten
- 💾 Automatisches Icon (💾) beim Markieren
- 📝 Modal zum **Bearbeiten** des markierten Textes vor dem Speichern
- 🔒 Speichern in `chrome.storage.sync`
- 📋 Popup zeigt gespeicherte Texte
- 🛠 Texte können **bearbeitet** oder **gelöscht** werden
- 🟢 Aktivieren/Deaktivieren der Funktion über ein Kontrollkästchen
- ✨ Moderne CSS-Animationen & UI-Effekte

---

## 🚀 Warum dieses Projekt?

Diese Erweiterung ist als **technisches Grundgerüst** für ein größeres Projekt namens **PromptIn** entstanden.

> PromptIn ist ein komplexes System mit zahlreichen Komponenten. Neue Funktionen dort direkt zu integrieren ist zeitaufwendig und fehleranfällig – insbesondere für KI-gestützte Unterstützung.

Durch die Entwicklung dieser isolierten Erweiterung konnte ich:

- Die Anforderungen klarer definieren
- Das Verhalten im DOM unabhängig testen
- Den nötigen Code entwickeln, **den ich später 1:1 oder modular in PromptIn integrieren kann**
- Vermeiden, dass eine KI (z. B. ChatGPT) auf eine völlig überladene Problemstellung trifft und dadurch Missverständnisse entstehen

🧠 Kurz gesagt: **Komplexe Systeme brauchen manchmal einfache Mini-Projekte**, um sauber und nachhaltig erweitert zu werden.

---

## 📦 Installation (lokal)

1. 📁 Repository herunterladen oder klonen:
   ```bash
   git clone https://github.com/olivierluethy/text-marker-extension.git

2. 🌐 In Chrome `chrome://extensions` öffnen

3. 🧪 Entwicklermodus aktivieren (oben rechts)

4. 📂 Auf **„Entpackte Erweiterung laden“** klicken

5. 📁 Projektordner auswählen

---

## 🌐 Veröffentlichung im Chrome Web Store (optional)

Wenn du die Erweiterung öffentlich machen möchtest:

1. Gehe zu: [https://chrome.google.com/webstore/devconsole/](https://chrome.google.com/webstore/devconsole/)
2. Lade die ZIP-Datei deiner Erweiterung hoch
3. Füge Screenshots und Beschreibung hinzu
4. Veröffentliche sie nach Googles Review

---

## 📁 Ordnerstruktur

```
text-marker-extension/
├── manifest.json
├── content.js
├── background.js
├── popup.html
├── popup.js
├── modal.css
├── icon.png
├── screenshots/
│   ├── select-text.gif
│   ├── modal.png
│   └── popup.png
```

---

## 🧩 In Planung

* [ ] Exportfunktion (Markdown oder .txt)
* [ ] Gruppierung oder Tagging gespeicherter Texte
* [ ] Integration in PromptIn als vollwertiges Text-Notizmodul

---

## 📜 Lizenz

MIT – frei zur Verwendung, Weiterentwicklung oder Integration in eigene Projekte.

---

## 🙌 Autor

Erstellt mit Blick auf **Klarheit in komplexen Architekturen**, unterstützt durch KI-Assistenz und modulare Prototypen.
Wenn du Feedback, Fragen oder Interesse an PromptIn hast – melde dich gern!

---
