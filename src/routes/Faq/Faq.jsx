import React from 'react';
import './Faq.scss';

const Faq = () => {
  return (
    <div className="container">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <p>
        <h5>Website apa ini? Dan apa fungsinya?</h5>
        Website ini adalah sebuah Single Page Application (SPA) menggunakan ReactJS, yang berfungsi untuk generate
        4-6 digit angka secara acak untuk dapat diakses melalui website nHentai.
      </p>
      <p>
        <h5>nHentai itu website apa?</h5>
        nHentai adalah sebuah website menyedia layanan untuk membaca komik doujin yang rata-rata bertema vulgar alias
        konten dewasa diatas 18 tahun ke atas.
      </p>
      <p>
        <h5>nHentai sendiri kan punya fitur Random, lantas kenapa web ini ada?</h5>
        Fitur Random nHentai tergolong lebih lambat loadingnya karena harus load gambar terlebih dahulu, sedangkan
        website ini hanya generate angka saja. Yang kebetulan angka tersebut dapat diakses juga melalui website nHentai.
      </p>
      <p>
        <h5>Muncul pesan "Preview Not Available" setelah saya generate code. Mengapa bisa terjadi?</h5>
        1. Pastikan VPN kamu dinyalakan. Karena kami mendapatkan informasi doujinmu dari meta nHentai secara
        langsung <br/>
        2. Cek juga koneksi internet
      </p>

      <p>Laman FAQ ini sedang dalam tahap perkembangan. Apabila kalian memiliki pertanyaan, silahkan tanyakan melalui
        Issue repository di sini: <a href="https://github.com/mirukusheki/nhentai-generator/issues">
          https://github.com/mirukusheki/nhentai-generator/issues
        </a>
      </p>
    </div>
  );
};

export default Faq;
