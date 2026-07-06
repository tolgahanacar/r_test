# r_test (React Tester)

> A developer dashboard, sandbox, and utility playground built with React, configured with React Testing Library, ESLint, Prettier, and Husky.

[![Node Version](https://img.shields.io/badge/node-14.16.1-green.svg)](https://nodejs.org/en/)
[![NPM Version](https://img.shields.io/badge/npm-6.14.12-green.svg)](https://www.npmjs.com/)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)
[![Testing Library Version](https://img.shields.io/badge/%40testing--library%2Freact-14.0.0-yellow.svg)](https://testing-library.com/)

---

## 🚀 Overview

`r_test` is a testing sandbox project for React applications. It showcases interactive elements, active sandbox modes, and security restrictions (disabled fields, buttons, and custom link behaviors) to practice React Testing Library assertions and unit-testing workflows.

### Project History

| Release Date | Last Update |
| :----------- | :---------- |
| Jul 29, 2021 | Dec 2, 2024 |

---

## 🛠️ Features & Sandbox Elements

- **Developer Dashboard**: High-fidelity UI with visual status indicators.
- **Interactive Sandbox**: Active controls like buttons and custom styling colors.
- **Security Sandboxing**: Disabled state testing covering:
  - Submit buttons (`[disabled]`)
  - Form fieldsets (`fieldset[disabled]`)
  - Non-navigable links (`pointer-events: none`)
- **Automated Verification**: Comprehensive unit test coverage configured with Jest and `@testing-library/react`.
- **Pre-commit Quality Gates**: Enforced code styling and linting with Husky and lint-staged.

---

## 💻 Tech Stack

- **Framework:** React 18 (CRA-based)
- **Testing:** Jest, `@testing-library/react` (v14), `@testing-library/jest-dom` (v6)
- **Quality Assurance:** ESLint, Prettier
- **Git Hooks:** Husky, lint-staged

---

## ⚙️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run test:debug`

Launches the test runner in inspect/debug mode, running tests synchronously in a single band.

### `npm run lint`

Runs ESLint to analyze static code quality across your JavaScript/React components.

### `npm run format`

Runs Prettier to format JavaScript, React, CSS, Markdown, and JSON files across the codebase.
