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
  "ikon": "🤝",
  "deskripsi": "Mengenal identitas diri dan teman, menghargai keberagaman agama, hobi, serta berkarya dengan percaya diri.",
  "versi": [
    {
      "kode": "A",
      "nama": "Variasi A",
      "soal": [
        {
          "tipe": "pg",
          "t": "Agar punya teman, kita harus berani ....",
          "p": [
            "mengejek",
            "diam saja",
            "berkenalan"
          ],
          "j": 2,
          "e": "Berkenalan artinya ingin saling tahu. Dengan berani berkenalan, kita mendapat teman baru."
        },
        {
          "tipe": "bs",
          "t": "Ada enam agama resmi di Indonesia.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Enam agama di Indonesia: Islam, Kristen, Katolik, Hindu, Budha, dan Konghucu → Benar."
        },
        {
          "tipe": "pg",
          "t": "Wawancara artinya .... kepada orang lain untuk mengenalnya lebih dekat.",
          "p": [            "menjauhi",
            "bertanya",
            "mengejek"
          ],
          "j": 1,
          "e": "Wawancara adalah bertanya kepada orang lain untuk mengenalnya lebih dekat."
        },
        {
          "tipe": "isian",
          "t": "Identitas diri adalah informasi tentang .... kita.",
          "p": [            "guru",
            "diri",
            "tetangga"
          ],
          "j": 1,
          "e": "Identitas diri adalah informasi tentang diri kita yang membedakan kita dengan orang lain."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan contoh hobi dengan bidangnya!",
          "pasangan": [
            [
              "bermain sepak bola",
              "olahraga"
            ],
            [
              "menggambar",
              "seni"
            ],
            [
              "membaca buku",
              "pengetahuan"
            ]
          ],
          "urutKanan": [
            "seni",
            "pengetahuan",
            "olahraga"
          ],
          "e": "Sepak bola → olahraga; menggambar → seni; membaca buku → pengetahuan."
        },
        {
          "tipe": "pg",
          "t": "Dari kegiatan yang kita sukai, kita bisa menghasilkan sebuah ....",
          "p": [
            "pertengkaran",
            "masalah",
            "karya"
          ],
          "j": 2,
          "e": "Karya adalah hasil usaha yang kita lakukan, misalnya gambar, lagu, atau benda."
        },
        {
          "tipe": "bs",
          "t": "Karya buatan teman boleh kita ejek supaya teman lebih semangat.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 1,
          "e": "Kita harus menghargai karya teman dan tidak boleh mengejek → Salah."
        },
        {
          "tipe": "isian",
          "t": "Tempat ibadah agama Islam adalah ....",
          "p": [
            "masjid",
            "gereja",
            "pura"
          ],
          "j": 0,
          "e": "Umat Islam beribadah di masjid. Gereja untuk Kristen/Katolik, pura untuk Hindu."
        },
        {
          "tipe": "pg",
          "t": "Contoh hobi di bidang seni adalah ....",
          "p": [
            "menggambar",
            "tidur seharian",
            "bermain saja"
          ],
          "j": 0,
          "e": "Hobi bidang seni antara lain menggambar, mewarnai, melipat kertas, bernyanyi, dan menari."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan nama agama dengan tempat ibadahnya!",
          "pasangan": [
            [
              "Islam",
              "masjid"
            ],
            [
              "Kristen",
              "gereja"
            ],
            [
              "Hindu",
              "pura"
            ]
          ],
          "urutKanan": [
            "pura",
            "gereja",
            "masjid"
          ],
          "e": "Islam → masjid, Kristen → gereja, Hindu → pura. Kita menghormati semua agama."
        },
        {
          "tipe": "bs",
          "t": "Hobi adalah kegemaran yang dilakukan saat waktu luang.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Pengertian hobi: kegemaran yang dilakukan saat waktu luang → Benar."
        },
        {
          "tipe": "pg",
          "t": "Membaca buku cerita termasuk hobi di bidang ....",
          "p": [
            "pengetahuan",
            "olahraga",
            "seni"
          ],
          "j": 0,
          "e": "Membaca buku cerita, menyusun balok, dan mengamati tumbuhan adalah hobi bidang pengetahuan."
        },
        {
          "tipe": "isian",
          "t": "Karya adalah hasil .... yang kita lakukan.",
          "p": [
            "usaha",
            "tidur",
            "marah"
          ],
          "j": 0,
          "e": "Karya adalah hasil usaha yang kita lakukan — misalnya membuat kartu nama atau papan nama meja."
        },
        {
          "tipe": "bs",
          "t": "Saat melakukan wawancara, sikap kita sebaiknya cemberut dan marah.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 1,
          "e": "Saat wawancara sikap kita sebaiknya ramah, menyampaikan pertanyaan dengan baik, dan tersenyum → Salah."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan kata penting dengan artinya!",
          "pasangan": [
            [
              "berkenalan",
              "ingin saling tahu"
            ],
            [
              "wawancara",
              "bertanya untuk mengenal lebih dekat"
            ],
            [
              "karya",
              "hasil usaha yang kita lakukan"
            ]
          ],
          "urutKanan": [
            "hasil usaha yang kita lakukan",
            "ingin saling tahu",
            "bertanya untuk mengenal lebih dekat"
          ],
          "e": "Berkenalan = ingin saling tahu; wawancara = bertanya untuk mengenal lebih dekat; karya = hasil usaha."
        }
      ]
    },
    {
      "kode": "B",
      "nama": "Variasi B",
      "soal": [
        {
          "tipe": "pg",
          "t": "Saat bertemu teman baru, kita sebaiknya ....",
          "p": [
            "menjauhi",
            "berteriak",
            "mengucapkan salam"
          ],
          "j": 2,
          "e": "Mengucapkan salam (halo, selamat pagi) membuat teman merasa disambut dengan baik."
        },
        {
          "tipe": "bs",
          "t": "Kita boleh mengejek teman yang berbeda agama.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 1,
          "e": "Kita harus menghargai teman yang berbeda agama → Salah."
        },
        {
          "tipe": "pg",
          "t": "Contoh hobi di bidang olahraga adalah ....",
          "p": [
            "menggambar",
            "bersepeda",
            "membaca"
          ],
          "j": 1,
          "e": "Bersepeda, berenang, dan berlari adalah hobi bidang olahraga."
        },
        {
          "tipe": "isian",
          "t": "Tempat ibadah agama Katolik adalah ....",
          "p": [
            "gereja",
            "masjid",
            "vihara"
          ],
          "j": 0,
          "e": "Umat Katolik beribadah di gereja."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan contoh hobi dengan bidangnya!",
          "pasangan": [
            [
              "berenang",
              "olahraga"
            ],
            [
              "mewarnai",
              "seni"
            ],
            [
              "bermain puzzle",
              "pengetahuan"
            ]
          ],
          "urutKanan": [
            "pengetahuan",
            "olahraga",
            "seni"
          ],
          "e": "Berenang → olahraga, mewarnai → seni, bermain puzzle → pengetahuan."
        },
        {
          "tipe": "pg",
          "t": "Menghargai karya teman berarti kita ....",
          "p": [
            "mengejek",
            "mengapresiasi",
            "merusak"
          ],
          "j": 1,
          "e": "Mengapresiasi artinya menghargai dan memberi pujian yang baik."
        },
        {
          "tipe": "bs",
          "t": "Hobi hanya boleh dilakukan saat sekolah.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 1,
          "e": "Hobi dilakukan saat waktu luang — sore hari atau hari libur → Salah."
        },
        {
          "tipe": "isian",
          "t": "Tempat ibadah agama Budha adalah ....",
          "p": [
            "pura",
            "gereja",
            "vihara"
          ],
          "j": 2,
          "e": "Umat Budha beribadah di vihara."
        },
        {
          "tipe": "pg",
          "t": "Contoh hobi di bidang pengetahuan adalah ....",
          "p": [
            "mengamati tumbuhan",
            "bermain kelereng",
            "menonton TV"
          ],
          "j": 0,
          "e": "Mengamati tumbuhan, membaca, dan bereksperimen adalah hobi bidang pengetahuan."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan nama agama dengan tempat ibadahnya!",
          "pasangan": [
            [
              "Katolik",
              "gereja"
            ],
            [
              "Budha",
              "vihara"
            ],
            [
              "Konghucu",
              "klenteng"
            ]
          ],
          "urutKanan": [
            "klenteng",
            "vihara",
            "gereja"
          ],
          "e": "Katolik → gereja, Budha → vihara, Konghucu → klenteng."
        },
        {
          "tipe": "bs",
          "t": "Saat wawancara kita harus bersikap ramah dan tersenyum.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Sikap ramah dan senyum membuat teman nyaman saat diwawancarai → Benar."
        },
        {
          "tipe": "pg",
          "t": "Membuat kartu nama dari kertas termasuk ....",
          "p": [
            "masalah",
            "pertengkaran",
            "karya"
          ],
          "j": 2,
          "e": "Kartu nama buatan sendiri adalah contoh karya."
        },
        {
          "tipe": "isian",
          "t": "Tempat ibadah agama Hindu adalah ....",
          "p": [
            "pura",
            "masjid",
            "klenteng"
          ],
          "j": 0,
          "e": "Umat Hindu beribadah di pura."
        },
        {
          "tipe": "bs",
          "t": "Teman yang berbeda hobi tetap bisa menjadi teman baik.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Hobi boleh berbeda-beda; kita tetap bisa berteman dan saling menghargai → Benar."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan kata dengan artinya!",
          "pasangan": [
            [
              "hobi",
              "kegemaran saat waktu luang"
            ],
            [
              "apresiasi",
              "menghargai hasil karya"
            ],
            [
              "salam",
              "sapaan yang baik"
            ]
          ],
          "urutKanan": [
            "sapaan yang baik",
            "kegemaran saat waktu luang",
            "menghargai hasil karya"
          ],
          "e": "Hobi = kegemaran saat waktu luang; apresiasi = menghargai hasil karya; salam = sapaan yang baik."
        }
      ]
    },
    {
      "kode": "C",
      "nama": "Variasi C",
      "soal": [
        {
          "tipe": "pg",
          "t": "Sebelum bertanya saat wawancara, kita sebaiknya ....",
          "p": [
            "minta izin dengan sopan",
            "mendorong teman",
            "berteriak"
          ],
          "j": 0,
          "e": "Minta izin dengan sopan membuat teman nyaman menjawab pertanyaan."
        },
        {
          "tipe": "bs",
          "t": "Enam agama resmi di Indonesia harus saling menghormati.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Semua agama di Indonesia harus saling menghormati → Benar."
        },
        {
          "tipe": "pg",
          "t": "Hobi berenang termasuk bidang ....",
          "p": [
            "olahraga",
            "seni",
            "pengetahuan"
          ],
          "j": 0,
          "e": "Berenang adalah hobi bidang olahraga."
        },
        {
          "tipe": "isian",
          "t": "Tempat ibadah agama Konghucu adalah ....",
          "p": [
            "masjid",
            "klenteng",
            "pura"
          ],
          "j": 1,
          "e": "Umat Konghucu beribadah di klenteng."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan kegiatan dengan bidang hobinya!",
          "pasangan": [
            [
              "melukis",
              "seni"
            ],
            [
              "berlari",
              "olahraga"
            ],
            [
              "membaca koran",
              "pengetahuan"
            ]
          ],
          "urutKanan": [
            "olahraga",
            "pengetahuan",
            "seni"
          ],
          "e": "Melukis → seni, berlari → olahraga, membaca koran → pengetahuan."
        },
        {
          "tipe": "pg",
          "t": "Kita bisa mengenal teman lebih dekat dengan cara ....",
          "p": [
            "menjauhi",
            "wawancara",
            "mengejek"
          ],
          "j": 1,
          "e": "Wawancara membantu kita mengenal teman lebih dekat."
        },
        {
          "tipe": "bs",
          "t": "Karya teman yang kurang bagus boleh kita permalukan.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 1,
          "e": "Kita harus menghargai semua karya teman dan memberi semangat → Salah."
        },
        {
          "tipe": "isian",
          "t": "Umat Kristen dan Katolik beribadah di ....",
          "p": [
            "masjid",
            "vihara",
            "gereja"
          ],
          "j": 2,
          "e": "Umat Kristen dan Katolik beribadah di gereja."
        },
        {
          "tipe": "pg",
          "t": "Contoh hobi di bidang seni adalah ....",
          "p": [
            "bersepeda",
            "berlari",
            "menari"
          ],
          "j": 2,
          "e": "Menari, bernyanyi, dan melukis adalah hobi bidang seni."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan sikap baik dengan contohnya!",
          "pasangan": [
            [
              "menghargai",
              "tidak mengejek karya teman"
            ],
            [
              "ramah",
              "senyum saat berkenalan"
            ],
            [
              "rukun",
              "berteman dengan semua agama"
            ]
          ],
          "urutKanan": [
            "senyum saat berkenalan",
            "berteman dengan semua agama",
            "tidak mengejek karya teman"
          ],
          "e": "Menghargai → tidak mengejek karya; ramah → senyum saat berkenalan; rukun → berteman dengan semua agama."
        },
        {
          "tipe": "bs",
          "t": "Hobi yang kita sukai bisa menghasilkan karya yang indah.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Dari hobi menggambar bisa lahir karya lukisan yang indah → Benar."
        },
        {
          "tipe": "pg",
          "t": "Saat teman bercerita, sikap kita sebaiknya ....",
          "p": [
            "mengganggu",
            "mendengarkan dengan baik",
            "mengabaikan"
          ],
          "j": 1,
          "e": "Mendengarkan teman bercerita menunjukkan sikap menghargai."
        },
        {
          "tipe": "isian",
          "t": "Saat wawancara, kita bertanya dengan sikap yang ....",
          "p": [
            "sopan",
            "kasar",
            "cemberut"
          ],
          "j": 0,
          "e": "Saat wawancara kita bertanya dengan sikap sopan dan ramah."
        },
        {
          "tipe": "bs",
          "t": "Berkenalan dengan teman baru membuat kita punya lebih banyak teman.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Berani berkenalan membuat kita mendapat teman baru → Benar."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan istilah dengan artinya!",
          "pasangan": [
            [
              "identitas",
              "informasi tentang diri kita"
            ],
            [
              "keberagaman",
              "banyak perbedaan"
            ],
            [
              "persatuan",
              "keadaan bersatu"
            ]
          ],
          "urutKanan": [
            "keadaan bersatu",
            "informasi tentang diri kita",
            "banyak perbedaan"
          ],
          "e": "Identitas = informasi tentang diri kita; keberagaman = banyak perbedaan; persatuan = keadaan bersatu."
        }
      ]
    },
    {
      "kode": "D",
      "nama": "Variasi D",
      "soal": [
        {
          "tipe": "pg",
          "t": "Saat teman berhasil membuat karya, kita sebaiknya ....",
          "p": [
            "memberi pujian",
            "mengejek",
            "merusak"
          ],
          "j": 0,
          "e": "Memberi pujian yang tulus membuat teman semangat berkarya."
        },
        {
          "tipe": "bs",
          "t": "Kita boleh memilih-milih teman berdasarkan agamanya.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 1,
          "e": "Kita boleh berteman dengan siapa saja tanpa memandang agama → Salah."
        },
        {
          "tipe": "pg",
          "t": "Menyusun balok termasuk hobi bidang ....",
          "p": [
            "pengetahuan",
            "olahraga",
            "seni"
          ],
          "j": 0,
          "e": "Menyusun balok, membaca, dan mengamati benda adalah hobi bidang pengetahuan."
        },
        {
          "tipe": "isian",
          "t": "Teman yang berbeda agama tetap kita ....",
          "p": [
            "jauhi",
            "hormati",
            "ejek"
          ],
          "j": 1,
          "e": "Teman yang berbeda agama tetap kita hormati dan sayangi."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan hobi dengan kelompoknya!",
          "pasangan": [
            [
              "bermain bulu tangkis",
              "olahraga"
            ],
            [
              "melipat kertas",
              "seni"
            ],
            [
              "mengamati bintang",
              "pengetahuan"
            ]
          ],
          "urutKanan": [
            "seni",
            "pengetahuan",
            "olahraga"
          ],
          "e": "Bulu tangkis → olahraga, melipat kertas → seni, mengamati bintang → pengetahuan."
        },
        {
          "tipe": "pg",
          "t": "Wawancara dengan teman bisa dimulai dengan menanyakan ....",
          "p": [
            "rahasia",
            "nama dan hobi",
            "utang"
          ],
          "j": 1,
          "e": "Pertanyaan wawancara yang baik: nama, hobi, dan kesukaan teman."
        },
        {
          "tipe": "bs",
          "t": "Semua agama mengajarkan kebaikan.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Semua agama mengajarkan kebaikan dan saling menghormati → Benar."
        },
        {
          "tipe": "isian",
          "t": "Perbedaan agama membuat Indonesia semakin ....",
          "p": [
            "sedih",
            "marah",
            "beragam dan indah"
          ],
          "j": 2,
          "e": "Perbedaan agama membuat Indonesia beragam dan indah."
        },
        {
          "tipe": "pg",
          "t": "Bernyanyi termasuk hobi bidang ....",
          "p": [
            "olahraga",
            "seni",
            "pengetahuan"
          ],
          "j": 1,
          "e": "Bernyanyi, menari, dan melukis adalah hobi bidang seni."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan perilaku baik dengan akibatnya!",
          "pasangan": [
            [
              "menolong teman",
              "teman merasa tertolong"
            ],
            [
              "berbagi makanan",
              "teman merasa diperhatikan"
            ],
            [
              "menepati janji",
              "teman mempercayai kita"
            ]
          ],
          "urutKanan": [
            "teman mempercayai kita",
            "teman merasa tertolong",
            "teman merasa diperhatikan"
          ],
          "e": "Menolong → teman tertolong; berbagi → teman diperhatikan; menepati janji → teman percaya."
        },
        {
          "tipe": "bs",
          "t": "Saat menerima karya dari teman, kita sebaiknya mengucapkan terima kasih.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Mengucapkan terima kasih adalah sikap menghargai karya teman → Benar."
        },
        {
          "tipe": "pg",
          "t": "Karya buatan sendiri membuat kita merasa ....",
          "p": [
            "malu",
            "sedih",
            "bangga"
          ],
          "j": 2,
          "e": "Berhasil membuat karya sendiri membuat kita bangga dan percaya diri."
        },
        {
          "tipe": "isian",
          "t": "Kita boleh berteman dengan ....",
          "p": [
            "siapa saja",
            "satu orang saja",
            "tidak boleh"
          ],
          "j": 0,
          "e": "Kita boleh berteman dengan siapa saja tanpa memandang agama."
        },
        {
          "tipe": "bs",
          "t": "Menghargai perbedaan agama membuat persatuan semakin kuat.",
          "p": [
            "Benar",
            "Salah"
          ],
          "j": 0,
          "e": "Menghargai perbedaan agama membuat kita bersatu dan rukun → Benar."
        },
        {
          "tipe": "cocok",
          "t": "Pasangkan sikap terpuji dengan contohnya!",
          "pasangan": [
            [
              "jujur",
              "mengakui kesalahan sendiri"
            ],
            [
              "tepat waktu",
              "datang sebelum bel masuk"
            ],
            [
              "peduli",
              "menolong teman yang sedang kesulitan"
            ]
          ],
          "urutKanan": [
            "datang sebelum bel masuk",
            "mengakui kesalahan sendiri",
            "menolong teman yang sedang kesulitan"
          ],
          "e": "Jujur → mengakui kesalahan; tepat waktu → datang sebelum bel; peduli → menolong teman."
        }
      ]
    }
  ]
});
