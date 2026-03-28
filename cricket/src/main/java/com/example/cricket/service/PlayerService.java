package com.example.cricket.service;

import java.util.List;

import com.example.cricket.dto.PlayerDto;
import com.example.cricket.entity.Player;

public interface PlayerService {

    List<Player> getAllPlayers();

    Player savePlayer(PlayerDto playerDto);

    Player getPlayer(Long id);

    Player updatePlayer(Long id, PlayerDto playerDto);

    void deletePlayer(Long id);
}