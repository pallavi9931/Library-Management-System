
package com.codinglibrary.service;

import com.codinglibrary.dto.BookRequestDTO;
import com.codinglibrary.entity.Book;

import java.util.List;

public interface BookService {

    void add(BookRequestDTO dto); 
    void issueBook(int id);
    void returnBook(int id);
    List<Book> getAvailableBooks();
    List<Book> getIssuedBooks();
}