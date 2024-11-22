import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

export default function UbahData() {
  const { id } = useParams(); // Mengambil ID dari URL parameter
  const navigate = useNavigate(); // Menggunakan hook navigate untuk berpindah halaman
  const [food, setFood] = useState({ guru: "", mapel: "", gender: "" }); // State untuk menyimpan data form

  useEffect(() => {
    // Memanggil API untuk mendapatkan data berdasarkan ID
    axios
      .get(`http://localhost:3030/foods/${id}`)
      .then((response) => {
        setFood(response.data); // Menyimpan data ke dalam state food
      })
      .catch((error) => {
        console.error("Error fetching food details:", error);
        Swal.fire("Error", "Gagal memuat data!", "error"); // Menampilkan pesan error jika gagal mengambil data
      });
  }, [id]); // useEffect akan dipanggil ketika ID berubah

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value, // Mengupdate nilai input sesuai dengan nama dan value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    // Memeriksa apakah semua field sudah diisi
    if (!food.guru || !food.mapel || !food.gender) {
      Swal.fire("Error", "Semua field harus diisi!", "error"); // Menampilkan pesan error jika ada field yang kosong
      return;
    }

    // Mengirim data yang telah diperbarui ke server
    axios
      .put(`http://localhost:3030/foods/${id}`, food)
      .then(() => {
        Swal.fire("Berhasil", "Data berhasil diperbarui!", "success"); // Menampilkan pesan sukses jika berhasil memperbarui data
        navigate("/DataGuru"); // Menavigasi kembali ke halaman DataGuru setelah berhasil
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        Swal.fire("Error", "Gagal memperbarui data!", "error"); // Menampilkan pesan error jika gagal memperbarui data
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#607ABD", // Background biru
        height: "100vh", // Memastikan tinggi halaman penuh
        display: "flex",
        justifyContent: "center", // Mengatur agar form berada di tengah secara horizontal
        alignItems: "center", // Mengatur agar form berada di tengah secara vertikal
        padding: "20px",
      }}
    >
      <Paper
        style={{
          padding: "30px",
          maxWidth: "600px",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f1f8e9", // Background terang untuk komponen Paper
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1c3879", // Warna gelap biru untuk judul
          }}
        >
          Ubah Data
        </h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Guru"
            name="guru"
            value={food.guru}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            variant="outlined"
            style={{
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#f1f8e9", // Background terang untuk input
              color: "#1c3879", // Warna teks gelap biru untuk input
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            InputLabelProps={{
              style: { color: "#1c3879" }, // Warna label input
            }}
            InputProps={{
              style: { color: "#1c3879" }, // Warna teks input
            }}
          />
          <TextField
            label="Mapel"
            name="mapel"
            value={food.mapel}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            variant="outlined"
            style={{
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#f1f8e9", // Background terang untuk input
              color: "#1c3879", // Warna teks gelap biru untuk input
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            InputLabelProps={{
              style: { color: "#1c3879" }, // Warna label input
            }}
            InputProps={{
              style: { color: "#1c3879" }, // Warna teks input
            }}
          />
          <TextField
            label="Gender"
            name="gender"
            value={food.gender}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            variant="outlined"
            style={{
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#f1f8e9", // Background terang untuk input
              color: "#1c3879", // Warna teks gelap biru untuk input
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            InputLabelProps={{
              style: { color: "#1c3879" }, // Warna label input
            }}
            InputProps={{
              style: { color: "#1c3879" }, // Warna teks input
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/DataGuru")}
              style={{
                backgroundColor: "#b0bec5", // Warna abu-abu terang untuk tombol batal
                padding: "10px 20px",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#90a4ae")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#b0bec5")}
            >
              Batal
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#1c3879", // Warna biru gelap untuk tombol simpan
                padding: "10px 20px",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#16356c")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1c3879")}
            >
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
