package com.bike.bikeservice.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bike.bikeservice.model.Bike;

public interface BikeRepository  extends JpaRepository<Bike, Long>{


}
