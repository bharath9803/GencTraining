package com.bike.bikeservice.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bike.bikeservice.model.Slot;

public interface SlotRepository extends JpaRepository<Slot, Long> {
}