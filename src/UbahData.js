// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Swal from "sweetalert2";

// export default function EditFood() {
//   const { id } = useParams(); // Get ID from URL
//   const navigate = useNavigate(); // Navigation hook
//   const [food, setFood] = useState({ guru: "", mapel: "", gender: "" }); // State for food data

//   useEffect(() => {
//     fetchFoodDetails();
//   }, []);

//   // Fetch food details by ID
//   const fetchFoodDetails = () => {
//     axios
//       .get(`http://localhost:3030/foods/${id}`)
//       .then((response) => {
//         setFood(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching food details:", error);
//         Swal.fire("Error", "Gagal memuat data makanan!", "error");
//       });
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFood((prevFood) => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:3030/foods/${id}`, food)
//       .then(() => {
//         Swal.fire("Berhasil", "Data berhasil diperbarui!", "success");
//         navigate("/DataGuru"); // Navigate back to dashboard
//       })
//       .catch((error) => {
//         console.error("Error updating food:", error);
//         Swal.fire("Error", "Gagal memperbarui data!", "error");
//       });
//   };

//   return (
//     <Paper style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
//       <h2>Edit Data</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Nama Guru"
//           name="makanan"
//           value={food.makanan}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           label="mapel"
//           name="mapel"
//           value={food.harga}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           label="gender"
//           name="gender"
//           value={food.gender}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "20px",
//           }}
//         >
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => navigate("/Home")}
//           >
//             Batal
//           </Button>
//           <Button type="submit" variant="contained" color="primary">
//             Simpan Perubahan
//           </Button>
//         </div>
//       </form>
//     </Paper>
//   );
// }
// s;
