package com.example.cricket.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.cricket.dto.PlayerDto;
import com.example.cricket.entity.Player;
import com.example.cricket.service.PlayerService;

import jakarta.validation.Valid;

@RestController

@CrossOrigin(origins = "*")
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Player> getAllPlayers() {
        return service.getAllPlayers();
    }

    @PostMapping
    public Player createPlayer(@Valid @RequestBody PlayerDto playerDto) {
        return service.savePlayer(playerDto);
    }

    @GetMapping("/{id}")
    public Player getPlayer(@PathVariable Long id) {
        return service.getPlayer(id);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable Long id,
                               @Valid @RequestBody PlayerDto playerDto) {
        return service.updatePlayer(id, playerDto);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable Long id) {
        service.deletePlayer(id);
    }
}