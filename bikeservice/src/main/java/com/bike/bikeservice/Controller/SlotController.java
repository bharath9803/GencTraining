package com.bike.bikeservice.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bike.bikeservice.Service.SlotService;
import com.bike.bikeservice.model.Slot;

@RestController
@RequestMapping("/slots")
@CrossOrigin(origins = "http://127.0.0.1:5500")

public class SlotController {
    @Autowired
    private SlotService slotService;

    @PostMapping("/book")
    public Slot bookSlot(@RequestBody Slot slot) {
        return slotService.saveSlot(slot);
    }

    @GetMapping("/all")
    public List<Slot> getAllSlots() {
        return slotService.getAllSlots();
    }
}