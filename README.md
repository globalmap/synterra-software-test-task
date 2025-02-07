# Synterra Software Test Task

## Overview

This project is a note-taking application built with Next.js, Tailwind, Typescript and RxDB.

## Features

- Create, edit, and delete notes
- Responsive design
- Safe navigation and online status detection

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/synterra-software-test-task.git
   cd synterra-software-test-task
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Hooks

- `useOnlineStatus`: A custom hook to check the online status of the application.
- `useSafeNavigation`: A custom hook to handle safe navigation within the application.

## Project Structure

- `src/components`: Contains React components.
- `src/databases`: Contains RxDB database setup and models.
- `src/services`: Contains API client for interacting with the backend.
- `src/stores`: Contains context providers and hooks for state management.

### Components

- `EditNote`: Component for editing an existing note.
- `NewNote`: Component for creating a new note.
- `NoteList`: Component for displaying the list of notes.
- `NoteItem`: Component for displaying a single note item.
- `OfflineBanner`: Component for displaying an offline status banner.

### Services

- `apiClient.ts`: Contains functions for interacting with the backend API (fetch, create, update, delete notes).

### Database

- `index.ts`: Initializes the RxDB database and sets up collections.
- `models/notes.ts`: Defines the note schema and types.

### Stores

- `database.tsx`: Provides the database context and hooks for accessing the database.

## License

This project is licensed under the MIT License.
