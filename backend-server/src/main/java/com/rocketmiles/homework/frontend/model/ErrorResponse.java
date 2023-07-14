package com.rocketmiles.homework.frontend.model;

public class ErrorResponse {

    private final boolean success = false;
    private final String[] results = {};
    private String message;

    public ErrorResponse(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public String[] getResults() {
        return results;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
