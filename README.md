# Chat App

A cross-platform mobile chat application built with **React Native** and **Expo**, leveraging **Google Firestore Database** and **Firebase Cloud Storage**. This app enables users to communicate, share images, and send their location in real-time, optimized for both Android and iOS devices.

---

## 📱 Project Brief

### Objective
To build a chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.

### Context
With the increasing reliance on mobile devices for daily tasks, companies often develop native mobile apps for better user experience. Traditionally, building apps for multiple platforms (iOS & Android) required separate codebases and specialized developers. **React Native** solves this by allowing a single codebase for both platforms. This project utilizes React Native, Expo, and Google Firestore to create a robust chat application, demonstrating JavaScript mobile development skills.

---

## The 5 Ws

- **Who:**  
  Users include friends, family, or fellow students. The codebase is designed for further development and collaboration.

- **What:**  
  A fully functional native chat app built with React Native, along with complete documentation.

- **When:**  
  Whenever users want to communicate with each other.

- **Where:**  
  The app runs on Android and iOS devices, with Expo used for development and Google Firestore for message storage.

- **Why:**  
  Mobile chat apps are widely used; building one demonstrates essential React Native development skills.

---

## ✨ Features and Requirements

### User Stories

- Easily enter a chat room to start conversations.
- Send and receive text messages.
- Share images from the library or camera.
- Share current location in chat.
- Access and read messages offline.
- Screen reader accessibility support.

### Key Features

- Welcome screen for name/background color selection.
- Chat interface with message input and conversation display.
- Send images and location data via chat.
- Data is stored both online (Firestore) and offline (local storage).

### Technical Requirements

- Built entirely with **React Native**.
- Developed and run using **Expo**.
- Styled according to provided screen designs.
- **Google Firestore Database** for storing chat conversations.
- Anonymous authentication via **Google Firebase**.
- Local message storage for offline access.
- Image sharing from gallery or camera, stored in **Firebase Cloud Storage**.
- Location sharing with map integration.
- Uses the **Gifted Chat** library for UI and chat features.
- Well-commented codebase.

---

## 🚀 Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Android Studio](https://developer.android.com/studio) and/or [Xcode](https://developer.apple.com/xcode/) for emulators (optional, see Expo Go)

---

### Running the App

#### 1. Clone the Repository

```bash
git clone https://github.com/dwyertyrell/chat-app.git
cd chat-app
```

#### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

#### 3. Start Expo

```bash
npx expo start
```

#### 4. Running on Devices

**Expo Go App (Recommended for Quick Testing):**
- Download [Expo Go](https://expo.dev/client) from the App Store (iOS) or Google Play (Android).
- Scan the QR code displayed in your terminal or browser after running `expo start` to launch the app on your physical device.

**Android/iOS Emulators:**
- Install and configure emulators via Android Studio or Xcode.
- With the emulator running, choose “Run on Android device/emulator” or “Run on iOS simulator” in the Expo Dev Tools.

---

## 🔗 Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase (Firestore & Cloud Storage)](https://firebase.google.com/)
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)

---

## 🗺️ Project Structure

- `/components` — Custom UI components and chat interface.
- `/screens` — App screens (Welcome, Chat, etc).
- `/services` — Firebase, Firestore, and storage logic.
- `/assets` — Static resources (images, icons).
- `App.js` — Main app entry point.

---

## 📝 Accessibility

- Screen reader compatibility for visually impaired users.
- High contrast options and accessible navigation.

---

## 🛠️ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- Inspired by the need for accessible, cross-platform communication tools.
```