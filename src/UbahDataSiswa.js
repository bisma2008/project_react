import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UbahDataSiswa() {
  const [nama, setNama] = useState(""); // Menyimpan nama siswa
  const [kelas, setKelas] = useState(""); // Menyimpan kelas siswa
  const [kejuruan, setKejuruan] = useState(""); // Menyimpan kejuruan siswa
  const navigate = useNavigate(); // Untuk navigasi antar halaman
  const { id } = useParams(); // Mendapatkan id dari URL parameter

  // Mengambil data siswa dari server berdasarkan id
  useEffect(() => {
    axios
      .get(`http://localhost:3030/students/${id}`)
      .then((response) => {
        const student = response.data;
        setNama(student.nama);
        setKelas(student.kelas);
        setKejuruan(student.kejuruan);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error); // Menangani error saat mengambil data
      });
  }, [id]);

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { nama, kelas, kejuruan };

    // Mengirim data yang sudah diperbarui ke server
    axios
      .put(`http://localhost:3030/students/${id}`, updatedStudent)
      .then(() => {
        // Menampilkan alert jika data berhasil diperbarui
        Swal.fire({
          icon: "success",
          title: "Data berhasil diubah!",
          text: "Siswa data telah berhasil diperbarui.",
        }).then(() => {
          navigate("/DataSiswa"); // Kembali ke halaman daftar siswa setelah berhasil
        });
      })
      .catch((error) => {
        // Menampilkan alert jika terjadi kesalahan saat memperbarui data
        Swal.fire({
          icon: "error",
          title: "Gagal memperbarui data!",
          text: "Terjadi kesalahan saat memperbarui data siswa.",
        });
        console.error("Error updating student:", error); // Menangani error saat memperbarui data
      });
  };

  // Fungsi untuk membatalkan perubahan dan kembali ke halaman daftar siswa
  const handleCancel = () => {
    navigate("/DataSiswa"); // Arahkan kembali ke halaman daftar siswa
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Pastikan latar belakang mencakup seluruh tinggi viewport
        backgroundColor: "#f1f8e9",
        display: "flex", // Menggunakan flexbox untuk menyejajarkan konten
        justifyContent: "center", // Menyusun form di tengah secara horizontal
        alignItems: "center", // Menyusun form di tengah secara vertikal
        padding: 4,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          boxShadow: 4,
          borderRadius: 3,
          background: "linear-gradient(to bottom, #f1f8e9, #e8f5e9)", // Latar belakang gradien hijau matcha
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          color="#1c3879" // Warna biru gelap untuk judul
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Ubah Data Siswa
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Nama"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                  "& .MuiInputBase-root": {
                    color: "#1c3879", // Warna teks biru gelap
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Kelas"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                  "& .MuiInputBase-root": {
                    color: "#1c3879", // Warna teks biru gelap
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Kejuruan"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                value={kejuruan}
                onChange={(e) => setKejuruan(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                  "& .MuiInputBase-root": {
                    color: "#1c3879", // Warna teks biru gelap
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="outlined"
                color="error"
                onClick={handleCancel}
                sx={{
                  padding: "10px 20px",
                  borderRadius: 3,
                  boxShadow: 2,
                  "&:hover": {
                    backgroundColor: "#ffcccc", // Warna merah muda saat hover
                  },
                }}
              >
                Batal
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  padding: "10px 20px",
                  borderRadius: 3,
                  boxShadow: 2,
                  backgroundColor: "#1c3879", // Warna biru gelap untuk tombol simpan
                  "&:hover": {
                    backgroundColor: "#16356c", // Warna biru lebih gelap saat hover
                  },
                }}
              >
                Simpan Perubahan
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
