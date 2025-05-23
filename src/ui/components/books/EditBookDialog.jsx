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

const categories = [
    "NOVEL",
    "THRILLER",
    "HISTORY",
    "FANTASY",
    "BIOGRAPHY",
    "CLASSICS",
    "DRAMA"
]

const EditBookDialog = ({open, onClose, book, onEdit}) => {
    const [formData, setFormData] = useState({
        "name": book.name,
        "category": book.category,
        "author": book.author,
        "country": book.country,
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
          <DialogTitle>Edit Book</DialogTitle>
          <DialogContent>
              <TextField
                margin="dense"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
              <FormControl fullWidth margin="dense">
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    label="Author"
                    variant="outlined">
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <FormControl fullWidth margin="dense">
                  <InputLabel>Author</InputLabel>
                  <Select
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    label="Author"
                    variant="outlined">
                      {authors.authors.map((author) => (
                        <MenuItem key={author.id} value={author.id}>{author.name + " " + author.surname}</MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <FormControl fullWidth margin="dense">
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={formData.country}
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
              <Button onClick={handleSubmit} variant="contained" color="primary">Edit</Button>
          </DialogActions>
      </Dialog>
    );
};

export default EditBookDialog;