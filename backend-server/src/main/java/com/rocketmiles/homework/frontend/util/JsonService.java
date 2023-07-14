package com.rocketmiles.homework.frontend.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class JsonService {

    public Object getJson() throws IOException {
        ObjectMapper jsonMapper = new ObjectMapper();
        BufferedReader bufferedReader = new BufferedReader(
                new InputStreamReader(this.getClass().getResourceAsStream("/rates.json"))
        );

        return jsonMapper.readValue(bufferedReader, Object.class);
    }
}
