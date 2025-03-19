package com.bike.bikeservice.Controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bike.bikeservice.Service.BikeService;
import com.bike.bikeservice.model.Bike;

@RestController
@RequestMapping("/bikes")
public class BikeController {

    
   @Autowired
    private BikeService bikeService;

    @PostMapping("/register")
    public Bike registerBike(@RequestBody Bike bike) {
        return bikeService.saveBike(bike);
    }

    
}
