
# LibraNet - A Web Library Application

## Overview
LibraNet is a web-based application that emulates the functionalities of a traditional library, allowing users to manage books and authors. It provides a comprehensive platform for adding, updating, deleting, and viewing books and authors. The application is built using modern web technologies, ensuring a responsive and intuitive user experience.

## You can access the deployed application [here](https://yuehcw-libranet-cc96adc89fd9.herokuapp.com/).

* Main Page
![Main.png](img%2FMain.png)

* Search Author Page
![searchAuthor.png](img%2FsearchAuthor.png)

* Add Author Page
![addAuthor.png](img%2FaddAuthor.png)

* Edit Author Page
![editAuthor.png](img%2FeditAuthor.png)

* Search Book Page
![searchBook.png](img%2FsearchBook.png)

* Add Book Page
![addBook.png](img%2FaddBook.png)

* Edit Book Page
![editBook.png](img%2FeditBook.png)

* BookByAuthor Page
![bookByAuthor.png](img%2FbookByAuthor.png)


## Project Structure
The application is organized into several key directories and files, each serving a specific purpose in the application's architecture:

- **server.js**: The main server file that initializes and runs the Express server.
- **models/**: Contains the data models for the application, defining the schema for books and authors.
- **public/**: Houses static assets like JavaScript files, fonts, and CSS stylesheets for the client-side.
- **views/**: EJS templates for generating dynamic HTML content based on server-side data.
- **routes/**: Defines the routes for the application, handling HTTP requests for different parts of the site.

## Functionalities & Features
- **CRUD Operations**: Users can create, read, update, and delete information about books and authors.
- **File Uploads**: Support for uploading book cover images or related documents.
- **Custom Styling**: Tailored CSS for a unique and engaging user interface.
- **Responsive Design**: The application is fully responsive, providing a seamless experience on various devices and screen sizes.

## Technologies Used
- **Node.js**: The runtime environment for executing JavaScript on the server.
- **Express**: A web application framework for Node.js, used to build web applications and APIs.
- **EJS**: A templating language for generating HTML markup with plain JavaScript.
- **CSS**: For styling the application's interface.
- **MongoDB**: Used as the backend database for storing application data.

## Setup and Installation
(Note: Specific setup and installation instructions would depend on further details within each file, especially `server.js` for starting the server and `package.json` for dependencies.)

Follow these steps to get everything up and running.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

### For macOS Users

- [Homebrew](https://brew.sh/) installed on your macOS system for MongoDB installation

### Step 1: Install Project Dependencies

First, ensure you are in the project's root directory. Then, install the necessary Node.js dependencies by running the following command in your terminal:

```bash
npm install
```

### Step 2: Install MongoDB

#### For macOS Users Using Homebrew

a. **Add the MongoDB Repository to Homebrew**

Open your terminal and execute the following command to tap the MongoDB Homebrew repository:

```bash
brew tap mongodb/brew
```

b. **Install MongoDB**

Once the repository has been tapped, install MongoDB with the following command:

```bash
brew install mongodb-community
```

#### For Windows Users

1. **Download MongoDB for Windows**: Visit the [MongoDB Download Center](https://www.mongodb.com/try/download/community), select the Community Server tab, choose "Windows" as your operating system, and download the installer.
2. **Install MongoDB**: Run the downloaded installer and follow the setup wizard. Choose the "Complete" setup type and opt to install MongoDB as a service.
3. **Add MongoDB to the PATH Environment Variable**: Locate the MongoDB bin directory (default is `C:\Program Files\MongoDB\Server\<version>\bin`) and add it to the system's PATH environment variable.

### Step 3: Start MongoDB

#### For macOS Users

After successfully installing MongoDB, you can start the MongoDB service using Homebrew by running:

```bash
brew services start mongodb/brew/mongodb-community
```

#### For Windows Users

Start MongoDB by running the MongoDB service, which was set up during the installation process.

### Step 4: Start the Server

With MongoDB running, you are now ready to start the project server. Run the following command:

```bash
npm run start
```
You will see in the console:

![serverStart.png](img%2FserverStart.png)


### Step 5: Open the URL in your browser:

```bash
http://localhost:3000/
```



## Conclusion
LibraNet represents a modern take on library management, integrating traditional library functions with the advantages of web technology for accessibility and ease of use.
