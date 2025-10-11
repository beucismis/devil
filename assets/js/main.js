document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".highlight > pre > code[data-lang]").forEach((code) => {
    const language = code.getAttribute("data-lang");
    const highlightDiv = code.closest(".highlight");
    if (highlightDiv) {
      highlightDiv.setAttribute("data-lang", language);
    }
  });
});
