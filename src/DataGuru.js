import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit"; // Import Edit icon
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import SideBar from "./componet/SideBar";
// Sidebar width (match with the Navbar's sidebar width)
const drawerWidth = 240;

// Styling for table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Styling for table rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataGuru() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = () => {
    axios
      .get("http://localhost:3030/foods")
      .then((response) => {
        console.log("Data fetched:", response.data); // Debugging log
        setFoods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Item ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3030/foods/${id}`)
          .then(() => {
            setFoods(foods.filter((food) => food.id !== id));
            Swal.fire("Dihapus!", "Item telah dihapus.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data", error);
            Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus.", "error");
          });
      }
    });
  };

  const handleAddFood = () => {
    navigate("/TambahData");
  };

  const handleEdit = (id) => {
    navigate(`/UbahData/${id}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Tambahkan komponen SidBar jika ada */}
      <SideBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { sm: `${drawerWidth}px` }, // Sesuaikan jarak untuk sidebar
          p: 10,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          position: "relative", // Tambahkan ini jika perlu
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddFood}
          sx={{ marginBottom: 2 }}
        >
          Tambah Data Guru
        </Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>NO</StyledTableCell>
                <StyledTableCell align="left">GURU</StyledTableCell>
                <StyledTableCell align="right">MAPEL</StyledTableCell>
                <StyledTableCell align="center">GENDER</StyledTableCell>
                <StyledTableCell align="center">AKSI</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {foods.map((food, index) => (
                <StyledTableRow key={food.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">{food.guru}</StyledTableCell>
                  <StyledTableCell align="right">{food.mapel}</StyledTableCell>
                  <StyledTableCell align="center">
                    {food.gender}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => handleEdit(food.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(food.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
