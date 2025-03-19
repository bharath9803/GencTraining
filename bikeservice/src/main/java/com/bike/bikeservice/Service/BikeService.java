package com.bike.bikeservice.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bike.bikeservice.Repo.BikeRepository;
import com.bike.bikeservice.model.Bike;

@Service
public class BikeService {

    @Autowired
    private BikeRepository bikeRepository;

    public Bike saveBike(Bike bike) {
        return bikeRepository.save(bike);
    }


}
