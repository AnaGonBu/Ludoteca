package com.ccsw.tutorial;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Ludoteca API está funcionando";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}