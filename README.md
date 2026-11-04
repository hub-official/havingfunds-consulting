# Having Funds Consulting, Landing Page

Landing page statis untuk Having Funds Consulting, dibangun dengan Astro 5. Halaman ini tidak memakai database, backend, atau pustaka ikon pihak ketiga. Seluruh ikon adalah SVG kustom di `src/components/Icon.astro`.

## Persyaratan

- Node.js 20 atau lebih baru (lihat `.nvmrc`)
- npm 10 atau lebih baru

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Build produksi

```bash
npm run build      # menghasilkan folder dist/
npm run preview    # menguji hasil build secara lokal
npm run check      # pemeriksaan tipe TypeScript dan Astro
```

Folder `dist/` berisi HTML, CSS, dan JavaScript statis yang siap di-hosting di mana saja (Netlify, Vercel, Cloudflare Pages, cPanel, atau VPS dengan Nginx).

## Struktur proyek

```
src/
  data/site.ts          Seluruh teks dan angka konten (sumber tunggal)
  components/           Setiap bagian halaman sebagai komponen terpisah
  layouts/BaseLayout    Head, meta SEO, dan Open Graph
  scripts/motion.ts     Progress scroll, reveal, roadmap, dan cahaya kursor
  styles/global.css     Token warna, tipografi, tombol, dan animasi dasar
  pages/index.astro     Susunan halaman
public/                 favicon, robots.txt
```

## Yang perlu diganti sebelum publikasi

Cari tanda `[GANTI]` dan ubah nilainya:

1. `src/data/site.ts`: email, nomor WhatsApp (format 62 tanpa plus), dan alamat.
2. `astro.config.mjs`: domain produksi pada `site`.
3. `public/robots.txt`: domain pada baris Sitemap.

Jika sitemap diinginkan, tambahkan paket `@astrojs/sitemap` lalu daftarkan di `astro.config.mjs`.

## Catatan konten

- Harga paket indikatif berjenjang berdasarkan skala investasi: Diagnostik mulai Rp5–8 jt, Essential mulai Rp25–45 jt, Growth mulai Rp50–130 jt, dan Enterprise mulai Rp80–220 jt. Sistem operasional dan modul sektor ditawarkan terpisah.
- Halaman menegaskan bahwa jasa ini bersifat penyiapan dokumen dan tidak menjanjikan pendanaan. Pertahankan kalimat ini agar sesuai dengan surat penawaran.
- Teks di footer menyebut bahwa dokumen bukan opini audit, hukum, atau pajak.

## Aksesibilitas dan performa

- Menghormati `prefers-reduced-motion`: animasi berhenti dan konten langsung tampil.
- Navigasi dapat diakses lewat keyboard, dengan indikator fokus yang jelas.
- Halaman tetap tampil lengkap tanpa JavaScript.
- Tidak ada gambar berat; seluruh visual berupa SVG.
