import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditAuthorDialog from "./EditAuthorDialog.jsx";
import DeleteAuthorDialog from "./DeleteAuthorDialog.jsx";

const AuthorCard = ({author, onEdit, onDelete}) => {
    const [editAuthorDialogOpen, setEditAuthorDialogOpen] = useState(false);
    const [deleteAuthorDialogOpen, setDeleteAuthorDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{author.name + " " + author.surname}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditAuthorDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteAuthorDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditAuthorDialog
                open={editAuthorDialogOpen}
                onClose={() => setEditAuthorDialogOpen(false)}
                author={author}
                onEdit={onEdit}
            />
            <DeleteAuthorDialog
                open={deleteAuthorDialogOpen}
                onClose={() => setDeleteAuthorDialogOpen(false)}
                author={author}
                onDelete={onDelete}
            />
        </>
    );
};

export default AuthorCard;