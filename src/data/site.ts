/**
 * Sumber konten tunggal untuk seluruh landing page dan dokumen konsultasi.
 * Seluruh konten disesuaikan agar netral sektor dan berlaku lintas industri.
 * Field bertanda [GANTI] harus diisi sebelum publikasi.
 */

export const site = {
  name: "Having Funds Consulting",
  shortName: "Having Funds",
  leadConsultant: "[GANTI: Nama Konsultan / Managing Partner]",
  tagline: "Dari proposal menjadi kesiapan investor.",
  description:
    "Having Funds Consulting menyiapkan bisnis lintas sektor dan perusahaan skala menengah agar memiliki dokumen kesiapan investasi yang komprehensif dan dapat diuji: Investment Readiness Assessment, company profile, tata kelola, strategi bisnis, feasibility study, prospektus, dokumen penawaran kemitraan komersial, dan deck investasi.",
  email: "hello@havingfundsconsulting.com", // [GANTI: Email Resmi Konsultan]
  whatsapp: "628XXXXXXXXXX", // [GANTI: Nomor WhatsApp Resmi Tanpa Tanda Plus]
  address: "Indonesia", // [GANTI: Alamat Domisili Kantor Konsultan]
  year: new Date().getFullYear(),
};

export const nav = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "Dokumen", href: "#dokumen" },
  { label: "Strategi", href: "#strategi" },
  { label: "Paket", href: "#paket" },
  { label: "Kontak", href: "#kontak" },
];

export const tickerItems = [
  "Investment Readiness Assessment",
  "Company profile",
  "Tata kelola",
  "Strategi bisnis",
  "Feasibility study",
  "Prospektus investasi",
  "Deck investasi",
  "Dokumen penawaran kemitraan komersial",
  "Deck skema kemitraan pemasok",
  "Website korporat",
  "Sistem operasional (opsional, vendor-netral)",
];

export const gaps = [
  {
    label: "Yang biasanya dikirim",
    items: [
      "Proposal dengan visi dan angka besar tanpa rincian metodologis",
      "Satu nama direktur tanpa kejelasan pembagian tata kelola",
      "Proyeksi keuangan tanpa pengujian asumsi dan analisis sensitivitas",
      "Janji pengembalian modal tanpa struktur sumber dana yang jelas",
    ],
  },
  {
    label: "Yang diminta investor",
    items: [
      "Legalitas dan perizinan lengkap yang dapat diverifikasi secara independen",
      "Struktur organisasi, uraian tugas, dan tata kelola tertulis",
      "Feasibility study dengan skenario arus kas, NPV, IRR, DSCR, dan sensitivitas",
      "Bukti daya tarik komersial berupa dokumen penawaran, kontrak, atau LOI mitra",
    ],
  },
];

export const phases = [
  {
    title: "Pemenuhan dasar",
    focus: "Legalitas, baseline keuangan, dan verifikasi asumsi operasional dirapikan melalui scan kesiapan awal.",
    output: "Laporan kesiapan dan gap analysis",
    time: "1–2 minggu",
  },
  {
    title: "Tata kelola",
    focus: "Struktur organisasi, SOP alur kerja utama, dan pedoman keputusan disusun serta disepakati bersama manajemen.",
    output: "Company profile, pedoman tata kelola",
    time: "3–4 minggu",
  },
  {
    title: "Kehadiran digital",
    focus: "Website korporat dibangun paralel untuk memastikan kredibilitas dan transparansi profil perusahaan.",
    output: "Website korporat (5–7 halaman)",
    time: "3–4 minggu",
  },
  {
    title: "Strategi komersial",
    focus: "Penyusunan dokumen penawaran kemitraan komersial dan penataan rantai pasok melalui deck skema kemitraan pemasok.",
    output: "Dokumen penawaran komersial, draft kemitraan pemasok",
    time: "4–6 minggu",
  },
  {
    title: "Persiapan pendanaan",
    focus: "Feasibility study terperinci, prospektus investasi, dan deck pitching disusun berbasis model keuangan yang teruji.",
    output: "FS lengkap, prospektus, deck investasi",
    time: "4–6 minggu",
  },
];

