import { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { logout } from "../Hooks/Auth";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Logout } from "@mui/icons-material";
import "./gerercompte.css"
import { AuthContext } from "../Hooks/Auth";
function GererCompte() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logginout = () => {
    logout();
    setIsLoggedIn(false); 
  };
  return (
    <div>
      <Tooltip title="paramète-compte">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <img src="./src/assets/compte.svg" alt="" className="compte" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Compte
        </MenuItem>

        <MenuItem onClick={Logginout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Déconnection
        </MenuItem>
      </Menu>
    </div>
  );
}
export default GererCompte;
