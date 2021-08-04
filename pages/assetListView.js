import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { getAssets } from "../controllers/assetListViewController";
import AssetSummaryView from "./assetSummaryView";
import { CenterFocusStrong } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px',
    padding: '30px',
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function AssetListView() {
  const classes = useStyles();
  let [assets, setAssets] = useState([]);
  // On page load, retrieved list of devices
  useEffect(async () => {
    const assets = await getAssets();
    setAssets(assets);
  }, []);
  console.log({ assets });
  return (
    <div className="asset">
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
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      {assets.map((asset) => (
        <AssetSummaryView data={asset} />
      ))}
          <Button variant="contained" color="primary">
                Show Map View
          </Button>
    </div>
  );
}
