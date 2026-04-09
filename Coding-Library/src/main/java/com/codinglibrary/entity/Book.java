package com.codinglibrary.entity;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {

    private int id;
    private String title;
    private String author;
    private boolean issued;
    private int quantity;
    private int totalQuantity;
}