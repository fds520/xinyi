package com.xinyi.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@SpringBootApplication
public class XinyiApplication {

    public static void main(String[] args) {
        SpringApplication.run(XinyiApplication.class, args);
    }

    @GetMapping("/xinyi")
    String demo() {
        return "/nature.html";
    }
}
