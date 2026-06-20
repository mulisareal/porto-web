// ============================================================
//  PUSAT KONTEN — ubah semua teks & data dari sini.
// ============================================================

export const site = {
  brand: "Mulisa",
  cvUrl: "/CV.pdf", // ganti dengan link file CV (mis. taruh CV.pdf di folder public/ lalu "/CV.pdf")
  email: "mulikw08@gmail.com",

  nav: [
    { label: "Tentang Saya", href: "#about" },
    { label: "Prestasi", href: "#prestasi" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Karya", href: "#karya" },
    { label: "Organisasi", href: "#organisasi" },
  ],

  // --- HERO ---
  hero: {
    overline: "Portofolio Pribadi",
    name: "Mulisa Kusuma Wardani",
    tagline:
      "\u201CMahasiswa Teknologi Informasi yang aktif di riset, seni, dan organisasi.\u201D",
    dualityLine1: "Persimpangan",
    dualityLine2: "Teknologi & Kreativitas",
    caption: "Mulisa Kusuma Wardani",
  },


  images: {
    main: "/images/diri.png",
    art: "/images/diri1.png",
    tech: "/images/diri.png",
  },

  about: {
    heading: "Tentang Saya",
    paragraphs: [
      "Saya mahasiswa Teknologi Informasi di Universitas Negeri Yogyakarta dengan minat kuat pada pemrograman, robotika, IoT, dan pengembangan perangkat lunak. Saya juga memiliki pengalaman mendalam dalam penulisan karya ilmiah, khususnya di bidang teknologi. Selain itu, saya aktif mengikuti berbagai kompetisi, mulai dari karya tulis ilmiah hingga inovasi teknologi di tingkat nasional maupun internasional",
      "Di samping dunia teknologi, saya menekuni bidang seni seperti terutama melukis dan kaligrafi. Bagi saya, teknologi, riset, dan seni bukan tiga hal yang berdiri sendiri, melainkan saling melengkapi. Perpaduan inilah yang membentuk cara saya berpikir dan berkarya secara logis sekaligus kreatif",
    ],
    skills: [
      { icon: "memory", label: "IoT Development" },
      { icon: "terminal", label: "Programming" },
      { icon: "science", label: "Scientific Research" },
      { icon: "brush", label: "Calligraphy & Art" },
      { icon: "groups", label: "Organization" },
    ],
    cardTitle: "Background",
    facts: [
      { icon: "school", label: "Program Studi", value: "Teknologi Informasi" },
      { icon: "account_balance", label: "Institusi", value: "Universitas Negeri Yogyakarta" },
      { icon: "location_on", label: "Lokasi", value: "Yogyakarta, Indonesia" },
      { icon: "workspace_premium", label: "Prestasi", value: "48+ Penghargaan Nasional & Int." },
    ],
  },


  experience: [
    {
      side: "left",
      date: "2023 - Sekarang",
      title: "Pengajar Ekstrakurikuler",
      org: "Mandiri",
      node: { icon: "school", bg: "bg-primary", fg: "text-primary-inverse" },
      bulletIcon: "check_circle",
      points: [
        "Menyusun 3+ sekolah dalam ekstrakurikuler Pramuka.",
        "Membimbing 5+ sekolah dalam ekstrakurikuler riset.",
      ],
    },
    {
      side: "right",
      date: "2022 - Sekarang",
      title: "Mentor Riset Muda",
      org: "RISETNESIA",
      node: { icon: "groups", bg: "bg-secondary", fg: "text-primary-inverse" },
      bulletIcon: "check_circle",
      points: [
        "Melatih metodologi penelitian ilmiah bagi peneliti pemula.",
        "Mereview 50+ abstrak dan karya ilmiah nasional dan Internasional.",
      ],
    },
    {
      side: "left",
      date: "2021 - 2026",
      title: "Professional MC",
      org: "Event Akademik & Formal",
      node: { icon: "mic", bg: "bg-accent-gold", fg: "text-primary-inverse" },
      bulletIcon: "mic",
      points: [
        "Moderator dan MCQ seminar nasional teknologi dengan 500+ peserta.",
        "Public speaking untuk acara resmi universitas.",
      ],
    },
    {
      side: "right",
      date: "2022 - 2026",
      title: "Founder & Creative Lead",
      org: ";LISWEETS dan SANGCOK",
      node: { icon: "storefront", bg: "bg-sky-tint", fg: "text-primary" },
      bulletIcon: "check_circle",
      points: [
        "Mengelola UMKM F&B berupa keripik pisang lumer.",
        "Mengelola UMKM F&B berupa aneka kue lebaran.",
      ],
    },
  ],

  // --- ORGANISASI (grid kartu) ---
  organizations: [
    {
      name: "RESTEK (Robotika)",
      role: "Software Engineering",
      icon: "memory",
      desc: "Berkontribusi dalam pembuatan software Ground Control Station untuk UAV tim Az-Zawra Biantara.",
      period: "2022 - 2024",
      metaIcon: "precision_manufacturing",
    },
    {
      name: "UKM Penelitian",
      role: "Staff Kesejahteraan Anggota",
      icon: "science",
      desc: "Menyusun agenda riset tahunan dan memfasilitasi workshop penulisan ilmiah bagi anggota baru.",
      period: "2024 - 2025",
      metaIcon: "biotech",
    },
    {
      name: "UKM SERUFO",
      role: "Staff Hubungan Masyarakat",
      icon: "brush",
      desc: "Berkontribusi dalam pameran seni rupa rutin dan workshop kaligrafi tingkat universitas.",
      period: "2024 - 2025",
      metaIcon: "palette",
    },
    {
      name: "OSIS MAN 4 Bantul",
      role: "Staff Adiwiyata",
      icon: "workspace_premium",
      desc: "Mengelola korespondensi dan administrasi organisasi untuk 3+ divisi kerja sekolah di bidang adiwiyata.",
      period: "2021 - 2023",
      metaIcon: "eco",
    },
    {
      name: "Brilliant Research Club",
      role: "Vice Chairman",
      icon: "lightbulb",
      desc: "Menjalankan program kerja di tingkat sekolah dan membuat event lomba ilmiah tingkat daerah.",
      period: "2021 - 2023",
      metaIcon: "hub",
    },
  ],
  orgCta: {
    title: "Collaboration?",
    text: "Let's connect and build something impactful together through research and technology.",
    button: "Get In Touch",
  },

  // --- PRESTASI ---
  achievementCategories: [
    { key: "all", label: "Semua" },
    { key: "kti", label: "Karya Tulis Ilmiah" },
    { key: "kaligrafi", label: "Kaligrafi" },
    { key: "inovasi", label: "Inovasi & Invensi" },
    { key: "bisnis", label: "Bisnis" },
    { key: "akademik", label: "Akademik" },
    { key: "digital", label: "Desain & Digital" },
    { key: "pramuka", label: "Kepramukaan" },
  ],
  achievements: [
    { rank: "Medali Perak", title: "ISIF", org: "International Science and Invention Fair", year: 2021, level: "Internasional", cat: "inovasi" },
    { rank: "Medali Perak", title: "AISEEF", org: "ASEAN Innovative Science & Entrepreneur Fair", year: 2022, level: "Internasional", cat: "inovasi" },
    { rank: "Medali Perunggu", title: "IICYM", org: "Int'l Invention \u2014 Young Moslem Scientists", year: 2022, level: "Internasional", cat: "inovasi" },
    { rank: "Medali Perunggu", title: "IYIA", org: "International Young Inventors Award", year: 2022, level: "Internasional", cat: "inovasi" },
    { rank: "Juara 1", title: "LKTI PAKAR 8", org: "Universitas Negeri Makassar", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "LKTI PAKAR 7 (Velifepack)", org: "Universitas Negeri Makassar", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "LKTI SOS", org: "MAN Batam", year: 2024, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "KTI UNYSEF Nasional", org: "Universitas Negeri Yogyakarta", year: 2025, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "LKTIN ALFEST", org: "SMAIT As-Syifa Boarding School", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "LKTI Marine Paper", org: "Politeknik Perkapalan Negeri Surabaya", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "LKTI Univett55", org: "Universitas Veteran se-Solo Raya", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "KTIN UNJ", org: "Universitas Negeri Jakarta", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTIN OWWI", org: "ITD Adisutjipto Yogyakarta", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTI Loktimanas", org: "Univ. Sarjanawiyata Tamansiswa", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTI TELEPATI 4.0", org: "Politeknik Negeri Bandung", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 2 + Best Presentation", title: "LKTI Brawijaya", org: "Universitas Brawijaya", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTI OWWI", org: "ITD Adisutjipto", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTI Nasional", org: "Universitas Tidar", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTI Lustrum Bioteknologi", org: "Universitas Diponegoro", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 2", title: "LKTI KEMA", org: "Universitas Negeri Padang", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 3", title: "KTIN Sedatif Series 2", org: "Univ. Muhammadiyah Sumatera Barat", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 3", title: "LKTI PAKAR 7 (Sipatriot)", org: "Universitas Negeri Makassar", year: 2022, level: "Nasional", cat: "kti" },
    { rank: "Juara 3", title: "LKTI Biotik", org: "UIN Sunan Kalijaga", year: 2023, level: "Nasional", cat: "kti" },
    { rank: "Juara 3", title: "LKTI CEC", org: "Universitas Negeri Yogyakarta", year: 2024, level: "Nasional", cat: "kti" },
    { rank: "Best Presentation", title: "KTI Polije", org: "Politeknik Negeri Jember", year: 2024, level: "Nasional", cat: "kti" },
    { rank: "Harapan 1", title: "KTI Mercator", org: "Universitas Gadjah Mada", year: 2025, level: "Nasional", cat: "kti" },
    { rank: "Juara 1", title: "Kaligrafi Feska", org: "LKP Jogja", year: 2023, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 1", title: "Kaligrafi Hari Santri", org: "STIKES Surya Global", year: 2023, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 1", title: "Kaligrafi Ramadhan Fest", org: "FMIPA UNY", year: 2024, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 2", title: "Kaligrafi FKA", org: "Universitas Gadjah Mada", year: 2022, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 2", title: "Kaligrafi PKM", org: "KEMENAG Bantul", year: 2023, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 2", title: "Kaligrafi Biotik", org: "UIN Sunan Kalijaga", year: 2023, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 2", title: "Kaligrafi Nasional", org: "UIN Raden Fatah Palembang", year: 2024, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 3", title: "Kaligrafi Basyiro", org: "Universitas Islam Indonesia", year: 2022, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 3", title: "Kaligrafi Putri Perkasisma", org: "Kwarda Yogyakarta", year: 2023, level: "Nasional", cat: "kaligrafi" },
    { rank: "Harapan 3", title: "Kaligrafi Nasional", org: "Universitas Alma Ata", year: 2023, level: "Nasional", cat: "kaligrafi" },
    { rank: "Juara 1", title: "Business Plan DIKSIVYTA", org: "Universitas Negeri Yogyakarta", year: 2025, level: "Nasional", cat: "bisnis" },
    { rank: "Terbaik", title: "Business Plan Competition", org: "Universitas Negeri Yogyakarta", year: 2024, level: "Nasional", cat: "bisnis" },
    { rank: "Juara 1", title: "LCC OWWI", org: "ITD Adisutjipto", year: 2023, level: "Nasional", cat: "akademik" },
    { rank: "Juara 1", title: "Cerdas Cermat Agama FT", org: "Fakultas Teknik UNY", year: 2024, level: "Fakultas", cat: "akademik" },
    { rank: "Juara 2", title: "KSM Kimia", org: "KEMENAG Bantul", year: 2022, level: "Kabupaten", cat: "akademik" },
    { rank: "Juara 3", title: "KSM Kimia", org: "KEMENAG DIY", year: 2022, level: "Provinsi", cat: "akademik" },
    { rank: "Penghargaan", title: "Mahasiswa Berprestasi (Penalaran)", org: "Universitas Negeri Yogyakarta", year: 2025, level: "Nasional", cat: "akademik" },
    { rank: "Juara 1", title: "Infografis Nasional", org: "BSI Scholarship", year: 2023, level: "Nasional", cat: "digital" },
    { rank: "Juara 1", title: "LIDM \u2014 Inovasi Pembelajaran Digital", org: "BELMAWA", year: 2025, level: "Nasional", cat: "digital" },
    { rank: "Juara 3", title: "National Design Mobile App", org: "Universitas Ahmad Dahlan", year: 2024, level: "Nasional", cat: "digital" },
    { rank: "Harapan 1", title: "Lomba Inovasi Drone Nasional", org: "FASI", year: 2025, level: "Nasional", cat: "inovasi" },
    { rank: "Juara 2", title: "LCC Pramuka", org: "Kwarda Yogyakarta", year: 2023, level: "Nasional", cat: "pramuka" },
  ],

  // --- KARYA (proyek) ---
  projects: [
    {
      title: "GEOFISHA", year: 2025, role: "Leader", icon: "travel_explore", image: "/images/geofisha.png",
      desc: "Alat crowdsourcing pendeteksi potensi perikanan berbasis data geospasial.",
      tags: ["Geospasial", "Data", "IoT"]
    },
    {
      title: "BLOCKDUINO", year: 2025, role: "Anggota", icon: "developer_board", image: "/images/blockduino.jpg",
      desc: "Boardgame sebagai media pembelajaran pemrograman terintegrasi Makeblock.",
      tags: ["Edukasi", "Pemrograman"]
    },
    {
      title: "Stabin", year: 2024, role: "Leader", icon: "bolt", image: "/images/stabin.png",
      desc: "Alat penghasil energi listrik dari pembakaran sampah berbasis IoT.",
      tags: ["IoT", "Energi"]
    },
    {
      title: "Smart Eco Fishery", year: 2023, role: "Leader", icon: "set_meal", image: "/images/smarteco.png",
      desc: "Sistem budidaya ikan nila berbasis IoT bertenaga hybrid.",
      tags: ["IoT", "Riset"]
    },
    {
      title: "Velifepack", year: 2022, role: "Leader", icon: "eco", image: "/images/velifepack.png",
      desc: "Kemasan ramah lingkungan pengganti styrofoam dari limbah pelepah pisang.",
      tags: ["Inovasi", "Lingkungan"]
    },
    {
      title: "Aquatic Refier", year: 2022, role: "Leader", icon: "water_drop", image: "/images/aquatic.png",
      desc: "Alat perbaikan kualitas air sumur berbasis Internet of Things.",
      tags: ["IoT", "Riset"]
    },
  ],
  art: [
    { title: "Karya Kaligrafi", icon: "brush", image: "/images/kaligrafi.png", desc: "Salah satu karya kaligrafi pemenang lomba nasional." },
    { title: "Lukisan", icon: "palette", image: "/images/lukisan.jpg", pos: "70% center", desc: "Karya lukis dengan berbagai penghargaan." },
    { title: "Ilustrasi", icon: "draw", image: "/images/ilustrasi.png", desc: "Ilustrasi tangan untuk media & publikasi." },
    { title: "Infografis", icon: "insights", image: "/images/infografis.png", desc: "Juara 1 Infografis Nasional 2023." },
  ],

  // Prestasi yang ditonjolkan di beranda (berdasarkan judul; ubah sesuai selera)
  featuredAchievements: [
    "ISIF",
    "LKTI PAKAR 8",
    "Kaligrafi Hari Santri",
    "Business Plan DIKSIVYTA",
    "AISEEF",
    "Infografis Nasional",
  ],

  // Teks halaman Prestasi (/prestasi)
  prestasiPage: {
    overline: "PORTOFOLIO AKADEMIK",
    heading: "Jejak Prestasi & Penghargaan",
    subtitle:
      "Sebuah kumpulan perjalanan dalam meraih keunggulan melalui riset ilmiah, seni kaligrafi, dan inovasi teknologi.",
  },

  // Teks halaman Karya (/karya)
  karyaPage: {
    scriptOverline: "Portfolio Karya",
    heading: "Tech & Art Fusion",
    techHeading: "Riset & Proyek Teknologi",
    artHeading: "Galeri Seni & Kaligrafi",
    ctaTitle: "Tertarik Berkolaborasi?",
    ctaText:
      "Kombinasi teknologi, riset, dan seni untuk menciptakan solusi yang berdampak dan estetik. Unduh CV untuk melihat detail selengkapnya.",
  },

  socials: [
    { label: "LinkedIn", href: "https://id.linkedin.com/in/mulisa-kusuma" },
    { label: "Instagram", href: "https://instagram.com/mulisareal" },
    { label: "ResearchGate", href: "#" },
    { label: "Contact", href: "mailto:mulikw08@gmail.com", bold: true },
  ],
  footerNote: "\u00A9 2026 Mulisa - Created by Buatkanweb",
};
