package com.rocketmiles.homework.frontend.controller;

import com.rocketmiles.homework.frontend.model.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.io.IOException;

@ControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler({NoHandlerFoundException.class})
    @ResponseStatus(value= HttpStatus.NOT_FOUND)
    @ResponseBody
    public ErrorResponse requestHandlingNoHandlerFound() {
        return new ErrorResponse("Sorry, nothing to see here. Were you looking for the /rest/rates path?");
    }

    @ExceptionHandler({IOException.class})
    @ResponseStatus(value= HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public ErrorResponse requestHandlingInternalServerError() {
        return new ErrorResponse("It's not you, it's me. Try it again.");
    }
}
