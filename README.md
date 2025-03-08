# Clean Architecture .NET + Angular Application

## Overview

This repository contains a sample project that demonstrates a **Clean Architecture** solution using:
- **.NET (ASP.NET Core)** for the backend API
- **Angular** for the frontend

The project implements CRUD operations for a sample **Product** entity. The backend is structured into multiple layers—**Domain**, **Application**, **Infrastructure**, and **Api**—to promote separation of concerns and scalability. The Angular front end communicates with the API to display and manage product data.

## Features

- **Clean Architecture**: Separates concerns into Domain, Application, Infrastructure, and Api layers.
- **CRUD API**: Manage products using RESTful endpoints.
- **Angular Frontend**: A user-friendly interface for listing, creating, editing, and deleting products.

## Prerequisites

Before setting up the project, make sure you have the following installed:
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli) (install globally with `npm install -g @angular/cli`)
- A database server (e.g., SQL Server). Adjust the connection string in the backend as needed.
