import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditCountryDialog from "./EditCountryDialog.jsx";
import DeleteCountryDialog from "./DeleteCountryDialog.jsx";

const CountryCard = ({country, onEdit, onDelete}) => {
    const [editCountryDialogOpen, setEditCountryDialogOpen] = useState(false);
    const [deleteCountryDialogOpen, setDeleteCountryDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{country.name}</Typography>
                    <Typography variant="subtitle2">{country.continent}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditCountryDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteCountryDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditCountryDialog
                open={editCountryDialogOpen}
                onClose={() => setEditCountryDialogOpen(false)}
                country={country}
                onEdit={onEdit}
            />
            <DeleteCountryDialog
                open={deleteCountryDialogOpen}
                onClose={() => setDeleteCountryDialogOpen(false)}
                country={country}
                onDelete={onDelete}
            />
        </>
    );
};

export default CountryCard;