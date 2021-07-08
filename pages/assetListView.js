import React, { useState } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));

export default function AssetListView() {
    const classes = useStyles();
    return (
        <div>
            <h1>Assets List View</h1>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className="List1">
                <span><h3>Blue Container</h3><h2>2.5 Km</h2></span>
                <h4>1.Alex Avenue, Chennai</h4>
                <h3>Last Signal: 21-Mar, 5:30 PM</h3>
            </div>
            <hr />
            <div className="List1">
                <span><h3>Blue Container</h3><h2>2.5 Km</h2></span>
                <h4>1.Alex Avenue, Chennai</h4>
                <h3>Last Signal: 21-Mar, 5:30 PM</h3>
            </div>
            <hr />
            <div className="List1">
                <span><h3>Blue Container</h3><h2>2.5 Km</h2></span>
                <h4>1.Alex Avenue, Chennai</h4>
                <h3>Last Signal: 21-Mar, 5:30 PM</h3>
            </div>
            <hr />
            <div className="List1">
                <span><h3>Blue Container</h3><h2>2.5 Km</h2></span>
                <h4>1.Alex Avenue, Chennai</h4>
                <h3>Last Signal: 21-Mar, 5:30 PM</h3>
            </div>
            <Button>Show Map View</Button>
        </div>
    );
}
