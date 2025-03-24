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
    "images/pemuda1.jpg",
    "images/pemuda2.jpg",
    "images/pemuda3.jpg",
    "images/pemuda4.jpg",
    "images/pemuda5.jpg",
    "images/pemuda6.jpg",
    "images/pemuda7.jpg",
    "images/pemuda8.jpg",
    "images/pemuda9.jpg",
    "images/pemuda10.jpg",
    "images/pemuda11.jpg",
    "images/pemuda12.jpg",
    "images/pemuda13.jpg",
    "images/pemuda14.jpg",
    "images/pemuda15.jpg",
    "images/pemuda16.jpg",
    "images/pemuda17.jpg",
    "images/pemuda18.jpg",
    "images/pemuda19.jpg",
    "images/pemuda20.jpg",
    "images/pemuda21.jpg",
    "images/pemuda22.jpg",
    "images/pemuda23.jpg",
    "images/Pemuda24.jpg",
    "images/pemuda25.jpg",
    "images/pemuda26.jpg",
    "images/pemuda27.jpg",
    "images/pemuda28.jpg",
    "images/pemuda29.jpg",
    "images/pemuda30.jpg",
    "images/pemuda31.jpg",
    "images/pemuda32.jpg",
    "images/pemuda33.jpg",
    "images/pemuda34.jpg",
    "images/pemuda35.jpg",
    "images/pemuda36.jpg",
    "images/pemuda37.jpg",
    "images/pemuda38.jpg",
    "images/pemuda39.jpg",
    "images/pemuda40.jpg",
    "images/pemuda41.jpg",
    "images/pemuda42.jpg",
    "images/pemuda43.jpg",
    "images/pemuda44.jpg",
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
