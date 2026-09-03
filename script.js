document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Elemen
  const profileCard = document.querySelector('.profile-card');
  const badge = document.querySelector('.badge');
  const profileImg = document.querySelector('.profile-img');
  const socialButtons = document.querySelectorAll('.btn');

  // 2. Efek Interaktif pada Gambar Profil
  profileImg.addEventListener('click', () => {
    profileImg.style.transition = 'transform 0.4s ease';
    profileImg.style.transform = 'scale(1.1) rotate(5deg)';

    setTimeout(() => {
      profileImg.style.transform = 'scale(1) rotate(0deg)';
    }, 400);
  });

  // 3. Konfirmasi Saat Mengklik Tombol Media Sosial
  socialButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const platform = button.textContent;
      alert(`Anda memilih untuk membuka tautan ${platform}.`);
    });
  });

  // 4. Efek Hover Dinamis pada Badge Status
  badge.addEventListener('mouseenter', () => {
    badge.style.cursor = 'pointer';
    badge.innerText = '✨ Let\'s Connect!';
  });

  badge.addEventListener('mouseleave', () => {
    badge.innerText = '💻 Ready to Code';
  });
});
