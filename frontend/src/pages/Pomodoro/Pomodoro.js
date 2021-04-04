import React, { useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from '../Pomodoro/style';
import Navigation from '../Navigation/Navigation'
import Timer from '../../components/Timer/Timer';

const Pomodoro = () => {
    const classes = useStyles();

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <Navigation/>
        <Grid container align="center" justify= "center" direction= "column"  className={classes.body}>
            <Typography variant="h1" color="primary">Pomodoro Timer</Typography>
            <Container >
                <Timer/>
            </Container>
        </Grid>
        </React.Fragment>
    );
};

export default Pomodoro;