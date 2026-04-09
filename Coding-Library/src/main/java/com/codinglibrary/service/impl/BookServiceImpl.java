package com.codinglibrary.service.impl;

import com.codinglibrary.dto.BookRequestDTO;
import com.codinglibrary.entity.Book;
import com.codinglibrary.exception.BookNotFoundException;
import com.codinglibrary.repository.BookRepository;
import com.codinglibrary.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository repository;

    
    @Override
    public void add(BookRequestDTO dto) {

        Book book = new Book();

        book.setId(dto.getId());
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setQuantity(dto.getQuantity());
        book.setIssued(false); // optional
        book.setTotalQuantity(dto.getQuantity()); 

        repository.add(book);
    }

  
    @Override
    public void issueBook(int id) {

        Book book = repository.findById(id)
                .orElseThrow(() -> new BookNotFoundException("Book not found"));

        if (book.getQuantity() <= 0) {
            throw new RuntimeException("Out of stock");
        }

        book.setQuantity(book.getQuantity() - 1);
    }

  
    @Override
    public void returnBook(int id) {

        Book book = repository.findById(id)
                .orElseThrow(() -> new BookNotFoundException("Book not found"));

        
        if (book.getQuantity() >= book.getTotalQuantity()) {
            throw new RuntimeException("All books already returned");
        }

     
        book.setQuantity(book.getQuantity() + 1);
    }
    
    @Override
    public List<Book> getAvailableBooks() {
        return repository.findAll().stream()
                .filter(b -> b.getQuantity() > 0)
                .collect(Collectors.toList());
    }


    @Override
    public List<Book> getIssuedBooks() {
        return repository.findAll().stream()
                .filter(b -> b.getQuantity() < b.getTotalQuantity())
                .collect(Collectors.toList());
    }
}