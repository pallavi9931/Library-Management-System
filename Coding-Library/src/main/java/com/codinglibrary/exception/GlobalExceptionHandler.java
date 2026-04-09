package com.codinglibrary.exception;

import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public String handle(BookNotFoundException ex) {
        return ex.getMessage();
    }
}