package com.rocketmiles.homework.frontend.controller;

import com.rocketmiles.homework.frontend.util.JsonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Random;

@CrossOrigin
@RestController
@RequestMapping("/rest")
public class RatesController {

    private final JsonService jsonService;

    @Autowired
    public RatesController(JsonService jsonService) {
        this.jsonService = jsonService;
    }

    @GetMapping(value = "/rates", produces = {"application/json"})
    public Object getRates() throws IOException {
        Random random = new Random();
        int value = random.nextInt(100);

        if (value <= 5) {
            throw new IOException("Uh oh, something went wrong!");
        }

        return jsonService.getJson();
    }
}
