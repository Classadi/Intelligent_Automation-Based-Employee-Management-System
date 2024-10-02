
/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    height: 100vh;
}

/* Navbar Styles */
.navbar {
    background-color: #3366cc;
    color: #ffffff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-items {
    display: flex;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    margin-left: 20px;
}

/* Sidebar Styles */
.sidebar {
    background-color: #f4f4f4;
    padding: 20px;
    width: 250px;
}

.sidebar-link {
    display: block;
    color: #333333;
    text-decoration: none;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.sidebar-link:hover {
    background-color: #e0e0e0;
}

.sidebar-link.active {
    background-color: #cccccc;
    font-weight: bold;
}

/* Content Styles */
.content {
    flex: 1;
    padding: 20px;
}

.overview-section, .analytics-section {
    margin-bottom: 40px;
}

.overview-widgets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.widget {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.widget h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.widget-value {
    font-size: 24px;
    font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}


body, html {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f7f6;
}

.navbar {
    background-color: #004d99; /* EXCELLAR Brand Blue */
    color: #ffffff;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0;
    cursor: default; /* Disable cursor */
}

.nav-items a {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-items a:hover {
    background-color: #003366; /* Darker blue */
}

.container {
    display: flex;
    height: calc(100vh - 60px); /* Adjust height based on navbar */
}

.sidebar {
    flex: 0 0 200px;
    background-color: #e6e9ed;
    padding: 20px;
    overflow-y: auto;
}

.sidebar a {
    display: block;
    text-decoration: none;
    color: #003366; /* EXCELLAR Blue */
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
}

.sidebar a:hover {
    background-color: #004d99;
    color: #ffffff;
}

.content {
    flex-grow: 1;
    padding: 20px;
}

.widgets {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.widget {
    background-color: #005cbf; /* Brighter blue */
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}

.clock {
    margin-bottom: 20px;
    text-align: center;
}

.clock-btn {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.clock-timer {
    font-size: 24px;
    margin-top: 10px;
}

.clock-btn {
    padding: 15px 30px;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 25px; /* Rounded button */
    cursor: pointer;
    transition: background-color 0.3s;
}

.clock-btn:hover {
    background-color: #0056b3; /* Darker shade on hover */
}


@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .sidebar {
        flex: 0 0 auto;
        height: auto;
    }

    .widgets {
        grid-template-columns: 1fr;
    }
}
