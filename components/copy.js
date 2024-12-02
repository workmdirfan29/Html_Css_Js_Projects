// For Avatar 1
function CopyAvatar1() {
  // HTML and CSS code for Avatar 1
  const htmlCode = `
       <div
                id="code-copy-1"
                class="avatar-component av-comp-1"
                onclick="CopyAvatar1()"
              >
                <div class="copy-btn">
                  <i class="ri-file-copy-line"></i>
                </div>
                <div class="avatar">
                  <img
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?ga=GA1.1.881379319.1733118417&semt=ais_hybrid"
                    alt="User Avatar"
                    class="avatar-image"
                  />
                </div>
              </div>
    `;

  const cssCode = `
      .avatar-component {
        padding: 5px;
        justify-content: center;
        position: relative;
        display: flex;
        padding-bottom: 5px;
        background-image: linear-gradient(to right, #3b7ca8 0%, rgb(16, 94, 162) 50%, transparent 100%);
        background-position: bottom;
        background-size: 100% 1.5px;
        background-repeat: no-repeat;
      }
      .avatar-component .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
      }
      .avatar-component img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    `;

  // Combine HTML and CSS code into one string
  const codeToCopy = `<!-- HTML CODE -->\n${htmlCode}\n<!-- CSS CODE -->\n${cssCode}`;

  // Copy to clipboard
  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      // Use Toastify for success message at the bottom
      Toastify({
        text: "Avatar HTML & CSS copied to clipboard!",
        duration: 3000, // Show toast for 3 seconds
        backgroundColor: "linear-gradient(to right, #28a745, #218838)", // Green success color
        close: true, // Show close button
        gravity: "bottom", // Show toast at the bottom
        position: "right",
      }).showToast();
    })
    .catch((err) => {
      // Use Toastify for error message at the bottom
      Toastify({
        text: "Failed to copy code: " + err,
        duration: 3000, // Show toast for 3 seconds
        backgroundColor: "linear-gradient(to right, #dc3545, #c82333)", // Red error color
        close: true, // Show close button
        gravity: "bottom", // Show toast at the bottom
        position: "right", // Center the toast horizontally
      }).showToast();
    });
}

// For Avatar 2
function CopyAvatar2() {
  // HTML and CSS code for Avatar 1
  const htmlCode = `
      div
                id="code-copy-2"
                class="avatar-component av-comp-2"
                onclick="CopyAvatar2()"
              >
                <div class="copy-btn">
                  <i class="ri-file-copy-line"></i>
                </div>
                <div id="avatar-wrapper">
                  <div class="avatar avatar-1">
                    <img
                      src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?ga=GA1.1.881379319.1733118417&semt=ais_hybrid"
                      alt="User Avatar"
                      class="avatar-image"
                    />
                  </div>
                  <div class="avatar avatar-2">
                    <img
                      src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100222.jpg?ga=GA1.1.881379319.1733118417&semt=ais_hybrid"
                      alt="User Avatar"
                      class="avatar-image"
                    />
                  </div>
                  <div class="avatar avatar-3">
                    <img
                      src="https://img.freepik.com/free-vector/smiling-blonde-boy-hoodie_1308-174731.jpg?ga=GA1.1.881379319.1733118417&semt=ais_hybrid"
                      alt="User Avatar"
                      class="avatar-image"
                    />
                  </div>
                </div>
              </div>`;

  const cssCode = `
.avatar-component {
  padding: 5px;
  justify-content: center;
  position: relative;
  display: flex;
  padding-bottom: 5px;
  background-image: linear-gradient(
    to right,
    #3b7ca8 0%,
    rgb(16, 94, 162) 50%,
    transparent 100%
  );
  background-position: bottom;
  background-size: 100% 1.5px;
  background-repeat: no-repeat;
}

.avatar-component .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.avatar-component img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.av-comp-2 #avatar-wrapper {
  display: flex;
  position: relative;
  gap: 10px;
}

.avatar-1,
.avatar-2,
.avatar-3 {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.avatar-1 {
  z-index: 2;
  border: 2px solid #233e9e;
}

.avatar-2 {
  margin-left: -30px;
  z-index: 1;
  border: 2px solid #46b2a6;
}

.avatar-3 {
  margin-left: -35px;
  z-index: 0;
  border: 2px solid #1f33a3;
}

.avatar-1:hover {
  rotate: -10deg;
}

.avatar-2:hover {
  rotate: 15deg;
}

.avatar-3:hover {
  rotate: -10deg;
}

.avatar:hover {
  transform: scale(1.1);
  z-index: 10;
}

/* Responsive Design */
@media (max-width: 768px) {
  

  .avatar-component {
    justify-content: center;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .avatar-1 {
    width: 40px;
    height: 40px;
    margin-left: 15px;
  }

  .avatar-2 {
    width: 40px;
    height: 40px;
    margin-left: -25px;
  }
  .avatar-3 {
    width: 40px;
    height: 40px;
    margin-left: -35px;
  }
}
`;

  // Combine HTML and CSS code into one string
  const codeToCopy = `<!-- HTML CODE -->\n${htmlCode}\n<!-- CSS CODE -->\n${cssCode}`;

  // Copy to clipboard
  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      // Use Toastify for success message at the bottom
      Toastify({
        text: "Avatar HTML & CSS copied to clipboard!",
        duration: 3000, // Show toast for 3 seconds
        borderRadius: "15px",
        backgroundColor: "linear-gradient(to right, #28a745, #218838)", // Green success color
        close: true, // Show close button
        gravity: "bottom", // Show toast at the bottom
        position: "right",
      }).showToast();
    })
    .catch((err) => {
      // Use Toastify for error message at the bottom
      Toastify({
        text: "Failed to copy code: " + err,
        duration: 3000, // Show toast for 3 seconds
        borderRadius: "5px",
        backgroundColor: "linear-gradient(to right, #dc3545, #c82333)", // Red error color
        close: true, // Show close button
        gravity: "bottom", // Show toast at the bottom
        position: "right", // Center the toast horizontally
      }).showToast();
    });
}

