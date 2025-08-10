# React Native Mobile Chat App

A cross-platform mobile chat application built with React Native, Expo, Firebase, and Gifted Chat. This project was developed as part of CareerFoundry’s Achievement 5 Project and demonstrates key skills in JavaScript mobile application development, real-time data management, device integration, and accessibility.

---

## Table of Contents

- [Overview](#overview)
- [Project Objective](#project-objective)
- [Features](#features)
- [User Stories](#user-stories)
- [Technical Requirements](#technical-requirements)
- [Design Specifications](#design-specifications)
- [Getting Started](#getting-started)
- [Setting Up the Project Locally](#setting-up-the-project-locally)
- [Architecture & Key Technologies](#architecture--key-technologies)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## Overview

Mobile chat applications are among the most commonly used apps worldwide. This project leverages React Native and Expo to deliver a modern chat experience for both Android and iOS devices, with seamless real-time communication, media sharing, and device integration, all from a single codebase.

---

## Project Objective

> Build a native mobile chat app using React Native, Expo, and Google Firestore Database that allows users to:
> - Enter a chat room, communicate in real time, share images, and share location.
> - Demonstrate proficiency in JavaScript mobile development and cross-platform technologies.

---

## Features

- **User Onboarding:** Enter your name and choose a custom background color before joining the chat.
- **Real-Time Messaging:** Send and receive messages instantly.
- **Media Sharing:** Pick or capture images to share directly in chat.
- **Location Sharing:** Share your current location in a map view.
- **Offline Support:** Read previous messages and conversations when offline.
- **Accessibility:** Optimized for screen readers and other assistive technologies.
- **Cross-Platform:** Developed for both Android and iOS using Expo.

---

## User Stories

- *As a new user, I want to easily enter a chat room so I can quickly start talking to my friends and family.*
- *As a user, I want to send messages to my friends and family members to exchange the latest news.*
- *As a user, I want to send images to my friends to show them what I'm currently doing.*
- *As a user, I want to share my location with my friends to show them where I am.*
- *As a user, I want to read my messages offline so I can reread conversations at any time.*
- *As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.*

---

## Technical Requirements

- **React Native:** All code written in JavaScript using React Native.
- **Expo:** Utilized for fast development, device integration, and easy deployment.
- **Styling:** UI components styled according to provided design specifications.
- **Gifted Chat:** Chat interface and functionality implemented using Gifted Chat library.
- **Firebase:**
  - **Firestore Database:** Stores chat conversations in real time.
  - **Firebase Authentication:** Users authenticated anonymously.
  - **Firebase Cloud Storage:** Images are uploaded and stored securely.
- **Local Storage:** AsyncStorage is used to store conversations for offline access.
- **Image Handling:** Users can pick images from the library or take new photos with the camera.
- **Location Sharing:** Users can send their current location, displayed as a map view in chat.
- **Code Comments:** The codebase is thoroughly commented for clarity and maintainability.

---

## Design Specifications

| Element                  | Specification                                                                                           |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| **App Title**            | Font size: 45, weight: 600, color: #FFFFFF                                                             |
| **"Your Name"**          | Font size: 16, weight: 300, color: #757083 (50% opacity)                                               |
| **Choose Background**    | Font size: 16, weight: 300, color: #757083 (100% opacity)                                              |
| **Color Options**        | HEX codes: #090C08, #474056, #8A95A5, #B9C6AE                                                          |
| **Start Chatting Button**| Font size: 16, weight: 600, color: #FFFFFF, button color: #757083                                      |
| **Spacing**              | Vertical and horizontal spacing: evenly distributed                                                     |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Firebase Project](https://console.firebase.google.com/)
- An Android or iOS device/emulator

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dwyertyrell/chat-app.git
   cd chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project and enable Firestore, Authentication (Anonymous), and Cloud Storage.
   - Copy your Firebase config to the project (usually in `config.js` or directly in your main app file).

4. **Start development server:**
   ```bash
   expo start
   ```

5. **Run the app:**
   - On a physical device: Scan the QR code using Expo Go.
   - On an emulator: Press `a` for Android or `i` for iOS in the terminal.

---

## Setting Up the Project Locally

Follow these steps to set up and run the project in your local development environment:

### Prerequisites

- [Node.js](https://nodejs.org/) installed (recommended: latest LTS version)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (will be installed via `npx`)
- A physical Android or iOS device, or an emulator
- [Expo Go](https://expo.dev/expo-go) app installed on your mobile device (available on [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) and [Apple App Store](https://apps.apple.com/app/expo-go/id982107779))
- A Firebase project (for database, authentication, and storage setup)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dwyertyrell/chat-app.git
   cd chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project in [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database, Cloud Storage, and Authentication (set to Anonymous sign-in).
   - Copy your Firebase configuration into the project (usually in a `config.js` file or directly in your main app file).

4. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

5. **Run the app on your mobile device:**
   - Open the [Expo Go](https://expo.dev/expo-go) app on your phone.
   - Scan the QR code shown in your terminal or browser after running `npx expo start`.
   - The app will load and run natively on your device.

   > **Tip:** You can also press `a` to launch the app on an Android emulator or `i` for an iOS simulator if set up on your computer.

### Troubleshooting

- Make sure your phone and computer are on the same Wi-Fi network for Expo Go to connect.
- If you encounter issues scanning the QR code, you can manually enter the Expo URL provided in the terminal into Expo Go.
- Check your Firebase configuration and permissions if you encounter authentication or database errors.

---

## Architecture & Key Technologies

- **React Native & Expo**: Core framework for UI and device APIs.
- **Gifted Chat**: Highly customizable chat UI component.
- **Firebase (Firestore & Storage)**: Real-time database, cloud storage, and authentication.
- **AsyncStorage**: For local, offline chat history.
- **React Navigation**: (if used) For managing app screens and navigation.

---

## Accessibility

This app is designed with accessibility in mind:

- All interactive elements are accessible via screen readers.
- Sufficient color contrast for text and backgrounds.
- Clear labels and hints for all form fields and buttons.
- Supports dynamic font scaling.
- Touch targets sized appropriately.

---

## Contributing

Contributions are welcome! Please open issues for bug reports or feature requests, and submit pull requests for improvements.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Acknowledgements

- [CareerFoundry](https://careerfoundry.com/) for project guidance.
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat) library.
- [Firebase](https://firebase.google.com/) for backend services.
- [Expo](https://expo.dev/) for streamlined development.

---

## Contact

If you have questions or need support, please contact [dwyertyrell](https://github.com/dwyertyrell).

---