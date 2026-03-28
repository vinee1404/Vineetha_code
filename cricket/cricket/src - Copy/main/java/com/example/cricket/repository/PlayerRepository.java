package com.example.cricket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.cricket.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}