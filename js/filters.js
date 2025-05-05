document.addEventListener("DOMContentLoaded", () => {
  const lineasFilter = document.getElementById("lines");
  const authorsFilter = document.getElementById("authors");
  const dateFilter = document.getElementById("date");
  const publications = document.querySelectorAll(".publication-item");

  function applyFilters() {
    const lineValue = linesFilter.value;
    const authorValue = authorsFilter.value;
    const dateValue = dateFilter.value;

    publications.forEach(pub => {
      const lines = pub.getAttribute("data-lines").split(" ");
      const authors = pub.getAttribute("data-authors").split(" ");
      const year = pub.getAttribute("data-year");

      const matchesLinea = lineaValue === "all" || lines.includes(lineaValue);
      const matchesAuthor = authorValue === "all" || authors.includes(authorValue);
      const matchesDate = dateValue === "all" || year === dateValue;

      if (matchesLinea && matchesAuthor && matchesDate) {
        pub.style.display = "block";
      } else {
        pub.style.display = "none";
      }
    });
  }

  lineasFilter.addEventListener("change", applyFilters);
  authorsFilter.addEventListener("change", applyFilters);
  dateFilter.addEventListener("change", applyFilters);
});
