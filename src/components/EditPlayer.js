import React, { useEffect, useState } from "react";
import { getPlayer, updatePlayer } from "../services/PlayerService";
import { useParams, useNavigate } from "react-router-dom";

function EditPlayer() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState({});

  useEffect(() => {
    getPlayer(id).then(res => setPlayer(res.data));
  }, [id]);

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePlayer(id, player)
      .then(() => navigate("/"));
  };

  return (
    <div className="container">
      <h2>Edit Player</h2>

      <form onSubmit={handleSubmit}>

        <input name="playerName"
          value={player.playerName || ""}
          onChange={handleChange}
          className="form-control mb-2" />

        <input name="jerseyNumber"
          value={player.jerseyNumber || ""}
          onChange={handleChange}
          className="form-control mb-2" />

        <input name="role"
          value={player.role || ""}
          onChange={handleChange}
          className="form-control mb-2" />

        <button className="btn btn-primary">Update</button>

      </form>
    </div>
  );
}

export default EditPlayer;