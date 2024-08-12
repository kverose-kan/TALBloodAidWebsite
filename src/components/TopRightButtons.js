'use client';

import { Apps } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";

export default function TopRightButtons() {
    return (
        <ButtonGroup  
        sx={{
            display: "flex",
            justifyContent: "right"
        }}
        
        >
            <IconButton
                aria-label="options"
                size="medium"
                
            >
                <Apps />
            </IconButton>
            <Button>Login/Signup</Button>
        </ButtonGroup>

    );
}