export const deliverables = [
  {
    icon: "scale",
    name: "Investment Readiness Assessment",
    desc: "Evaluasi menyeluruh terhadap legalitas, kelayakan baseline keuangan, proses operasional, dan tata kelola beserta laporan gap prioritas.",
    format: "Laporan PDF",
  },
  {
    icon: "book",
    name: "Company profile",
    desc: "Profil perusahaan terstruktur: ikhtisar bisnis, portofolio produk/layanan, kapabilitas fasilitas, manajemen, dan roadmap strategis.",
    format: "PDF cetak dan digital",
  },
  {
    icon: "lattice",
    name: "Paket tata kelola",
    desc: "Struktur organisasi, uraian tugas (job description), SOP alur kerja utama, dan pedoman pengambilan keputusan manajemen.",
    format: "Buku panduan PDF",
  },
  {
    icon: "spark",
    name: "Strategi bisnis dan roadmap",
    desc: "Analisis lanskap pasar, positioning produk/layanan, model bisnis, rantai nilai, dan roadmap rencana pertumbuhan 3–5 tahun.",
    format: "Dokumen strategi dan deck",
  },
  {
    icon: "chart",
    name: "Feasibility study",
    desc: "Kajian kelayakan komprehensif: proyeksi keuangan 5 tahun, arus kas, NPV, IRR, DSCR, titik impas (BEP), dan uji sensitivitas.",
    format: "Dokumen laporan dan model keuangan Excel",
  },
  {
    icon: "doc",
    name: "Prospektus investasi",
    desc: "Struktur instrumen pendanaan, hak dan kewajiban investor, faktor risiko, mitigasi, serta skenario exit dan pengembalian modal.",
    format: "Dokumen prospektus PDF",
  },
  {
    icon: "deck",
    name: "Deck investasi",
    desc: "Bahan presentasi pitching 15–20 slide yang ringkas dan persuasif: problem, solusi, traksi, finansial, dan rencana penggunaan dana.",
    format: "PPTX dan PDF",
  },
  {
    icon: "link",
    name: "Dokumen penawaran kemitraan komersial",
    desc: "Profil penawaran kerja sama B2B, spesifikasi produk/layanan, volume, struktur harga, SLA, dan syarat komersial untuk mitra kerja.",
    format: "Dokumen PDF",
  },
  {
    icon: "users",
    name: "Deck skema kemitraan pemasok",
    desc: "Panduan kemitraan rantai pasok: standar mutu, formula harga, jadwal pasokan, dan skema kemitraan berkelanjutan yang saling menguntungkan.",
    format: "PPTX dan PDF",
  },
  {
    icon: "globe",
    name: "Website korporat",
    desc: "Website representatif 5–7 halaman mencakup beranda, profil, produk/layanan, kemitraan komersial, dan pusat informasi investor.",
    format: "Website siap pakai",
  },
  {
    icon: "layers",
    name: "Sistem operasional (opsional, vendor-netral)",
    desc: "Kajian kebutuhan alur proses bisnis dan pendampingan seleksi/implementasi sistem operasional (ERP/SaaS) berbasis kebutuhan nyata.",
    format: "Penawaran terpisah",
  },
];

