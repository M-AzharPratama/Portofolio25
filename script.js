const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

let currentImageIndex = 0;
let currentImages = [];

function showModal(id) {
  const details = {
    project1: {
      title: "Password Generator MD5",
      desc: "Proyek ini adalah sebuah aplikasi yang mengimplementasikan MD5 Hash Generator dan MD5 Cracker dengan berbagai mode pencarian untuk membantu pengguna dalam menghasilkan hash MD5 dari password dan membongkar password yang telah di-hash dengan MD5.",
      images: ["images/MD5.png"]
    },
    project2: {
      title: "Password Generator SHA1",
      desc: "Proyek ini adalah sebuah aplikasi yang mengimplementasikan Sha1 Hash Generator dan Sha1 Cracker dengan berbagai mode pencarian untuk membantu pengguna dalam menghasilkan hash Sha1 dari password dan membongkar password yang telah di-hash dengan Sha1.",
      images: ["images/Sha1.png"]
    },
    project3: {
      title: "Toko Buku Aa",
      desc: "Proyek ini adalah sebuah website yang dibuat untuk membantu pengguna dalam memanage toko buku,dengan beragam fitur khusus seperti cek data via excel atau pdf.",
      images: ["images/Toko.png", "images/toko1.png", "images/toko2.png", "images/toko3.png", "images/toko4.png", "images/toko5.png", "images/toko6.png", "images/toko7.png"]
    },
    sertifikat1: {
      title: "ARTIFICIAL INTELLIGENCE",
      desc: "Penyelenggara: MySkill Indonesia <br> Tanggal Perolehan: April 29, 2025 <br> Saya telah menyelesaikan program pelatihan Artificial Intelligence dari MySkill yang terdiri dari 7 topik komprehensif terkait pemanfaatan teknologi AI dalam konteks profesional. Materi yang dipelajari mencakup penggunaan ChatGPT untuk produktivitas kerja, AI dalam pencatatan otomatis, desain berbasis AI, otomasi pembuatan konten, analisis data dengan spreadsheet pintar, serta pengembangan perangkat lunak berbasis AI.",
      images: ["images/S_AI.png"]
    },
    sertifikat2: {
      title: "PKL Starcore.CO",
      desc: "Sertifikat ini diberikan sebagai bukti telah berhasil menyelesaikan Program Magang (PKL) di Starcore Analytics dengan posisi Backend Developer. Selama masa magang, dan telah menunjukkan kemampuan dan keterampilan dalam pengembangan website.",
      images: ["images/pkl.png"]
    },
    sertifikat3: {
      title: "Cyberlabs",
      desc: "Sertifikat ini diberikan kepada peserta yang telah menyelesaikan program pelatihan Backend Development with JavaScript Framework. Pelatihan ini dirancang untuk memberikan pemahaman yang mendalam tentang pengembangan backend menggunakan framework JavaScript terkemuka, seperti Node.js, Express.js, dan lainnya.",
      images: ["images/Cyberlabs.png"]
    }
  };

  const data = details[id];
  if (!data) return;

  currentImages = data.images || [];
  currentImageIndex = 0;

  const imageHtml = `
    <div class="image-container">
      ${currentImages.length > 1 ? `
        <button class="nav left" onclick="changeImage(-1)">&#10094;</button>
      ` : ''}
      <img id="modal-image" src="${currentImages[0]}" alt="${data.title}">
      ${currentImages.length > 1 ? `
        <button class="nav right" onclick="changeImage(1)">&#10095;</button>
      ` : ''}
    </div>
  `;

  modalBody.innerHTML = `
    <h3>${data.title}</h3>
    ${imageHtml}
    <p style="margin-top: 15px;">${data.desc}</p>
  `;

  modal.style.display = "block";
}

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
  const img = document.getElementById("modal-image");
  img.src = currentImages[currentImageIndex];
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
