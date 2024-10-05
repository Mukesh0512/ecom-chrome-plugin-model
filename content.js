// Extract product name
const productName = document.querySelector('h1.gl-heading.gl-heading--regular.gl-heading--italic.name___1zGDK').textContent;

// Extract product price
const productPrice = document.querySelector('div.gl-price-item.notranslate').textContent;

// Extract product image URL
const productImg = document.querySelector('img.gallery-image___2dPFP').src;

// Send the extracted data to popup.js
chrome.runtime.sendMessage({
  productName: productName.trim(),
  productPrice: productPrice.trim(),
  productImg: productImg
});