export const packages = [
  {
    key: "diagnostik",
    name: "Diagnostik",
    price: 5000000,
    priceRange: "Rp5–8 juta",
    tierPrices: {
      "Rp10–25 M": "Rp5–8 juta",
      "Rp25–50 M": "Rp5–8 juta",
      "Rp50–100 M+": "Rp5–8 juta",
    },
    for: "Pemindaian awal gap kesiapan sebelum investasi dokumen besar",
    featured: false,
    features: [
      { t: "Readiness scan awal (1–2 minggu)", on: true },
      { t: "Laporan gap & prioritas perbaikan", on: true },
      { t: "Data room readiness checklist", on: true },
      { t: "Model keuangan dasar", on: false },
      { t: "Company profile & website korporat", on: false },
      { t: "Feasibility study (NPV, IRR, DSCR)", on: false },
      { t: "Prospektus & pitch deck investasi", on: false },
      { t: "Tata kelola, SOP & strategi bisnis", on: false },
      { t: "Penawaran komersial & kemitraan pemasok", on: false },
      { t: "Retainer pendampingan pasca serah terima", on: false },
    ],
    time: "1–2 minggu",
    note: "Biaya advokat, notaris, KAP, dan penilai aset tidak termasuk dan dihitung terpisah.",
  },
  {
    key: "essential",
    name: "Essential",
    price: 25000000,
    priceRange: "Rp25–45 juta",
    tierPrices: {
      "Rp10–25 M": "Rp25–30 juta",
      "Rp25–50 M": "Rp35–45 juta",
      "Rp50–100 M+": "Tidak ditawarkan",
    },
    for: "Fondasi kredibilitas awal dan instrumen profil korporat",
    featured: false,
    features: [
      { t: "Readiness assessment menyeluruh", on: true },
      { t: "Company profile korporat profesional", on: true },
      { t: "Website korporat (5–7 halaman)", on: true },
      { t: "Model keuangan dasar", on: true },
      { t: "Feasibility study (NPV, IRR, DSCR)", on: false },
      { t: "Prospektus & pitch deck investasi", on: false },
      { t: "Tata kelola & SOP tertulis", on: false },
      { t: "Penawaran komersial & kemitraan pemasok", on: false },
      { t: "Retainer pendampingan pasca serah terima", on: false },
    ],
    time: "4–6 minggu",
    note: "Biaya advokat, notaris, KAP, dan penilai aset tidak termasuk dan dihitung terpisah. Tidak ditawarkan untuk skala Rp50–100 M+.",
  },
  {
    key: "growth",
    name: "Growth",
    price: 50000000,
    priceRange: "Rp50–130 juta",
    tierPrices: {
      "Rp10–25 M": "Rp50–60 juta",
      "Rp25–50 M": "Rp75–90 juta",
      "Rp50–100 M+": "Rp110–130 juta",
    },
    for: "Kesiapan pitching dan penawaran terstruktur ke calon investor",
    featured: false,
    features: [
      { t: "Readiness assessment menyeluruh", on: true },
      { t: "Company profile & website korporat", on: true },
      { t: "Model keuangan proyeksi 5 tahun", on: true },
      { t: "Feasibility study (NPV, IRR, DSCR, sensitivitas)", on: true },
      { t: "Prospektus investasi komprehensif", on: true },
      { t: "Pitch deck presentasi (15–20 slide)", on: true },
      { t: "Tata kelola & SOP pedoman keputusan", on: false },
      { t: "Penawaran komersial & kemitraan pemasok", on: false },
      { t: "Retainer pendampingan pasca serah terima", on: false },
    ],
    time: "8–10 minggu",
    note: "Biaya advokat, notaris, KAP, dan penilai aset tidak termasuk dan dihitung terpisah.",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: 80000000,
    priceRange: "Rp80–220 juta",
    tierPrices: {
      "Rp10–25 M": "Rp80–95 juta",
      "Rp25–50 M": "Rp120–140 juta",
      "Rp50–100 M+": "Rp170–220 juta",
    },
    for: "Paket lengkap tata kelola, kemitraan & kesiapan institusional",
    featured: true,
    features: [
      { t: "Readiness assessment menyeluruh", on: true },
      { t: "Company profile & website (5–7 hal)", on: true },
      { t: "Feasibility study 5 tahun & model teruji", on: true },
      { t: "Prospektus investasi & pitch deck pro", on: true },
      { t: "Tata kelola (struktur, SOP, pedoman)", on: true },
      { t: "Strategi bisnis & roadmap 3–5 tahun", on: true },
      { t: "Dokumen penawaran kemitraan komersial", on: true },
      { t: "Deck skema kemitraan pemasok", on: true },
      { t: "Retainer pendampingan 1 bulan serah terima", on: true },
    ],
    time: "12–16 minggu",
    note: "Biaya advokat, notaris, KAP, dan penilai aset tidak termasuk dan dihitung terpisah.",
  },
];

export const addon = {
  name: "Sistem operasional (opsional, vendor-netral)",
  range: "Penawaran terpisah",
  note: "Scoping kebutuhan proses bisnis, arsitektur data, dan pendampingan seleksi/implementasi sistem operasional (ERP/SaaS). Nilai akhir ditentukan setelah sesi scoping kebutuhan teknis.",
  additionalAddons: [
    {
      name: "Data room checklist dan pendampingan struktur data",
      range: "Tersedia untuk semua paket",
      note: "Standardisasi folder virtual data room (VDR), indeks dokumen, dan protokol due diligence investor.",
    },
    {
      name: "Retainer bulanan pasca serah terima",
      range: "Penawaran bulanan terpisah",
      note: "Pendampingan klarifikasi data, pembaruan model finansial berkala, dan persiapan sesi tanya-jawab calon investor.",
    },
  ],
  legalNotice:
    "Biaya advokat, notaris, KAP, dan penilai aset tidak termasuk dan dihitung terpisah.",
};

