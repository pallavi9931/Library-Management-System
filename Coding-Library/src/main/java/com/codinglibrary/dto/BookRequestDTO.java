package com.codinglibrary.dto;

import lombok.Data;

@Data
public class BookRequestDTO {

    private int id;
    private String title;
    private String author;
    private int quantity;   
}