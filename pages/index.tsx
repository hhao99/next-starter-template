import React from 'react';
import {Head, Link} from 'next'
import { AppBar, Box, Container }  from '@material-ui/core';

export default function() {
    return (
        <>
        <head>
            <title>Next app</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </head>
        <Container maxWidth='md'>
            <Box my={4}>
            <h1>Hello Next!</h1>
            <p>Next with Material UI </p>
            </Box>
            
        </Container>
        </>
    );
}
    