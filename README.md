# Throw Track App

## Overview
Throw Track is a web application designed to help coaches and parents track the performance of youth baseball pitchers. The app allows users to easily log pitch counts, record pitch locations in a mock strike zone, and monitor pitcher development over time. Built with a simple user interface, this app aims to make tracking pitchers' progress quick and efficient.

## Features
- **Pitch Counter**: A user-friendly interface to log pitches using "+" and "-" buttons.
- **Strike Zone Layout**: Users can tap on a grid representing the strike zone to record pitch locations for each throw.
- **End Session Button**: Log the current session's data, reset the pitch count, and prepare for the next session.
- **Real-Time Data Sync**: Integrated with Firebase for real-time data syncing, allowing coaches and parents to access pitch and strike zone information instantly.

## Tech Stack
- **HTML/CSS**: The front-end layout is built with HTML, styled using CSS.
- **JavaScript**: Handles the app’s functionality for pitch counting, strike zone interaction, and session logging.
- **Firebase Realtime Database**: Stores pitch count data, strike zone locations, and session data in real time.

## How to Use
1. **Increment/Decrement Pitch Count**: Use the "+" or "-" buttons to adjust the pitch count.
2. **Record Pitch Location**: Tap on any box in the strike zone grid to log the location of a pitch.
3. **End Session**: Click the "End Session/Inning" button to log the current session’s data and reset the pitch count.

## Future Features
- Track more detailed metrics over time such as velocity and spin rate.
- User authentication for coaches and parents to track individual player data.
- Integration with additional APIs for advanced pitcher analytics.

## Installation
1. Clone this repository:  
   `git clone https://github.com/yourusername/throw-track-app.git`
2. Install dependencies:  
   `npm install`
3. Run the app locally:  
   `npm start`


