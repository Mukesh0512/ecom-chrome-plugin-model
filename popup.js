document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    });
    
    // Listen for the message from content.js
    chrome.runtime.onMessage.addListener((request) => {
      if (request.productName && request.productPrice && request.productImg) {
        document.getElementById('product-name').textContent = "Product Name: " + request.productName;
        document.getElementById('product-price').textContent = "Price: " + request.productPrice;
        document.getElementById('product-img').src = request.productImg;
        
        // Call external API to fetch related products
        fetchRelatedProducts(request.productName);
      }
    });
  });

  // Function to call the mock API and display related products
  function fetchRelatedProducts(productName) {
    // Replace with your actual API endpoint
    const apiUrl = `https://api.example.com/related?product=${encodeURIComponent(productName)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Populate related products in the UI
        const relatedList = document.getElementById('related-list');
        relatedList.innerHTML = ''; // Clear existing list

        data.relatedProducts.forEach(product => {
          const listItem = document.createElement('li');
          listItem.textContent = `${product.name} - ${product.price}`;
          relatedList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error fetching related products:", error);
        document.getElementById('related-list').textContent = "Error fetching related products.";
      });
  }
});
