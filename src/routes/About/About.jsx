import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About This Website</h1>
        <p>
          Nhentai Generator adalah sebuah website single page application yang
          bertujuan untuk me-generate enam digit angka secara acak) untuk
          website nHentai, website doujin pemuas hasrat anda. Kamu hanya perlu
          klik tombol "Generate Number" dan website ini akan menyediakan kamu
          nomor ID doujin nHentai sekaligus menyediakan link agar dapat langsung
          diakses ke nomor ID tersebut.
        </p>
        <p>
          Program ini dibuat oleh Miruku Sheki, mengunakan framework ReactJS
          Dapat diakses melalui HP dan PC
        </p>
        <p>
          <b>
            WARNING MATURE CONTENT! Mengandung muatan konten negatif! Dilarang
            keras mengakses website ini jika anda belum berumur 18 tahun keatas!
          </b>
        </p>
        <p>
          Menemukan bug? Atau ingin menambahkan saran lainnya? Silahkan open
          issue di repository ini: <br />
          <a href="https://github.com/mirukusheki/nhentai-generator/issues">
            https://github.com/mirukusheki/nhentai-generator/issues
          </a>
        </p>
        <p>
          Repository <br />
          <a href="https://github.com/mirukusheki/nhentai-generator">
            https://github.com/mirukusheki/nhentai-generator
          </a>
        </p>
        <br />
        <p>Laman lain yang dibuat oleh MirukuSheki:</p>
        <ul>
          <li>
            <a href="https://mirukusheki.github.io/tempo-doeloe">
              Tempo Doeloe Converter
            </a>
          </li>
          <li>
            <a href="https://mirukusheki.github.io/ashiyaap">Ashiyaap.exe</a>
          </li>
          <li>
            <a href="https://mirukusheki.github.io/aqourslivetour">
              Aqours Live Tour
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
