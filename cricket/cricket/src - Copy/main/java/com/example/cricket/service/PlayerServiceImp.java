package com.example.cricket.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.cricket.dto.PlayerDto;
import com.example.cricket.entity.Player;
import com.example.cricket.repository.PlayerRepository;

@Service
public class PlayerServiceImp implements PlayerService {

    private final PlayerRepository repo;

    public PlayerServiceImp(PlayerRepository repo) {
        this.repo = repo;
    }

    public List<Player> getAllPlayers() {
        return repo.findAll();
    }

    public Player savePlayer(PlayerDto dto) {

        Player player = new Player();

        player.setPlayerId(dto.getPlayerId());
        player.setPlayerName(dto.getPlayerName());
        player.setJerseyNumber(dto.getJerseyNumber());
        player.setRole(dto.getRole());
        player.setTotalMatches(dto.getTotalMatches());
        player.setTeamName(dto.getTeamName());
        player.setCountry(dto.getCountry());
        player.setDescription(dto.getDescription());

        return repo.save(player);
    }

    public Player getPlayer(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Player updatePlayer(Long id, PlayerDto dto) {

        Player player = new Player();

        player.setPlayerId(id);
        player.setPlayerName(dto.getPlayerName());
        player.setJerseyNumber(dto.getJerseyNumber());
        player.setRole(dto.getRole());
        player.setTotalMatches(dto.getTotalMatches());
        player.setTeamName(dto.getTeamName());
        player.setCountry(dto.getCountry());
        player.setDescription(dto.getDescription());

        return repo.save(player);
    }

    public void deletePlayer(Long id) {
        repo.deleteById(id);
    }
}