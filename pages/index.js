import React from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


import Head from '../components/head';
import Header from '../components/header';
import VenueCard from '../components/venueCard';

const styles = theme => ({
    root:{
        flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
        maxWidth: '1320px',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
})

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        var venueList = [];
        for (var i = 0; i<9;i++) {
            venueList.push(
                <Grid item key={i} xs={4}>
                    <VenueCard />
                </Grid>)
        }
        return(
        <React.Fragment>
            <CssBaseline />
            <Head title="Trang chủ" />
            <Header />
            <img style={{maxHeight:'300px',width:'100%',objectFit:'cover'}} src="/static/img/530.png"/>
            <Grid className={classes.container} container spacing={16}>


            {venueList}

          </Grid>
        </React.Fragment>
    )}
}


export default withStyles(styles)(Home);
