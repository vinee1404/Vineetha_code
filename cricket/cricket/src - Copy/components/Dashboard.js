import React, { useEffect, useState } from "react";
import { getPlayers, deletePlayer } from "../services/PlayerService";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = () => {
    getPlayers().then(res => setPlayers(res.data));
  };

  const handleDelete = (id) => {
    deletePlayer(id).then(() => loadPlayers());
  };

  return (
    
    <div
  className="container mt-3"
  style={{
    backgroundColor: "#f4f6f7",
    padding: "20px",
    borderRadius: "10px",
    minHeight: "100vh"
  }}
>

      <h2
  style={{
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "20px"
  }}
>
  Dashboard
</h2>

      <h5>Total Players: {players.length}</h5>

      <button className="btn btn-primary mb-3"
        onClick={() => navigate("/add")}>
        Add Player
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Jersey</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {players.map(p => (
            <tr key={p.playerId}>
              <td>{p.playerId}</td>
              <td>{p.playerName}</td>
              <td>{p.jerseyNumber}</td>
              <td>{p.role}</td>
              <td>
                <button className="btn btn-warning"
                  onClick={() => navigate(`/edit/${p.playerId}`)}>
                  Edit
                </button>

                <button className="btn btn-danger ms-2"
                  onClick={() => handleDelete(p.playerId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Dashboard;