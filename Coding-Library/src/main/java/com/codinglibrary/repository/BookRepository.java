package com.codinglibrary.repository;

import com.codinglibrary.entity.Book;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class BookRepository {

    private final Map<Integer, Book> db = new HashMap<>();

    public BookRepository() {

        db.put(1, new Book(1, "Java Basics", "James Gosling", false, 5, 5));
        db.put(2, new Book(2, "Spring Boot", "Rod Johnson", false, 3, 3));
        db.put(3, new Book(3, "Clean Code", "Robert C. Martin", false, 4, 4));
        db.put(4, new Book(4, "Microservices", "Sam Newman", false, 2, 2));
        db.put(5, new Book(5, "Hibernate", "Thorben Janssen", false, 6, 6));
    }
    
    public void add(Book book) {
        db.put(book.getId(), book);
    }

    
    public Optional<Book> findById(int id) {
        return Optional.ofNullable(db.get(id));
    }

    
    public List<Book> findAll() {
        return new ArrayList<>(db.values());
    }
}