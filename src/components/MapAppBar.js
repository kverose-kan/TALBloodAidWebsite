import * as React from 'react';
import { AppBar, Box, Button, Divider, Toolbar } from '@mui/material';
import { FmdGoodOutlined, GridViewOutlined } from '@mui/icons-material';
import DropDownButton from './DropDownButton';

export default function MapAppBar() {
    return (
        <Box sx={{ flexGrow: 1, mb: 2, display: 'flex', justifyContent: 'center' }}>
            <AppBar 
                position='static'
                sx={{
                    borderRadius: 999,
                    maxWidth: 650, 
                    width: '100%', 
                }}
            >
                <Toolbar
                    sx={{ 
                        borderRadius: 999, 
                        backgroundColor: 'white', 
                        color: 'black', 
                        boxShadow: 2, 
                        minHeight: 48, 
                        px: 2, 
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}> 
                        <DropDownButton
                            buttonLabel={'Type'}
                            menuItems={['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']}
                        />

                        <Divider orientation="vertical" flexItem />

                        <DropDownButton
                            buttonLabel={'All Blood Group'}
                            menuItems={['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']}
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Button 
                        startIcon={<FmdGoodOutlined />}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="Map View"
                        sx={{ mr: 0.5, px: 1, textTransform: 'none' }}
                    >
                        Map View
                    </Button>
                    <Button 
                        startIcon={<GridViewOutlined />}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="Card View"
                        sx={{ mr: 0.5, px: 1, textTransform: 'none' }}
                    >
                        Card View
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
