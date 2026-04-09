package com.codinglibrary.controller;

import com.codinglibrary.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public Map<String,String> login(@RequestBody Map<String, String> user) {

        if ("admin".equals(user.get("username")) &&
            "admin123".equals(user.get("password"))) {
        	   String token = jwtUtil.generateToken(user.get("username"));

             return Map.of("token", token);
        }

        throw new RuntimeException("Invalid credentials");
    }
}