export const steps = [
  {
    title: "Diagnostik",
    text: "Pengumpulan data awal, wawancara manajemen, serta penelaahan proses operasional dan administratif.",
  },
  {
    title: "Penyusunan",
    text: "Dokumen naratif dan model keuangan disusun secara terintegrasi agar seluruh data dan proyeksi saling selaras.",
  },
  {
    title: "Review",
    text: "Pembahasan berkala bersama manajemen dengan dua putaran revisi terstruktur sebelum finalisasi.",
  },
  {
    title: "Serah terima",
    text: "Penyerahan seluruh berkas final (editable dan PDF siap pakai) beserta panduan pengelolaan data room.",
  },
];

export const promises = {
  yes: [
    "Dokumen kesiapan investasi yang komprehensif, logis, dan dapat diuji independen",
    "Bahan presentasi pitching terstruktur untuk calon investor dan lembaga pembiayaan",
    "Dokumen penawaran kemitraan komersial dan skema kerja sama pasokan",
    "Citra digital korporat (website) yang selaras dengan narasi dokumen investasi",
  ],
  no: [
    "Jaminan bahwa proyek atau perusahaan akan memperoleh pendanaan / investasi",
    "Opini audit laporan keuangan (memerlukan Kantor Akuntan Publik / KAP berizin)",
    "Opini hukum formal atau advis perpajakan (memerlukan advokat, notaris, atau konsultan pajak berizin)",
    "Jaminan keberhasilan kontrak komersial tanpa keterlibatan dan keputusan independen pihak pembeli",
  ],
};

