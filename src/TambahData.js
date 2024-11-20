import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import axios from "axios";

export default function Tambah() {
  const [formData, setFormData] = useState({
    guru: "",
    mapel: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.makanan || !formData.harga) {
      Swal.fire("Error!", "Semua kolom harus diisi!", "error");
      return;
    }

    if (isNaN(formData.harga) || formData.harga <= 0) {
      Swal.fire(
        "Error!",
        "Harga harus berupa angka yang valid dan lebih besar dari 0!",
        "error"
      );
      return;
    }

    axios
      .post("http://localhost:3030/foods", formData)
      .then(() => {
        Swal.fire("Berhasil!", "Data berhasil ditambahkan.", "success");
        navigate("/Dashboard");
      })
      .catch((error) => {
        Swal.fire(
          "Gagal!",
          "Terjadi kesalahan saat menambahkan data.",
          "error"
        );
        console.error("Error adding data:", error);
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/tambah")}
        style={{ margin: "20px" }}
      >
        Tambah
      </Button>

      <Paper
        elevation={3}
        style={{
          maxWidth: 600,
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>Tambah Data</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="guru"
              name="guru"
              value={formData.guru}
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="mapel"
              name="mapel"
              value={formData.mapel}
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Simpan
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginLeft: "10px" }}
            onClick={() => navigate("/DataGuru")}
          >
            Batal
          </Button>
        </form>
      </Paper>
    </div>
  );
}
