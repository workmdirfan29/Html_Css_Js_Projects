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
