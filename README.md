# I Kadek Hendrayana Portfolio

Website portofolio Digital Marketing milik I Kadek Hendrayana. Proyek ini sudah
disiapkan sebagai aplikasi Next.js yang dapat diunggah ke GitHub dan langsung
di-deploy ke Vercel.

## Menjalankan website di laptop

Pastikan Node.js versi 20.9 atau lebih baru sudah terpasang.

```bash
npm install
npm run dev
```

Kemudian buka `http://localhost:3000`.

## Mengunggah ke GitHub

1. Buat repository baru di GitHub, misalnya `hendra-portfolio`.
2. Ekstrak seluruh isi ZIP ini.
3. Upload **isi foldernya**, bukan folder ZIP.
4. Pastikan `package.json`, folder `app`, dan folder `public` berada di halaman
   utama repository.
5. Commit perubahan ke branch `main`.

## Deploy gratis ke Vercel

1. Masuk ke [Vercel](https://vercel.com/) menggunakan akun GitHub.
2. Pilih **Add New > Project**.
3. Import repository `hendra-portfolio`.
4. Vercel akan mendeteksi framework **Next.js** secara otomatis.
5. Biarkan pengaturan build default, kemudian pilih **Deploy**.

Setelah deployment selesai, Vercel memberikan alamat gratis dengan format
`nama-project.vercel.app`.

## Cara mengedit website

- Konten utama: `app/page.tsx`
- Tampilan dan responsive layout: `app/globals.css`
- Judul dan deskripsi website: `app/layout.tsx`
- Gambar, PDF, dan ikon: folder `public`

Setelah file di GitHub diedit dan di-commit ke branch `main`, Vercel akan
memperbarui website secara otomatis.

## Catatan

Tidak ada environment variable atau database yang diperlukan. Semua gambar dan
PDF portofolio sudah disertakan di dalam folder `public`.
