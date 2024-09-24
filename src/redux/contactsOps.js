/* eslint-disable no-unused-vars */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66f1b550415379191551df53.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async(_, thunkAPI) => {
    try {
        const res = await axios.get("/contacts");
        return res.data;
    } 
    catch (error) {
        return thunkAPI.rejectWithValue();
    }
});

export const addContact  = createAsyncThunk("contacts/addContact", async (newTask, thunkAPI) => {
    try {
        const res = await axios.post("/contacts", newTask);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue();
    }
});



export const deleteContact = createAsyncThunk("contacts/deleteContact", async (taskID, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${taskID}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue();
    }
});