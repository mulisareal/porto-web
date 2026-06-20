# Website Portofolio — Mulisa Kusuma Wardani

Portofolio pribadi (tema navy "kertas & craft") — **React (Vite) + Tailwind + React Router**.
Desain "clear": beranda ringkas berisi highlight, lalu halaman terpisah untuk daftar lengkap.

## Struktur halaman
- **/** (Beranda): Hero, Tentang Saya, **highlight Prestasi**, Pengalaman, **highlight Karya**, Organisasi.
- **/prestasi**: semua 48 penghargaan + filter kategori interaktif.
- **/karya**: semua proyek (hover = deskripsi) + galeri seni + ajakan kolaborasi.

Tombol "Lihat Semua" di beranda membuka halaman penuh. Menu Prestasi & Karya di navbar
langsung ke halaman tsb; menu lain meluncur ke bagiannya di beranda.

## Menjalankan
Butuh **Node.js 18+**.
```bash
npm install
npm run dev
```
Build siap-hosting: `npm run build` (hasil di `dist/`).

## Mengedit konten
Semua di **`src/siteConfig.js`**: identitas, teks Tentang Saya, daftar prestasi (`achievements`),
proyek (`projects`), seni (`art`), prestasi unggulan beranda (`featuredAchievements`), dll.

## Menambahkan gambar
Taruh file di `public/images/`, lalu isi path-nya di `siteConfig.js`:
- **Foto hero**: bagian `images` → ganti URL jadi `/images/namafoto.jpg`.
- **Gambar proyek**: bagian `projects` → isi `image: "/images/proyek.jpg"` (placeholder ikon otomatis berganti jadi foto).
- **Karya seni**: bagian `art` → isi `image: "/images/karya.jpg"` (efek grayscale → berwarna saat hover).
- **CV**: taruh `CV.pdf` di `public/`, lalu set `cvUrl: "/CV.pdf"`.

## Deploy gratis
Project sudah berisi `vercel.json` (Vercel) dan `public/_redirects` (Netlify) supaya
halaman `/prestasi` & `/karya` tidak error saat di-refresh. Tinggal hubungkan repo ke
Vercel/Netlify, atau jalankan `npm run build` lalu unggah folder `dist/`.

## Struktur folder
```
src/
├─ siteConfig.js              ← SEMUA KONTEN
├─ App.jsx                    ← rute halaman
├─ pages/
│  ├─ Home.jsx
│  ├─ PrestasiPage.jsx
│  └─ KaryaPage.jsx
└─ components/
   ├─ Navbar.jsx  Hero.jsx  About.jsx  Footer.jsx  Reveal.jsx
   ├─ PrestasiPreview.jsx  AchievementCard.jsx
   ├─ KaryaPreview.jsx  ProjectCard.jsx  ArtGallery.jsx
   ├─ Pengalaman.jsx  Organisasi.jsx
```