export const sectorModules = [
  {
    id: "agribusiness",
    name: "Agribisnis",
    description:
      "Checklist kesiapan rantai pasok hulu, siklus budidaya/tanam, standar penanganan pascapanen, kontrak kemitraan pemasok, dan manajemen risiko komoditas.",
    keyAssumptions: [
      "Siklus panen, produktivitas (yield), dan susut pascapanen",
      "Model bagi hasil atau formula harga kemitraan pasokan",
      "Biaya sarana produksi (saprotan) dan logistik rantai dingin",
      "Mitigasi risiko iklim, fluktuasi harga komoditas, dan hama",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufaktur",
    description:
      "Checklist efektivitas peralatan keseluruhan (OEE), manajemen persediaan bahan baku, standardisasi pengendalian mutu (QA/QC), dan kepatuhan K3/lingkungan.",
    keyAssumptions: [
      "Bill of materials (BOM) dan efisiensi konversi bahan baku",
      "Kapasitas terpasang versus utilisasi lini produksi",
      "Jadwal peremajaan mesin, maintenance, dan umur ekonomis aset",
      "Perputaran modal kerja persediaan (raw material, WIP, finished goods)",
    ],
  },
  {
    id: "fnb",
    name: "F&B (Makanan & Minuman)",
    description:
      "Checklist standarisasi resep, kalkulasi harga pokok penjualan (HPP), sertifikasi halal dan izin edar BPOM, efisiensi central kitchen, dan logistik bahan segar.",
    keyAssumptions: [
      "Target food cost percentage dan batas toleransi pemborosan (wastage)",
      "Ekonomi unit per gerai: sewa lokasi, traffic, dan rata-rata belanja konsumen",
      "Skema rantai pasok dari dapur pusat (central kitchen) ke gerai cabang",
      "Kepatuhan higienitas pangan dan perizinan higienis/sanitasi",
    ],
  },
  {
    id: "property",
    name: "Properti",
    description:
      "Checklist legalitas peruntukan lahan (RTRW), tahapan perizinan konstruksi (PBG/AMDAL), pentahapan belanja modal (capex), dan jadwal penyerapan unit.",
    keyAssumptions: [
      "Perhitungan rasio gross floor area (GFA) dan saleable area",
      "Jadwal tahapan konstruksi, serah terima unit, dan cash flow capex",
      "Skema pembayaran pembeli (KPR, tunai bertahap, hard cash)",
      "Cadangan kontinjensi kenaikan harga material konstruksi dan perizinan",
    ],
  },
  {
    id: "logistics",
    name: "Logistik",
    description:
      "Checklist utilisasi armada dan ruang gudang, optimasi rute distribusi, konsumsi bahan bakar, pemeliharaan armada, dan service level agreement (SLA) pengiriman.",
    keyAssumptions: [
      "Faktor muatan (load factor), jarak tempuh, dan turnaround time armada",
      "Struktur tarif jasa per ton/cbm/trip dan biaya operasional bahan bakar",
      "Biaya perawatan berkala, depresiasi kendaraan, dan asuransi kargo",
      "Manajemen kontrak jaringan agen dan mitra pergudangan pihak ketiga (3PL)",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    description:
      "Checklist produktivitas ruang ritel, perputaran persediaan barang dagang, margin kategori produk, strategi penetapan harga, dan retensi pelanggan omnichannel.",
    keyAssumptions: [
      "Penjualan per meter persegi (sales per sq meter) dan pergerakan stok per SKU",
      "Gross margin return on investment (GMROI) per departemen barang",
      "Toleransi penyusutan stok (shrinkage), barang kedaluwarsa, dan kebijakan diskon",
      "Biaya akuisisi pelanggan (CAC) dan nilai loyalitas pelanggan (LTV)",
    ],
  },
];

export const scaleTiers = {
  scales: ["Rp10–25 M", "Rp25–50 M", "Rp50–100 M+"],
  disclaimer:
    "Biaya advokat, notaris, KAP, dan penilai aset tidak termasuk dan dihitung terpisah. Seluruh nilai indikatif belum termasuk pajak.",
  rows: [
    {
      packageName: "Diagnostik",
      tierPrices: {
        "Rp10–25 M": "Rp5–8 juta",
        "Rp25–50 M": "Rp5–8 juta",
        "Rp50–100 M+": "Rp5–8 juta",
      },
      duration: "1–2 minggu",
      deliverableSummary:
        "Scan kesiapan 1–2 minggu, laporan gap, dan rekomendasi prioritas. Tidak termasuk dokumen final.",
    },
    {
      packageName: "Essential",
      tierPrices: {
        "Rp10–25 M": "Rp25–30 juta",
        "Rp25–50 M": "Rp35–45 juta",
        "Rp50–100 M+": "Tidak ditawarkan",
      },
      duration: "4–6 minggu",
      deliverableSummary:
        "Investment Readiness Assessment, company profile, website 5–7 halaman, model keuangan dasar. Tidak termasuk FS penuh.",
    },
    {
      packageName: "Growth",
      tierPrices: {
        "Rp10–25 M": "Rp50–60 juta",
        "Rp25–50 M": "Rp75–90 juta",
        "Rp50–100 M+": "Rp110–130 juta",
      },
      duration: "8–10 minggu",
      deliverableSummary:
        "Semua isi Essential, ditambah FS lengkap (proyeksi 5 tahun, cash flow, NPV, IRR, DSCR, sensitivitas), prospektus, dan deck investasi.",
    },
    {
      packageName: "Enterprise",
      tierPrices: {
        "Rp10–25 M": "Rp80–95 juta",
        "Rp25–50 M": "Rp120–140 juta",
        "Rp50–100 M+": "Rp170–220 juta",
      },
      duration: "12–16 minggu",
      deliverableSummary:
        "Semua isi Growth, ditambah tata kelola (struktur, SOP, pedoman keputusan), strategi bisnis & roadmap, dokumen penawaran kemitraan komersial, deck skema kemitraan pemasok, dan retainer pendampingan 1 bulan pasca serah terima.",
    },
    {
      packageName: "Sistem operasional",
      tierPrices: {
        "Rp10–25 M": "Penawaran terpisah",
        "Rp25–50 M": "Penawaran terpisah",
        "Rp50–100 M+": "Penawaran terpisah",
      },
      duration: "Sesuai scoping",
      deliverableSummary:
        "Sistem operasional (opsional, vendor-netral) sesuai kebutuhan proses bisnis dan arsitektur data perusahaan.",
    },
  ],
};
