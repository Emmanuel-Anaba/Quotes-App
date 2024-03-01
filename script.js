p = document.querySelectorAll("p");
blockquote = document.querySelectorAll("blockquote");

// Define the URL of the API you want to call
const apiUrl = "https://type.fit/api/quotes";

// Make a GET request to the API
fetch(apiUrl)
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    // Handle the data returned by the API
    console.log(data);
    for (i = 0; i < p.length; i++) {
      p[i].textContent = data[i % 5].text;
      blockquote[i].textContent = data[i % 5].author.substring(
        0,
        data[i % 5].author.length - 10
      );
    }
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("There was a problem with the fetch operation:", error);
  });
