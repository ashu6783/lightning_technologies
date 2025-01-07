# Lightning Technologies Dashboard

This project is a web-based dashboard that provides an interactive and responsive overview of various metrics, including financial data, customer and supplier records, and more. The dashboard dynamically fetches and displays data based on a selected date, and updates in real-time when the user changes the date.

main ui

![image](https://github.com/user-attachments/assets/2e7dc3bf-d924-4392-b09d-f0ea9dc55b8a)

profile dropdown

![image](https://github.com/user-attachments/assets/e1264e3a-bbc1-4b22-a897-f219e7ebcf38)

notifications

![image](https://github.com/user-attachments/assets/607a24b5-a1c7-4460-b0c9-2cdb7a44a293)

DAY-2
![image](https://github.com/user-attachments/assets/d7d613c3-699e-47f8-b4e7-b73815a772ee)

payment status

![image](https://github.com/user-attachments/assets/1bf097e0-3a00-4a3d-9320-b70db8ce4478)


few improvements are still left I am working on that for UI..


## Requirements

- Replicate the dashboard UI as closely as possible to the provided Figma design.
- Dynamically display data (e.g., payments, net profit, expenses) based on the selected date.
- When the user changes the date, the dashboard content should update accordingly.
- Ensure the design is responsive and works well across both desktop and tablet screens.

## Key Features

- **Date Filtering:** Data displayed on the dashboard is filtered by the selected date, which is passed through the URL endpoint (e.g., `{{host}}/dashboard?{endpoint}`).
- **Dynamic Data Display:** Metrics such as payments, expenses, net profit, supplier payments, and customer payments are fetched dynamically.
- **Responsive Design:** The layout is designed to work across desktop and tablet devices.
- **Charts and Tables:** Visualizations like dynamic charts for payments, expenses, and net profit, and tables for recent supplier and customer payments are included.
- **Sidebar Navigation & Notification Dropdown:** As shown in the provided Figma design.


## Approach
I chose React for this project to showcase the basics of building dynamic and interactive dashboards. The development was approached in modular steps:

Layout Structure:

Divided the project into four main sections:
Sidebar: Contains various navigation links to different sections of the dashboard.
Navbar: Includes features like search, notifications, profile dropdown, and the title "Springfield Media."
Settings: Still being worked on to allow theme customization with options for different colors and dark theme support.
Dashboard Page:
Dashboard:For displaying data and charts.

Created StatCards for displaying dynamic stats like sales, expenses, net profit, etc.
Added LineCharts and PieCharts to visually represent data using mock static data.
The charts were later connected to mock data hosted on JSON Server, where the API endpoint (http://localhost:5000/${selectedEndpoint}) fetches the required data.
Responsive Design:

The layout is designed to be responsive and work smoothly across desktop and tablet screens.

**Theme Support**: Currently working on adding dark theme support and ensuring smooth theme switching based on user preferences.
The approach focuses on structuring the app in a scalable and maintainable way while adding the necessary dynamic features to make it interactive for users.

## Project Setup

### Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (https://nodejs.org/)
- **npm** (Node Package Manager)

### Installing Dependencies

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lightning-technologies-dashboard.git
   cd lightning-technologies-dashboard
2. Install the required dependencies:
   npm install

## Setup JSON Server (For Data Hosting)

--Install json-server globally if not already installed:
  npm install -g json-server

## Create a db.json file in the root of your project with the data you want to serve. For example:

{
  "data": [
    {
      "date": "02-01-2025",
      "total_sales": "45,451.03",
      "total_expenses": "75,586.78",
      "net_profit": "19,989.20",
      "due_amount": "34,916.86",
      "payment_received": "53,408.95",
      "supplier_records": [...],
      "customer_records": [...],
      "top_selling_products": [...],
      "supplier_payments": [...],
      "customer_payments": [...]
    }
  ]
}(it is provided)


## Start the JSON server to serve the data:

  json-server --watch db.json --port 5000

## Running the Application
   Start the React development server:
    npm start

Open your browser and visit http://localhost:3000 to view the dashboard.

## Key Technologies

React: Used for building the user interface and managing the component lifecycle.

Axios: For making API requests to the backend.

Recharts: For generating dynamic charts.

React Router: For managing routing and navigation within the application.

Date-Fns: For date-related operations and formatting.

JSON Server: For serving mock data during development.

**Syncfusion UI Components**: Utilizes Syncfusion for advanced UI components for a smooth user experience.








