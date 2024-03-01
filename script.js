const p = document.querySelectorAll("p");
const blockquote = document.querySelectorAll("blockquote");
const apiUrl = "https://type.fit/api/quotes";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < p.length; i++) {
      p[i].textContent = data[i % 5].text;
      blockquote[i].textContent = data[i % 5].author.substring(
        0,
        data[i % 5].author.length - 10
      );
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
