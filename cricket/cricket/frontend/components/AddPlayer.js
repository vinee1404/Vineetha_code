import React, { useState } from "react";
import { addPlayer } from "../services/PlayerService";
import { useNavigate } from "react-router-dom";

function AddPlayer() {
  const [jerseyError, setJerseyError] = useState("");

  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    playerId: "",
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    country: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  const { name, value } = e.target;

  
  if (name === "jerseyNumber") {
    if (value < 1 || value > 99) {
      setJerseyError("Jersey number must be between 1 and 99");
    } else {
      setJerseyError("");
    }
  }

  setPlayer({ ...player, [name]: value });
};

  const handleSubmit = (e) => {
  e.preventDefault();
  if (jerseyError) {
    alert("Please fix jersey number ");
    return;
  }

  addPlayer(player)
    .then(() => navigate("/"))
    .catch(err => {
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        alert("Server error ");
        console.log(err);
      }
    });
};

  return (
    <div className="container">
      <h2 style={{ color: "#34495e", marginBottom: "20px" }}>
  Add Player
</h2>

      <form onSubmit={handleSubmit}>

        <input name="playerId" placeholder="ID"
          onChange={handleChange} className="form-control mb-2" />

        <input name="playerName" placeholder="Name"
          onChange={handleChange} className="form-control mb-2" />

    <input
  name="jerseyNumber"
  type="number"
  placeholder="Enter Jersey Number"
  value={player.jerseyNumber}
  onChange={handleChange}
  className="form-control mb-2"
/>
{jerseyError && (
  <p style={{ color: "red" }}>{jerseyError}</p>
)}

        {}
        <select name="role"
          onChange={handleChange} className="form-control mb-2">
          <option>Select Role</option>
          <option>Batsman</option>
          <option>Bowler</option>
          <option>Keeper</option>
          <option>All Rounder</option>
        </select>

        <input name="totalMatches" placeholder="Matches"
          onChange={handleChange} className="form-control mb-2" />

       
        <div className="mb-3">
  <label style={{ fontWeight: "bold" }}>Select Team:</label>

  <div>
    <input
      type="radio"
      name="teamName"
      value="RCB"
      onChange={handleChange}
    /> RCB

    <input
      type="radio"
      name="teamName"
      value="CSK"
      onChange={handleChange}
      style={{ marginLeft: "15px" }}
    /> CSK

    <input
      type="radio"
      name="teamName"
      value="MI"
      onChange={handleChange}
      style={{ marginLeft: "15px" }}
    /> MI
  </div>
</div>

        {errors.teamName && <p className="text-danger">{errors.teamName}</p>}

        <input name="country" placeholder="Country"
          onChange={handleChange} className="form-control mb-2" />

        <textarea
          name="description"
          placeholder="Enter Description"
          onChange={handleChange}
          className="form-control mb-3"
        />

       <button
  className="btn"
  style={{
    backgroundColor: "#2980b9",
    color: "white",
    width: "100%",
    padding: "10px",
    borderRadius: "8px"
  }}
>
  Save Player
</button>
      </form>
    </div>
  );
}

export default AddPlayer;