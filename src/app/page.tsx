'use client';

import React from 'react';
import { Grid, TextField, Typography, Box } from '@mui/material';
import Graph from '../components/Graph.tsx'
import SimpleTradeTable from '../components/SimpleTradeTable.tsx'
import RebuyTradeTable from '../components/RebuyTradeTable.tsx'

export default function Page() {
    const priceLabel = "Price per piece"

    return (
        <>
        <Typography variant="h2" align="center">Calculate your stock
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ height: '100%', display: 'flex', alignItems: 'stretch' }}>
            <Grid item xs={6} md={4} style={{ display: 'flex' }}>

                <SimpleTradeTable />
            </Grid>
            <Grid item xs={6} md={8}>
                <Graph />
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h2"  align="center">Evaluate your decisions</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ height: '100%', display: 'flex', alignItems: 'stretch' }}>
            <Grid item xs={6} md={4} style={{ display: 'flex' }}>
                <Graph />
            </Grid>
            <Grid item xs={6} md={8}>
                <RebuyTradeTable />
            </Grid>
          </Grid>
        </Box>
        </>
    );
}
