# Audit Soal Belajar Adrina

Tanggal pemeriksaan terakhir: 25 November 2026.

## Lingkup

- 10 paket Sumatif Final, 8 versi per paket, 15 soal per versi: 1200 soal.
- 10 paket Sumatif 2, 4 versi per paket, 15 soal per versi: 600 soal.
- Total seluruh paket: 1800 soal.

## Hasil pemeriksaan terakhir

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Struktur per paket | `node tools/check-one.mjs <file>` | 10 dari 10 paket LULUS. Tiap paket 120 soal unik, A–D pilihan, E–H essay. |
| Keunikan global | `node tools/check-global.mjs` | 1200 soal, 0 pasangan ganda. |
| Bahasa | `node tools/check-lang.mjs` | SEMUA BERSIH. Tiga paket Inggris bebas kata Indonesia. Tujuh paket lain bebas kata Inggris. |
| Typo mekanis | `node tools/audit1.mjs` | Tidak ada temuan. |
| Kunci dan pembahasan | `node tools/audit-key2.mjs` | 1 kandidat. Itu false positive pada PJOK Sumatif 2, kunci `eating vegetables at lunch` benar. |
| Konsistensi Benar/Salah | `node tools/audit-bs.mjs` | 0 inkonsistensi. |
| Build | `node tools/build-belajaradrina.mjs` | 20 paket, 1800 soal, `data.js` 500466 byte. |
| Format akhir | `node tools/check-final.mjs` | SEMUA OK. |
| Sintaks UI | pemeriksaan blok script `kuis.html` | 1 blok lolos. |

## Temuan yang sudah diperbaiki

- Tiga kunci salah ditemukan pada paket final: Aqidah C8, Basa Jawa A13, dan Basa Jawa C4. Kunci disesuaikan dengan pembahasan.
- Ratusan pasangan soal memiliki pembahasan, opsi, atau pasangan cocok yang sama. Seluruh 600 soal final ditulis ulang sehingga tidak ada kemiripan lintas mapel.
- Soal Math, Science, dan English disesuaikan ke bahasa Inggris Cambridge. Tujuh mapel lain dibersihkan dari kata Inggris yang tidak perlu.
- Essay awalnya dicampur di A–D. Sekarang berada di E–H, sedangkan A–D kembali ke 15 soal pilihan.
- Kunci jawaban awalnya menampilkan semua versi. Sekarang hanya menampilkan variasi yang sedang dibuka.
- Tombol kunci gagal dibuka pada browser dengan `kuis.html` lama dan `data.js` baru. Modal sekarang memiliki penjaga error dan cache buster sudah dinaikkan.

## Catatan terbuka

- Satu kandidat di `audit-key2.mjs` masih muncul pada PJOK Sumatif 2 dan sudah diverifikasi manual sebagai false positive.
- Uji langsung dengan murid kelas 1 belum dilakukan. Panjang kalimat dan kesulitan kata masih diperkirakan dari kosakata Cambridge.
- GitHub Pages memakai `cache-control: max-age=600`. URL dengan `?cb=` diperlukan bila browser masih menampilkan data lama.

## Riwayat singkat

| Tanggal | Commit | Perubahan |
|---|---|---|
| 23 November 2026 | `6886da4` | Hilangkan soal ganda pada paket final. |
| 24 November 2026 | `81c90e0` | Tulis ulang final dari materi Adrina. |
| 24 November 2026 | `793229c` | Tambah fakta dari transkrip video Science. |
| 24 November 2026 | `82c5a5e` | Sesuaikan bahasa dengan Cambridge. |
| 24 November 2026 | `91f89af` | Tambah empat kategori essay. |
| 24 November 2026 | `7bf170c` | Pindahkan essay ke variasi E–H. |
| 24 November 2026 | `f9731ef` | Kunci jawaban per variasi. |

Detail perubahan ada di `CHANGELOG.md`.
