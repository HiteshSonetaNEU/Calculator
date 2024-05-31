# Budget Calculator

## Overview

The Budget Calculator is a simple React web application that allows users to manage their monthly subscriptions and expenditures. Users can add expenses, categorize them, and the application will display the total amount spent per category. Additionally, the app calculates the required monthly income based on the total rent expenditure, ensuring rent does not exceed 33% of the monthly income.

## Features

- Add, view, and categorize monthly expenses.
- Display total expenditure per category.
- Calculate and display required monthly income based on rent.
- Visualize expenditures with a pie chart.
- Responsive design for mobile and desktop screens.

## Technologies Used

- React: For building the user interface.
- Chart.js: For creating the pie chart.
- CSS: For styling the application.

## Setup

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/HiteshSonetaNEU/Calculator
    cd calculator
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open the application in your browser:
    ```sh
    http://localhost:3000
    ```

## Usage

1. **Add an Expense:**
    - Click on the `Add Expense` button to open the expense form.
    - Fill in the `Name`, `Amount`, and `Category` fields.
    - Click `Add Expense` to save the expense. The form will close, and the expense list will update.

2. **View Expenses:**
    - By default, the expense list is displayed on the home page.
    - Expenses are grouped by category with totals calculated for each category.
    - A pie chart is displayed showing the distribution of expenditures by category.

3. **Calculate Required Monthly Income:**
    - The required monthly income is calculated and displayed below the expense list.
    - The calculation ensures rent does not exceed 33% of the monthly income.

## Project Structure

