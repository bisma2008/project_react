import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Mengimpor komponen untuk routing
import Home from "./Home";
// import Datadiri from "./Datadiri";

import TambahData from "./TambahData";
import UbahData from "./UbahData";
import DataGuru from "./DataGuru";
import DataSiswa from "./DataSiswa";
import TambahDataSiswa from "./TambahDataSiswa";
import UbahDataSiswa from "./UbahDataSiswa";
function App() {
  return (
    <div className="App">
      {" "}
      {/* Membungkus seluruh konten aplikasi dalam elemen div */}
      <Routes>
        {" "}
        {/* Membuat rute (route) untuk navigasi */}
        {/* Jika pengguna mengunjungi root path ('/'), maka akan diarahkan ke '/DataDiri' */}
        {/* <Route path="/" element={<Navigate to="/Minuman" />} /> */}
        <Route path="/" element={<Navigate to="/Home" />} />
        {/* <Route path="/" element={<Navigate to="/Dashboard" />} /> */}
        {/* Jika pengguna mengunjungi '/DataDiri', tampilkan komponen DataDiri */}
        {/* <Route path="/Home" element={<Home />} /> */}
        {/* <Route path="/Datadiri" element={<Datadiri />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/TambahData" element={<TambahData />} />
        <Route path="/UbahData/:id" element={<UbahData />} />
        <Route path="/DataGuru" element={<DataGuru />} />
        <Route path="/DataSiswa" element={<DataSiswa />} />
        <Route path="/UbahDataSiswa/:id" element={<UbahDataSiswa />} />
        <Route path="/TambahDataSiswa" element={<TambahDataSiswa />} />
        {/* <Route path="/tambah" element={<Tambah />} /> */}
      </Routes>
    </div>
  );
}

export default App; // Mengekspor komponen App agar bisa digunakan di tempat lain
