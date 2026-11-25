# Sistem Desain Belajar Adrina

Dokumen ini mencatat tampilan yang sedang dipakai, bukan usulan desain baru. Bila ada perubahan UI, perbarui file ini di commit yang sama.

## 1. Prinsip

- Anak kelas 1 harus bisa membaca dan mengetuk tanpa bantuan.
- Satu layar punya satu fokus utama, yaitu soal yang sedang dikerjakan.
- Warna dan emoji dipakai sebagai penanda, bukan pengganti teks.
- Cetak tetap terbaca dalam hitam putih.

## 2. Warna

Token utama `kuis.html`:

| Peran | Variabel | Nilai |
|---|---|---|
| Teks utama | `--ink` | `#242840` |
| Teks sekunder | `--muted` | `#7a7f95` |
| Garis | `--line` | `#e9ecf4` |
| Permukaan lembut | `--soft` | `#f7f8fc` |
| Biru aksi | `--biru` | `#3b82f6` |
| Hijau benar | `--hijau` | `#22c55e` |
| Merah salah | `--merah` | `#ef4444` |
| Kuning sorotan | `--kuning` | `#facc15` |
| Jingga, ungu, pink | `--jingga`, `--ungu`, `--pink` | `#f97316`, `#8b5cf6`, `#ec4899` |

`index.html` memakai `--ink` `#1f2340` dan `--muted` `#767d99`. Selisih ini bawaan dan belum disatukan.

Header hub memakai gradasi `--grad`, yaitu `linear-gradient(135deg,#2563eb,#7c3aed 55%,#ec4899)`. Hero kuis memakai gradasi biru ke ungu ke pink yang ditulis langsung di CSS. Gradasi ini adalah warisan tampilan yang sedang dipakai. Jangan menambah gradasi baru tanpa alasan.

## 3. Tipografi

- Keluarga huruf: `"Segoe UI", system-ui, Arial, sans-serif`.
- Ukuran dasar `html` adalah `17.5px`.
- Judul dan label sering memakai `font-weight: 800` atau `900`. Ini kondisi saat ini, bukan rekomendasi untuk teks panjang.
- Teks soal memakai ukuran sekitar `1.05rem` sampai `1.28rem` tergantung peran.
- Label kecil memakai `0.72rem` sampai `0.86rem`.
- Huruf kapital di awal kalimat dan tanda baca di akhir kalimat wajib untuk teks bahasa Indonesia.

## 4. Ruang dan bentuk

| Elemen | Radius | Padding khas |
|---|---|---|
| Tombol | `13px` sampai `14px` | `11px 20px` atau `13px 24px` |
| Kartu paket dan soal | `22px` | `20px 18px` atau `22px 20px` |
| Header hub | `26px` | `26px 24px` |
| Hero kuis | `24px` | `22px` |
| Chip dan pill | `999px` | `6px 12px` |
| Textarea essay | `11px` | `12px` |

Garis kartu memakai `3px solid var(--line)`. Tombol cocok dan textarea memakai `2.5px solid var(--line)`. Nilai ini sengaja tebal supaya mudah dilihat anak.

## 5. Komponen

### Hub (`index.html`)

- Header berisi judul aplikasi, tagline, dan lima chip statistik.
- Filter memakai chip dengan label `KELAS / JENJANG`, `KATEGORI PENILAIAN`, dan `MATA PELAJARAN`.
- Kartu paket menampilkan ikon mapel, judul, badge, deskripsi singkat, tombol Kerjakan, dan tombol Kunci.
- Kartu memakai grid tiga kolom di layar lebar dan menyusun di layar sempit.

### Kuis (`kuis.html`)

- Halaman pemilih versi menampilkan delapan kartu: Variasi A sampai D dan Essay E sampai H.
- Topbar berisi tautan daftar soal, nama versi, penghitung terjawab, Kunci Jawaban, dan Cetak Essay.
- Dot navigasi berjumlah 15 sesuai jumlah soal per versi.
- Kartu soal berisi label tipe, teks soal, area jawaban, dan tombol navigasi.
- Pilihan ganda, isian, dan benar/salah memakai label besar yang bisa diketuk.
- Soal cocok memakai tombol pilihan yang semuanya terlihat, dibagi per baris kiri.
- Soal essay memakai textarea. Jumlah baris berasal dari `baris`, yaitu 1 sampai 4.
- Modal kunci menampilkan kunci untuk satu variasi yang sedang dibuka.
- Halaman hasil menampilkan nilai, predikat, bintang, pujian, dan daftar jawaban.

### Cetak

- `Cetak / PDF` mencetak halaman hasil lewat `window.print()`.
- `Cetak Essay` membuka jendela baru berisi soal essay dengan garis tulis. Kunci untuk guru diletakkan di bagian bawah.
- Aturan `@media print` menyembunyikan tombol, topbar, dan navigasi.

## 6. State

- Tombol aktif memakai warna biru atau ungu sesuai peran.
- Tombol dinonaktifkan memakai warna abu dan atribut `disabled`.
- Fokus keyboard memakai outline. Logo beranda dan textarea essay sudah punya outline khusus.
- Pilihan cocok yang dipilih memakai latar biru dan teks putih.
- Jawaban benar memakai hijau, jawaban salah memakai merah, disertai tanda centang atau silang.
- Teks tidak boleh hanya mengandalkan warna. Tetap ada kata "Benar" atau "Salah" dan simbol.

## 7. Responsivitas dan aksesibilitas

- Tata letak menyusun pada layar sempit.
- Textarea essay memiliki `rows` sesuai tipe dan bisa diubah ukurannya.
- Tombol dan pilihan cocok memiliki tinggi minimal sekitar 46 px.
- Ikon emoji yang bersifat dekoratif diberi `aria-hidden` bila ada di elemen interaktif.
- Setiap tombol yang berisi ikon saja harus memiliki nama yang bisa dibaca pembaca layar.
- Hindari `outline: none` tanpa pengganti.

## 8. Gerak

- Tidak ada animasi berulang.
- Perpindahan halaman memakai `window.scrollTo` dengan perilaku halus.
- Transisi yang dipakai sebatas perubahan warna atau permukaan pada state interaktif.

## 9. Catatan perawatan

- Jangan menambah warna baru tanpa peran yang jelas.
- Jangan mengganti seluruh skema warna hanya karena ingin tampilan berbeda.
- Jika mengubah token, ubah juga dokumentasi ini dan uji ulang kontras teks.
- Perubahan `data.js` harus diikuti naiknya `?v=` di `index.html` dan `kuis.html`.
