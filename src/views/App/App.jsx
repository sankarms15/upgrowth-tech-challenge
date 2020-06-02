import React from 'react';
import { Container } from '@material-ui/core';
import { HomePage } from '../HomePage';
import './App.scss';

function App() {
    return (
        <Container maxWidth="lg">
            <HomePage />
        </Container>
    );
}

export { App };