// For Accordion Copy
function accordionCopy() {
  const htmlCode = `
<div class="accordion-wrapper">
              <!-- Accordion Items -->
              <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                  <span class="accordion-title">Accordion Item 1</span>
                  <i class="ri-arrow-down-s-line dropdown-icon"></i>
                </div>
                <div class="accordion-content">
                  <p>This is the content for Accordion Item 1.</p>
                </div>
              </div>

              <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                  <span class="accordion-title">Accordion Item 2</span>
                  <i class="ri-arrow-down-s-line dropdown-icon"></i>
                </div>
                <div class="accordion-content">
                  <p>This is the content for Accordion Item 2.</p>
                </div>
              </div>

              <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                  <span class="accordion-title">Accordion Item 3</span>
                  <i class="ri-arrow-down-s-line dropdown-icon"></i>
                </div>
                <div class="accordion-content">
                  <p>This is the content for Accordion Item 3.</p>
                </div>
              </div>
            </div>
`;

  const cssCode = `

  .accordion-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
    padding: 2vw;
  }
  
  .copy-btn-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  
  .copy-icon {
    font-size: 1.2rem;
    color: #ffffff;
    transition: transform 0.2s ease;
  }
  
  .copy-icon:hover {
    transform: scale(1.2);
  }
  
  .accordion-item {
    width: 100%;
    background-color: #232324;
    color: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    background-color: #1c1c1c;
  }
  
  .accordion-title {
    font-size: 1rem;
  }
  
  .dropdown-icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  .accordion-content {
    display: none;
    padding: 15px;
    background-color: #333;
  }
  
  .accordion-item.active .accordion-content {
    display: block;
  }
  
  .accordion-item.active .dropdown-icon {
    transform: rotate(180deg);
  }  
`;

  const jsCode = `

  function toggleAccordion(header) {
    const accordionItem = header.parentElement;
  
    // Close other accordion items (optional, for single-open functionality)
    const allItems = document.querySelectorAll(".accordion-item");
    allItems.forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });
  
    // Toggle current accordion
    accordionItem.classList.toggle("active");
  }
`;

  const codeToCopy = `<!-- HTML CODE -->\n${htmlCode}\n\n<!-- CSS CODE -->\n${cssCode}\n\n<!-- JS CODE -->\n${jsCode}`;

  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      Toastify({
        text: "Accordion content copied!",
        duration: 3000,
        position: "right",
        gravity: "bottom", // Toast at the bottom
        style: {
          borderRadius: "5px",
          background: "linear-gradient(to right, #28a745, #218838)",
        },
      }).showToast();
    })
    .catch((err) => {
      Toastify({
        text: `Failed to copy: ${err}`,
        duration: 3000,
        position: "right",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #dc3545, #c82333)",
        },
      }).showToast();
    });
}
