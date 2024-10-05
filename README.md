E-Commerce Product Extractor Chrome Plugin
This is a simple Chrome extension that extracts product information (name, price, and image URL) from fashion e-commerce websites and displays the details in a popup interface. The plugin also optionally connects to an external API to enhance functionality.

Features
Extracts product name, price, and image URL from the product page.
Displays the extracted details in the popup when the plugin icon is clicked.
Can optionally connect to an external API to fetch related product information.
Installation Instructions
Step 1: Clone or Download the Repository
Clone this repository to your local machine using:

git clone https://github.com/your-repository-url
Alternatively, download the zip file and extract it.

Step 2: Load the Plugin in Chrome
Open Chrome.
Go to chrome://extensions/.
Enable Developer mode (top-right corner).
Click Load unpacked.
Select the directory where you cloned or extracted the repository.
Step 3: Test the Plugin
Visit a product page on the e-commerce website (e.g., Adidas Product Page).
Click the plugin icon in the Chrome toolbar.
The popup will display the product's name, price, and image URL.
(Optional) If connected to an external API, it will also display related products.
Step 4: Modify API URL
If you are using an external API, modify the API URL in the content.js file:

const apiUrl = "https://api.example.com/products"; // Replace with actual API
Make sure to update the host_permissions in manifest.json with the correct API URL.
