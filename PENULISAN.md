# Aturan Penulisan Soal Belajar Adrina

Dokumen ini dipakai saat menambah atau mengubah soal. Ikuti urutannya. Jika ada aturan yang bertentangan dengan selera pribadi, aturan di sini yang dipakai.

## 1. Sumber materi

- Sumatif 2 berasal dari folder `materi-sumatif-2/` di luar repo.
- Sumatif Final berasal dari folder `materi adrina/kelas 1/Materi Sumatif Final semester 1/`. Ringkasannya ada di `MATERI.md`.
- Dua video Science ikut dipakai lewat transkrip. Video lain tidak dipakai bila tidak bisa ditranskrip.
- Jangan mengarang fakta. Bila materi tidak menyebut suatu angka atau nama, jangan tulis angka atau nama itu.

## 2. Struktur paket

- Satu file di `soal/sd/kelas-1/<kategori>/` adalah satu paket.
- Nama file diakhiri `-sd.js` untuk Sumatif 2 dan `-sd-final.js` untuk Sumatif Final.
- `id` unik dipakai di URL kuis.
- `kategori` tepat `Sumatif 2` atau `Sumatif Final`.
- `kelas` tepat `Kelas 1 SD`, `tingkat` tepat `sd`.
- `versi` Sumatif 2 berisi A, B, C, D. Tiap versi 15 soal pilihan.
- `versi` Sumatif Final berisi A, B, C, D, E, F, G, H. A sampai D berisi 15 soal pilihan. E sampai H berisi 15 soal essay.

## 3. Tipe soal

| Tipe | Dipakai di | Wajib | Dilarang |
|---|---|---|---|
| `pg` | A sampai D | `t`, `p` minimal 3 opsi, `j`, `e` | Opsi kosong, `j` di luar opsi |
| `bs` | A sampai D | `p` tepat `["Benar","Salah"]`, `j`, `e` | Opsi True/False di paket bahasa Indonesia |
| `isian` | A sampai D | `t`, `p` 3 opsi, `j`, `e` | Pertanyaan yang mengulang jawabannya sendiri |
| `cocok` | A sampai D | `t`, 3 pasang, `urutKanan`, `e` | Kanan dobel, urutan kanan sama dengan urutan baris |
| `essay_pendek` | E sampai H | `t`, `e`, `baris: 1` | Menambah `p` atau `j` |
| `essay_kalimat` | E sampai H | `t`, `e`, `baris: 2` | Menambah `p` atau `j` |
| `essay_daftar` | E sampai H | `t`, `e`, `baris: 3` | Menambah `p` atau `j` |
| `essay_cerita` | E sampai H | `t`, `e`, `baris: 4` | Menambah `p` atau `j` |

Pola A sampai D:

```
pg, bs, pg, isian, cocok, pg, bs, isian, pg, cocok, bs, pg, isian, bs, cocok
```

Pola E sampai H:

```
essay_pendek x4, essay_kalimat x4, essay_daftar x4, essay_cerita x3
```

## 4. Bahasa

- Mathematics, Science, English: seluruh `t`, `p`, pasangan, `e`, dan instruksi cocok memakai bahasa Inggris sederhana kelas 1. Opsi `bs` memakai `True` dan `False`.
- Al-Qur'an, Aqidah-Ibadah, Pendidikan Pancasila, PJOK, Seni Rupa, Bahasa Indonesia: bahasa Indonesia yang benar dan ramah anak.
- Basa Jawa: `t` memakai basa Jawa sederhana, `e` memakai bahasa Indonesia.
- Jangan mencampur bahasa tanpa alasan. Istilah baku seperti `o'clock`, `pictogram`, atau nama surat boleh tetap dipakai sesuai materi.

## 5. Kunci dan pembahasan

- `j` adalah indeks 0-based dari opsi yang benar.
- `e` harus menyebut jawaban yang benar. Contoh: bila kunci `senja`, pembahasan tidak boleh menyebut `pagi` sebagai jawaban.
- Untuk `bs`, tulis `Benar, ...` atau `Salah, ...` di awal pembahasan paket bahasa Indonesia. Paket Inggris memakai `True, ...` atau `False, ...`.
- Untuk essay, `e` adalah jawaban contoh untuk guru. Teks ini tidak dinilai otomatis.
- Sebaran `j` pada soal pg dan isian tiap versi harus memuat indeks 0, 1, dan 2.

## 6. Keunikan

- Tidak boleh ada dua soal dengan teks `t` yang sama di seluruh paket Sumatif Final, lintas mapel dan lintas versi.
- Tidak boleh ada dua `e` yang sama.
- Tidak boleh ada kumpulan opsi `p` yang sama, terutama dengan `j` yang sama.
- Tidak boleh ada pasangan `cocok` yang sama persis.
- Dua teks soal tidak boleh memiliki kemiripan token Jaccard 0,60 atau lebih.
- Bedakan fakta yang diuji, bukan hanya mengganti beberapa kata.

## 7. Penulisan yang baik

- Kalimat pendek, satu ide per soal.
- Konteks dekat dengan dunia anak kelas 1: rumah, sekolah, teman, benda di sekitar, kegiatan sehari-hari.
- Instruksi jelas. Siswa tahu harus menjawab apa.
- Emoji boleh dipakai sebagai penanda kategori di UI, bukan pengganti kata penting di soal.
- Hindari pertanyaan yang jawabannya sudah tertulis di pertanyaan.
- Hindari tanda seru berlebih dan kata kuat seperti "luar biasa" di dalam soal.

## 8. Alur kerja

```powershell
cd belajaradrina

# 1. Edit satu file paket
# 2. Build data.js
node tools/build-belajaradrina.mjs

# 3. Jalankan pemeriksaan
node tools/check-one.mjs <nama-file.js>
node tools/check-global.mjs
node tools/check-lang.mjs
node tools/audit1.mjs
node tools/audit-key2.mjs
node tools/audit-bs.mjs
node tools/check-final.mjs

# 4. Uji lokal bila perlu
node tools/serve.mjs

# 5. Commit dan push
git add soal data.js tools
git commit -m "pesan"
git push origin master
```

Build script memeriksa struktur dasar. Ketujuh checker di atas memeriksa pola 15 soal, keunikan global, bahasa, typo mekanis, dan konsistensi kunci. Keduanya harus lolos sebelum push.

Setiap kali `data.js` berubah, naikkan angka `?v=` pada `<script src="data.js?v=...">` di `index.html` dan `kuis.html`. GitHub Pages memakai `cache-control: max-age=600`.

## 9. Ringkasan wajib dan dilarang

**Wajib**

- Sumber materi jelas.
- Pola tipe sesuai versi.
- Kunci benar dan disebut di pembahasan.
- Bahasa sesuai mapel.
- 60 soal unik per mapel Sumatif Final.
- Build dan checker lolos sebelum push.

**Dilarang**

- Mengedit `data.js` langsung.
- Menyamakan soal antar versi atau antar mapel.
- Menulis kunci yang bertentangan dengan pembahasan.
- Memakai bahasa Inggris di paket bahasa Indonesia tanpa alasan.
- Menambah `p` atau `j` pada soal essay.
- Push sebelum pemeriksaan selesai.

Versi aturan ini mengikuti kondisi per 25 November 2026.
