document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  let isDark = false;

  themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    themeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });

  // Gallery Setup
  const galleryPhotos = [
    "images/Pemuda1.jpg",
    "images/Pemuda2.jpg",
    "images/Pemuda3.jpg",
    "images/Pemuda4.jpg",
    "images/Pemuda5.jpg",
    "images/Pemuda6.jpg",
    "images/Pemuda7.jpg",
    "images/Pemuda8.jpg",
    "images/Pemuda9.jpg",
    "images/Pemuda10.jpg",
    "images/Pemuda11.jpg",
    "images/Pemuda12.jpg",
    "images/Pemuda13.jpg",
    "images/Pemuda14.jpg",
    "images/Pemuda15.jpg",
    "images/Pemuda16.jpg",
    "images/Pemuda17.jpg",
    "images/Pemuda18.jpg",
    "images/Pemuda19.jpg",
    "images/Pemuda20.jpg",
    "images/Pemuda21.jpg",
    "images/Pemuda22.jpg",
    "images/Pemuda23.jpg",
    "images/Pemuda24.jpg",
    "images/Pemuda25.jpg",
    "images/Pemuda26.jpg",
    "images/Pemuda27.jpg",
    "images/Pemuda28.jpg",
    "images/Pemuda29.jpg",
    "images/Pemuda30.jpg",
    "images/Pemuda31.jpg",
    "images/Pemuda32.jpg",
    "images/Pemuda33.jpg",
    "images/Pemuda34.jpg",
    "images/Pemuda35.jpg",
    "images/Pemuda36.jpg",
    "images/Pemuda37.jpg",
    "images/Pemuda38.jpg",
    "images/Pemuda39.jpg",
    "images/Pemuda40.jpg",
    "images/Pemuda41.jpg",
    "images/Pemuda42.jpg",
    "images/Pemuda43.jpg",
    "images/Pemuda44.jpg",
  ];

  const galleryGrid = document.getElementById("galleryGrid");
  galleryPhotos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Pemuda ";
    galleryGrid.appendChild(img);
  });

  // Lightbox Functionality
  const lightbox = document.querySelector(".lightbox-overlay");
  const lightboxImg = lightbox.querySelector("img");

  document.querySelectorAll("#galleryGrid img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Timeline Data
  const timelineData = [
    { year: "2015", event: "Bergabung dengan JYP Entertainment" },
    {
      year: "2016",
      event: "Debut dengan TWICE melalui album 'The Story Begins'",
    },
    { year: "2019", event: "Merilis lagu solo 'Breakthrough'" },
  ];

  // Generate Timeline
  function createTimeline() {
    const timelineContainer = document.createElement("div");
    timelineContainer.className = "timeline";

    timelineData.forEach((item) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";
      timelineItem.innerHTML = `
          <h3>${item.year}</h3>
          <p>${item.event}</p>
      `;
      timelineContainer.appendChild(timelineItem);
    });

    document.querySelector("main").appendChild(timelineContainer);
  }

  // Panggil fungsi ini di DOMContentLoaded
  createTimeline();
});
