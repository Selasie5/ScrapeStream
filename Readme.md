# Web Scraper and Interaction Simulator

## Overview

This project is a full-stack web application that allows users to input a URL, scrape the data from that webpage, and simulate browser interactions using a headless browser. The project demonstrates the capability to programmatically interact with web pages, simulating user actions like clicking buttons and filling forms.

## Features

- Scrape webpage data (title, content)
- Simulate user interactions on the scraped page (clicking, typing, etc.)
- Store scraped data and interaction history in MongoDB
- Basic logging of server activities

## Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Browser Engine: Puppeteer for headless browsing and interaction simulation

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/web-scraper-app.git
    cd web-scraper-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start MongoDB:
    ```bash
    mongod
    ```

4. Set up the environment variables:
    ```bash
    cp .env.example .env
    ```

5. Run the application:
    ```bash
    npm start
    ```

6. Visit `http://localhost:3000` in your browser.

## License

MIT
