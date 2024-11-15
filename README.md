﻿# wikepediaSearch
```markdown
# Wikipedia Search

![Wikipedia Logo](https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png)

A simple web application that allows users to search for articles on Wikipedia by entering keywords. The application fetches search results from the Wikipedia API and displays them in a user-friendly format.

## Features and Functionality

- **Search Capability**: Users can type keywords into a search box and press Enter to initiate a search.
- **Dynamic Results**: Search results are displayed dynamically as users enter their queries.
- **Loading Indicator**: A spinner is shown while results are being fetched from the API.
- **External Links**: Each result includes a clickable title and URL linking directly to the Wikipedia article.

## Technology Stack

- **HTML**: Structure of the application.
- **CSS**: Basic styling.
- **JavaScript**: Functionality for fetching and displaying search results.
- **Bootstrap**: Framework for responsive design and styling.
- **Wikipedia API**: Provides the search functionality.

## Project Structure

```
wikepediaSearch/
├── index.html       # Main HTML file
├── index.css        # Styles for the application
└── index.js         # JavaScript for handling search and results
```

## Prerequisites

To run this project locally, you need:

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Prabhas9346/wikepediaSearch.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd wikepediaSearch
   ```

3. **Open `index.html` in your web browser** to view the application:
   - You can simply double-click the `index.html` file or right-click and select "Open with" to choose your browser.

## Usage Guide

1. Open the application in your web browser.
2. Type a keyword related to the information you want to find on Wikipedia in the search box.
3. Press **Enter** to initiate the search.
4. Wait for the results to load, which will be displayed below the search box.
5. Click on the title of any search result to navigate to the corresponding Wikipedia article.

## API Documentation

The application utilizes the following API endpoint:

- **Endpoint**: `https://apis.ccbp.in/wiki-search?search=<keyword>`
- **Method**: `GET`
- **Response**: A JSON object containing search results including title, link, and description.

## Contributing Guidelines

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a Pull Request.

## License Information

No specific license has been specified for this project. Please feel free to use and modify this code as needed.

## Contact/Support Information

For questions or support, please reach out to the repository owner:

- **GitHub**: [Prabhas9346](https://github.com/Prabhas9346)

Feel free to submit issues or suggestions for improvement.

---

Thank you for checking out the Wikipedia Search project!
```
