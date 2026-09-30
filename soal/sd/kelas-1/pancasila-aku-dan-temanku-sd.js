/* ✏️ PAKET SOAL: Pendidikan Pancasila Kelas 1 SD — Aku dan Temanku (Sumatif 2)
   Sumber materi: materi-sumatif-2/Pendidikan Pancasila/PANCASILA Pelajaran 1
   (identitas diri, hobi 3 bidang, 6 agama, mengenal teman & wawancara, aku bisa berkarya)
   + quiz "Mengenal Teman dan Aku Bisa Berkarya" + worksheet keberagaman agama.
   Edit file ini saja untuk mengubah soal paket ini.
   Lalu jalankan: node tools/build-belajaradrina.mjs   (lalu commit & push) */
window.KUIS = window.KUIS || [];
window.KUIS.push({
  "id": "pancasila-aku-dan-temanku-sd",
  "urut": 3,
  "judul": "Aku dan Temanku",
  "kategori": "Sumatif 2",
  "mapel": "Pendidikan Pancasila",
  "kelas": "Kelas 1 SD",
  "tingkat": "sd",
  "jadwal": "2 Oktober 2026",
  "bab": "Hobi, Agama, Mengenal Teman, dan Aku Bisa Berkarya",
  "ikon": "🇮🇩",
  "deskripsi": "Mengenal identitas diri dan teman, menghargai keberagaman agama, hobi, serta berkarya dengan percaya diri.",
  "versi": [
    {
      "kode": "A",
      "nama": "Sumatif 2",
      "soal": [
        {
          "tipe": "pg",
          "t": "Agar punya teman, kita harus berani ....",
          "p": ["mengejek", "diam saja", "berkenalan"],
          "j": 2,
          "e": "Berkenalan artinya ingin saling tahu. Dengan berani berkenalan, kita mendapat teman baru."
        },
        {
          "tipe": "pg",
          "t": "Wawancara artinya .... kepada orang lain untuk mengenalnya lebih dekat.",
          "p": ["bertanya", "menjauhi", "mengejek"],
          "j": 0,
          "e": "Wawancara adalah bertanya kepada orang lain untuk mengenalnya lebih dekat."
        },
        {
          "tipe": "pg",
          "t": "Dari kegiatan yang kita sukai, kita bisa menghasilkan sebuah ....",
          "p": ["pertengkaran", "masalah", "karya"],
          "j": 2,
          "e": "Karya adalah hasil usaha yang kita lakukan, misalnya gambar, lagu, atau benda."
        },
        {
          "tipe": "pg",
          "t": "Contoh hobi di bidang seni adalah ....",
          "p": ["menggambar", "tidur seharian", "bermain saja"],
          "j": 0,
          "e": "Hobi bidang seni antara lain menggambar, mewarnai, melipat kertas, bernyanyi, dan menari."
        },
        {
          "tipe": "pg",
          "t": "Membaca buku cerita termasuk hobi di bidang ....",
          "p": ["pengetahuan", "olahraga", "seni"],
          "j": 0,
          "e": "Membaca buku cerita, menyusun balok, dan mengamati tumbuhan adalah hobi bidang pengetahuan."
        },
        {
          "tipe": "bs",
          "t": "Ada enam agama resmi di Indonesia.",
          "p": ["Benar", "Salah"],
          "j": 0,
          "e": "Enam agama di Indonesia: Islam, Kristen, Katolik, Hindu, Budha, dan Konghucu → Benar."
        },
        {
          "tipe": "bs",
          "t": "Karya buatan teman boleh kita ejek supaya teman lebih semangat.",
          "p": ["Benar", "Salah"],
          "j": 1,
          "e": "Kita harus menghargai karya teman dan tidak boleh mengejek → Salah."
        },
        {
          "tipe": "bs",
          "t": "Hobi adalah kegemaran yang dilakukan saat waktu luang.",
          "p": ["Benar", "Salah"],
          "j": 0,
          "e": "Pengertian hobi: kegemaran yang dilakukan saat waktu luang → Benar."
        },
        {
          "tipe": "bs",
          "t": "Saat melakukan wawancara, sikap kita sebaiknya cemberut dan marah.",
          "p": ["Benar", "Salah"],
          "j": 1,
          "e": "Saat wawancara sikap kita sebaiknya ramah, menyampaikan pertanyaan dengan baik, dan tersenyum → Salah."
        },
        {
          "tipe": "isian",
          "t": "Identitas diri adalah informasi tentang .... kita.",
          "p": ["diri", "guru", "tetangga"],
          "j": 0,
          "e": "Identitas diri adalah informasi tentang diri kita yang membedakan kita dengan orang lain."
        },
        {
          "tipe": "isian",
          "t": "Tempat ibadah agama Islam adalah ....",
          "p": ["masjid", "gereja", "pura"],
          "j": 0,
          "e": "Umat Islam beribadah di masjid. Gereja untuk Kristen/Katolik, pura untuk Hindu."
        },
        {
          "tipe": "isian",
          "t": "Karya adalah hasil .... yang kita lakukan.",
          "p": ["usaha", "tidur", "marah"],
          "j": 0,
          "e": "Karya adalah hasil usaha yang kita lakukan — misalnya membuat kartu nama atau papan nama meja."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan contoh hobi dengan bidangnya!",
          "pasangan": [
            ["bermain sepak bola", "olahraga"],
            ["menggambar", "seni"],
            ["membaca buku", "pengetahuan"]
          ],
          "urutKanan": ["seni", "pengetahuan", "olahraga"],
          "e": "Sepak bola → olahraga; menggambar → seni; membaca buku → pengetahuan."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan nama agama dengan tempat ibadahnya!",
          "pasangan": [
            ["Islam", "masjid"],
            ["Kristen", "gereja"],
            ["Hindu", "pura"]
          ],
          "urutKanan": ["pura", "gereja", "masjid"],
          "e": "Islam → masjid, Kristen → gereja, Hindu → pura. Kita menghormati semua agama."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan kata penting dengan artinya!",
          "pasangan": [
            ["berkenalan", "ingin saling tahu"],
            ["wawancara", "bertanya untuk mengenal lebih dekat"],
            ["karya", "hasil usaha yang kita lakukan"]
          ],
          "urutKanan": ["hasil usaha yang kita lakukan", "ingin saling tahu", "bertanya untuk mengenal lebih dekat"],
          "e": "Berkenalan = ingin saling tahu; wawancara = bertanya untuk mengenal lebih dekat; karya = hasil usaha."
        }
      ]
    }
  ]
});
