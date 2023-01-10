const configData = {
	creator: {
		/* 
			jangan hapus dan edit data creator
		*/

		name: "Erik Sanjaya",
		whatsapp: "https://wa.me/6289517000409",
		website: "https://eriksanjaya.com",
		youtube: "https://www.youtube.com/channel/UC1jSKHbhMg3JDZ-vFcXHTjQ"

		/*
			dilarang membajak template.
		*/
	},

	/* jangan hapus dan edit data creator di atas ya. */

	/*
		Panduan lihat di sini:
		https://eriksanjaya.com/hotspot-7/guide.html

		Tema lihat di sini:
		https://eriksanjaya.com/hotspot-7/theme.html

	*/

	/* Template Hotspot 7 */

	/* jangan menghapus PETIK DUA dan KOMA */

	lisensi: "GANTI_INI_DG_LISENSI", /* PETIK DUA JANGAN DIENTER KE BAWAH */

	/* 
		status: 1 ( artinya aktif )
		status: 0 ( tidak aktif )
	*/
	
	/* 
		kami hanya menyediakan
		ganti warna :
			background: "#453C67",
			color: '#f6f7f8',
			bgOpacity: "rgba(0, 0, 0, 0.6)",
			button: [
				"#f472b6",
				"#fb7185"
			],
			
			dan
		
			form_input

		jangan tanya cara ganti warna selain itu, gak ada fiturnya.

		kode warna ambil di sini:
			https://colorhunt.co/
	*/

	/* STYLE */

	background: [
		"#424874",
		"#424874",
	],

	color: '#f6f7f8', /* warna teks body */
	
	bgOpacity: "rgba(0, 0, 0, 0.2)", /* cukup ubah bagian akhir, 0.1 sampai 0.9 */
	
	button: [
		"#f472b6",
		"#fb7185"
	],

	form_input: {
		/*
			contoh rgba
				background: rgba(255, 255, 255, 0.1)

			contoh hexa
				background: '#f6f7f8'
		*/
		background: 'rgba(255, 255, 255, 0.1)',
		color: '#f6f7f8' /* warna teks form */
	},
	
	/* END STYLE */


	wifi_logo: {
		status: 0, /* 0 atau 1, ubah 1 untuk pakai logo sendiri */
		url: "./public/img/logo.png", /* copy logo kamu ke folder public/img */
		width: 	'24', /* 1-12, 14, 16, 20, 24, 26, 28, 32, full */
		height: '24', /* 1-12, 14, 16, 20, 24, 26, 28, 32, full */
		align: 'left', /* left, center */
	},

	wifi: {
		status: 1, /* 0 atau 1 */
		nama: "Meta Hotspot",
		slogan: "Internet Cepat, Unlimited.",
	},

	kontak: {
		deskripsi: `<strong>Meta Hotspot</strong> adalah perusahaan yang bergerak di bidang Internet Service Provider dan IT Solution di Bandung.`,
		hp: "0895-xxxx-xxxx", /* cukup kosongkan jika tidak ingin ditampilakn */
		email: "halo@meta.net", /* cukup kosongkan jika tidak ingin ditampilakn */
		alamat: "Kp. Cimuncang Rt 13 / Rw 01, Kontrakan No. 8", /* cukup kosongkan jika tidak ingin ditampilakn */
	},

	prayTimes: { /* sesuaikan waktu sholat */
		/*
			Dapatkan Latitude dan Longitude di sini.
			https://eriksanjaya.com/app/koordinat.html

			jika muncul pop up, klik Allow

			aktifkan GPS terlebih dahulu, jika via smartphone.
		*/
		
		latitude: -6.9238784,
		longitude: 107.6166656,
		gmt: 7, /* wib = 7, wita = 8, wit = 9 */
		hijriahNama: 1, /* 0 atau 1 */
		hijriahTambah: -1, /* menambah atau mengurangi tanggal hijriah, cth. -2 (mengurangi tgl hijriah sekarang dengan 2) */
		method: "Egypt", /* MWL, ISNA, MF, Egypt, Makkah, Karachi, Tehran, Jafari, JAKIM */
		adjust: { // menyesuaikan jadwal sholat (tambah / kurangi)
			subuh: -1,
			dzuhur: 1,
			ashar: 1,
			maghrib: 2,
			isya: 3,
		},
	},

	countdown_ramadhan: {
		text_days: 'Hari',
		text_hours: 'Jam',
		text_minutes: 'Menit',
		text_seconds: 'Detik',
		text_to_ramadhan: 'lagi menuju Ramadhan',
		text_ramadhan_month: 'Marhaban Ya Ramadhan',
	},

	fitur: { /* 0 atau 1 ( aktif dan non aktifkan fitur ) */
		header: 1, /* logo, nama wifi & slogan */
		tgl_masehi: 1,
		tgl_hijriah: 1,
		countdown_ramadhan: 1,
		jam: 1,
		jadwal_sholat: 1,
		slide: 1,
		trial: 1, /* login trial */
		login_qrcode: 1, /* login via qrcode */
		paket: 1, /* paket internet */
		produk: 1, /* produk slide di halaman login / home */
	},

	menu: {
		status: 1, /* 0 atau 1 */
		data: [
			{
				icon: './public/icon/home.svg',
				nama: 'Home',
				link: 'login',
				status: 1, /* 0 atau 1 */
			},
			{
				icon: './public/icon/info.svg',
				nama: 'Info',
				link: 'info',
				status: 1, /* 0 atau 1 */
			},
			{
				icon: './public/icon/produk.svg',
				nama: 'Produk',
				link: 'produk',
				status: 1, /* 0 atau 1 - non aktikan menu produk jadikan 0 */
			},
			{
				icon: './public/icon/card.svg',
				nama: 'Bayar',
				link: 'bayar',
				status: 1, /* 0 atau 1 */
			},
			{
				icon: './public/icon/user-circle.svg',
				nama: 'Kontak',
				link: 'kontak',
				status: 1, /* 0 atau 1 */
			}
		]
	},

	label: { /* ubah nama label */
		produk: "yuk order",
		produk_lihat: "lihat semua",
		kembali: "Kembali",
		info: 'informasi',
		kontak: 'kontak',
		paket: 'paket',
		login_as: 'Login',
		login: 'Masuk',
		logout: 'Keluar',
		free_trial: 'Trial',
		login_qrcode: 'Login Qrcode',
		pembayaran: 'Pembayaran',
	},

	slide: {
		delay: 5000, /* 5000 = 5 detik, satuan millisecond */
		control: 0, /* 0 atau 1 - jadikan 1 untuk menampilkan control slides*/
		data: [
			/*
				contoh jika pakai gambar sendiri.
				copy gambar kamu ke folder public/img/namafile.png

				penulisan file url jadi seperti ini:

				file: "./public/img/namafile.png",
			*/
			
			{
				file: "./public/img/musim-hujan-1.png"
			},
			{
				file: "./public/img/musim-hujan-1.png"
			},
		]
	},

	/*
		default: 0 (artinya form login voucer yang muncul pertama kali)
		default: 1 (artinya form login member yang muncul pertama kali)

		option: 1 ( ada pilihan opsi login, voucher atau member )

		value: "default" (artinya teks mengikuti keyboard)
		value: "toUpperCase" (teks huruf besar semua)
		value: "toLowerCase" (teks huruf kecil semua)
	*/
	login: {
		default: 0, /* 0 = voucher atau 1 = member */
		option: 1, /* 0  atau 1 */
		voucher: {
			value: "default", /* default / toUpperCase / toLowerCase */
		},
		member: {
			value: "default", /* default / toUpperCase / toLowerCase */
		}
	},

	paket: {
		kolom: 2, /* 1, 2, 3, 4 */
		data: [ /* kode warna ambil di sini https://colorhunt.co */
			{
				waktu: "1 Jam",
				harga: "Rp2000",
				warna: "#3b82f6",
			},
			{
				waktu: "3 Jam",
				harga: "Rp3000",
				warna: "#facc15",
			},
			{
				waktu: "1 Hari",
				harga: "Rp5000",
				warna: "#10b981",
			},
			{
				waktu: "7 Hari",
				harga: "Rp15.000",
				warna: "#ef4444",
			},
		],
	},

	info: {
		data: [
			{
				foto: "./public/icon/user-circle.svg",
				nama: "Admin",
				waktu: "12 Juli 2022 10:27",
				konten: `Yuk Order, kami juga menyediakan makanan dan minuman.`,
			},
			{
				foto: "./public/icon/user-circle.svg",
				nama: "Admin",
				waktu: "10 Juli 2022 09:21",
				konten: 
				`Selamat Hari Raya Idul Adha 1443H

				تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
				`,
			},
		],
	},

	produk: {
		pemesanan: { // ganti no wa di bawah
			status: 1, /* 0 atau 1 - untuk non aktifkan tombol order jadikan 0 */
			label: 'Order Lewat Sini',
			link: `https://wa.me/628950000000?text=Halo%2C+mau+pesan+dong.`,
		},
		kolom: 2, /* 1, 2, 3*/
        slide: 6, /* idealnya 1 sampai 6 - di halaman home, paling bawah */
        data: [ /* nama file produk jangan dispasi, cth. mie-goreng.png */
			/*
				contoh jika pakai gambar sendiri.
				copy gambar kamu ke folder public/img/namafile.png

				penulisan image url jadi seperti ini:

				image: "./public/img/namafile.png",
			*/
			
			{
				image: "./public/img/galon.png",
				nama: "Aqua",
				harga: "Rp13.000",
			},
			{
				image: "./public/img/lpg.png",
				nama: "Lpg 3Kg",
				harga: "Rp27.000",
			},
			{
				image: "./public/img/lpg-5.png",
				nama: "Lpg 5Kg",
				harga: "Rp75.000",
			},
        ]
    },

	scan: {
		kolom: 1, /* 1, 2, 3 */
		data: [
			/*
				contoh jika pakai gambar sendiri.
				copy gambar kamu ke folder public/img/namafile.png

				penulisan image url jadi seperti ini:

				image: "./public/img/namafile.png",
			*/

			{				
				image: "./public/img/qris-bca.jpg",
				nama: "QRIS BCA",
			},
		],
	},

	expired_user: {
		/*
			ingin menampilkan expired user Mikhmon di status.html ?
			ubah status jadi 1
		*/

		status: 0, /* 0 atau 1 */
		session_name: `namasesi`, /* Session Name dapat dilihat di Session Settings (Settings->Session Settings). */
		url: `http://192.168.1.10/status/status.php?name=`, /* sesuaikan dengan ip mikhmon kamu */

		/*
			cukup 3 di atas yang diubah, seharusnya sudah muncul expired usernya.
			kalau gak muncul, jangan tanya saya.
			saya hanya nyediain FITUR.

			baca di sini :
			https://laksa19.github.io/?mikhmon/v3/tutorial

			Menampilkan Expired User di Laman Status Hotspot (status.html).
			- Server Mikhmon harus dalam keadaan aktif.
			- Perhatikan protocol yang digunakan https / http.
			- Untuk server local yang menggunakan PC atau Android biasanya menggunakan protocol http.
		*/

		background: 1,
		/* 
			kenapa background di isi 1,
			karena teks expired bawaan Mikhmon nya hitam,
			
			kalau gak mau pake background jadiin 0 aja,

			edit file status/status.php di Mikhmon kamu,

			tambahkan style color: #e2e8f0;

			jangan tanya saya, file status.php nya di mana?
			saya gak tahu, bukan saya yang pasang.

			cukup tambahkan style color: #e2e8f0;
			
			contoh:

			body {
				font-family: "Helvetica", arial, sans-serif;
				font-size: 15px;
				margin:0px;
				color: #e2e8f0;
			}
		
		*/
	},
}
