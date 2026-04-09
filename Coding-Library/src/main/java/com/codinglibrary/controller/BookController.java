package com.codinglibrary.controller;

import com.codinglibrary.dto.BookRequestDTO;
import com.codinglibrary.entity.Book;
import com.codinglibrary.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService service;

    @PostMapping("/add")
    public String addBook(@RequestBody BookRequestDTO bookDTO) {

        if (bookDTO.getQuantity() <= 0) {
            return "Quantity must be greater than 0";
        }

        service.add(bookDTO);
        return "Book added successfully";
    }

    @PostMapping("/issue/{id}")
    public String issue(@PathVariable int id) {
        service.issueBook(id);
        return "Issued";
    }

    @PostMapping("/return/{id}")
    public String returnBook(@PathVariable int id) {
        service.returnBook(id);
        return "Returned";
    }

    @GetMapping("/available")
    public List<Book> available() {
        return service.getAvailableBooks();
    }

    @GetMapping("/issued")
    public List<Book> issued() {
        return service.getIssuedBooks();
    }
}