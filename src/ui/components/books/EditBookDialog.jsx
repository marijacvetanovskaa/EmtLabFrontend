import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import useAuthors from "../../../hooks/useAuthors.js";
import useCountries from "../../../hooks/useCountries.js";

const EditBookDialog = ({open, onClose, book, onEdit}) => {
    const [formData, setFormData] = useState({
        "name": book.name,
        "quantity": book.quantity,
        "authorId": book.authorId,
        "countryId": book.countryId,
    });
    const authors = useAuthors();
    const countries = useCountries();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onEdit(book.id, formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Book</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="authorId"
                        value={formData.authorId}
                        onChange={handleChange}
                        label="Category"
                        variant="outlined">
                        {authors.authors.map((author) => (
                            <MenuItem key={author.id} value={author.id}>{author.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                        label="Country"
                        variant="outlined">
                        {countries.countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBookDialog;