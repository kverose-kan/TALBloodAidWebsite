'use client'

import * as React from 'react';
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ArrowDropDownOutlined } from '@mui/icons-material';

export default function DropDownButton({ buttonLabel, menuItems} ) {
    const [item, setItem] = React.useState(null);
    const open =  Boolean(item);
    const handleClick = (event) => {
        setItem(event.currentTarget);
    };
    const handleClose = () => {
        setItem(null);
    };

    return(
        <div>
            <Button
                id='item-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
                size="large"
                edge="start"
                color="inherit"
                aria-label="Map View"
                sx={{ mr: 0.25, textTransform: 'none' }}
                endIcon={<ArrowDropDownOutlined/ >}
            >
                {buttonLabel}
            </Button>
            <Menu
                id='item-menu'
                anchorEl={item}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'item-button'
                }}
            >
                {menuItems.map((menuItem, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        {menuItem}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}