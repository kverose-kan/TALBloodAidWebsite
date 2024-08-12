'use client';

import { Box, Button, ButtonGroup, Drawer, IconButton, Menu, MenuItem, Slider, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as React from 'react';
import { ArrowDropDownOutlined } from '@mui/icons-material';

export const drawerWidth = 360;
const options = ['Explore Requests', 'Search Blood Banks', 'Explore Nonprofits'];

export default function LeftNavPane() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderRadius: 4,
                    boxShadow: 3,
                    position: 'fixed',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <ButtonGroup 
                variant="outlined" 
                aria-label='Button group for top of nav pane'
            >
                <IconButton
                    aria-label='back' 
                    size='medium'
                >
                    <ArrowBackIcon />
                </IconButton>

                <Button
                    endIcon={<ArrowDropDownOutlined />}
                    onClick={handleClickListItem}
                    sx={{
                        '&:focus': {
                            outline: 'none',
                        }
                    }}
                >
                    {options[selectedIndex]}
                </Button>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </ButtonGroup>

            <Box 
                component="section" 
                sx={{ 
                    p: 2, 
                    color: 'white', 
                    bgcolor: '#000080', 
                    borderRadius: 2,
                    ml: 2,
                    mr: 2,
                }}
            >
                Select your location
                <Box>
                    kilometers
                    <Slider 
                        aria-label='distance'
                        defaultValue={5}
                        valueLabelDisplay='auto'
                        shiftStep={5}
                        step={5}
                        min={5}
                        max={100}

                    />
                </Box>
                
            </Box>
        </Drawer>
    );
}
