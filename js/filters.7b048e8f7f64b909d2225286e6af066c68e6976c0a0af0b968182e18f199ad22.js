document.addEventListener("DOMContentLoaded", () => {

  const linesFilter = document.getElementById("lines");
  const authorsFilter = document.getElementById("authors");
  const dateFilter = document.getElementById("date");

  const publications = document.querySelectorAll(".publication-item");
  const projects = document.querySelectorAll(".project-item");

  const elements = document.querySelectorAll(".choices-select");
  elements.forEach((el) => {
    new Choices(el, {
      searchEnabled: true,
      itemSelectText: "",
    });
  });

  // Restablece los filtros a "all" al cargar
  if (linesFilter) linesFilter.value = "all";
  if (authorsFilter) authorsFilter.value = "all";
  if (dateFilter) dateFilter.value = "all";

  function applyFilters() {
    const lineValue = linesFilter?.value || "all";
    const authorValue = authorsFilter?.value || "all";
    const dateValue = dateFilter?.value || "all";

    // Filtrado de publicaciones
    publications.forEach(pub => {
      const lines = (pub.getAttribute("data-lines") || "none").split(" ");
      const authors = (pub.getAttribute("data-authors") || "none").split(" ");
      const year = pub.getAttribute("data-year") || "none";

      const matchesLine = lineValue === "all" || lines.includes(lineValue);
      const matchesAuthor = authorValue === "all" || authors.includes(authorValue);
      const matchesDate = dateValue === "all" || year === dateValue;

      pub.style.display = (matchesLine && matchesAuthor && matchesDate) ? "block" : "none";
    });

    // Filtrado de proyectos
    projects.forEach(proj => {
      const lines = (proj.getAttribute("data-lines") || "none").split(" ");
      const year = proj.getAttribute("data-year") || "none";

      const matchesLine = lineValue === "all" || lines.includes(lineValue);
      const matchesDate = dateValue === "all" || year === dateValue;

      // En proyectos no hay autores
      proj.style.display = (matchesLine && matchesDate) ? "block" : "none";
    });
  }

  if (linesFilter) linesFilter.addEventListener("change", applyFilters);
  if (authorsFilter) authorsFilter.addEventListener("change", applyFilters);
  if (dateFilter) dateFilter.addEventListener("change", applyFilters);
});
