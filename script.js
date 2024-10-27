function TampilkanData() {
  // Seleksi elemen form-container dan profile-card
  const formContainer = document.getElementById("form-container");
  const profileCard = document.querySelector(".profile-card");

  // Cek apakah form sedang ditampilkan atau disembunyikan
  if (formContainer.style.display === "none") {
    formContainer.style.display = "block"; // Tampilkan form
    profileCard.style.display = "none"; // Sembunyikan profile
  } else {
    formContainer.style.display = "none"; // Sembunyikan form
    profileCard.style.display = "block"; // Tampilkan profile
  }
}

function UpdateProfile(event) {
  event.preventDefault();

  // Ambil data dari input form
  const name = document.getElementById("input-name").value;
  const role = document.getElementById("input-role").value;
  const availability = document.getElementById("input-availability").value;
  const age = document.getElementById("input-age").value;
  const location = document.getElementById("input-location").value;
  const experience = document.getElementById("input-experience").value;
  const email = document.getElementById("input-email").value;

  // Perbarui data di section profile
  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-role").textContent = role;
  document.getElementById("profile-availability").textContent = availability;
  document.getElementById("profile-age").textContent = age;
  document.getElementById("profile-location").textContent = location;
  document.getElementById("profile-experience").textContent = experience;
  document.getElementById("profile-email").textContent = email;

  // Sembunyikan form dan tampilkan profile setelah submit
  document.getElementById("form-container").style.display = "none";
  document.querySelector(".profile-card").style.display = "flex";
}
