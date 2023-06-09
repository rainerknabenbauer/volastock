'use client';

import React from 'react';
import { Grid, TextField, Typography, Box } from '@mui/material';
import Graph from '../components/Graph.tsx'
import SimpleTradeTable from '../components/SimpleTradeTable.tsx'
import RebuyTradeTable from '../components/RebuyTradeTable.tsx'
import RiskAssessment from '../components/RiskAssessment.tsx'
import * as constants from '../constants/constants';
import { useState, useEffect } from 'react';

export default function Page() {

    const [sellVolume, setSellVolume] = useState(0);
    const [numberOfStocks, setNumberOfStocks] = useState(0);
    const [buyVolume, setBuyVolume] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);

    const handleSimpleTableData = ({newSellVolume, newNumberOfStocks, newBuyVolume, newSellPrice}) => {
        setSellVolume(newSellVolume);
        setNumberOfStocks(newNumberOfStocks);
        setBuyVolume(newBuyVolume)
        setSellPrice(newSellPrice)
    }

    return (
        <>
        <Typography variant="h2" align="center">Calculate your stock
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ height: '100%', display: 'flex', alignItems: 'stretch' }}>
            <Grid item xs={6} md={4} style={{ display: 'flex' }}>

                <SimpleTradeTable onStateChange={handleSimpleTableData}/>
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
                <RebuyTradeTable
                    sellVolume={sellVolume}
                    numberOfStocks={numberOfStocks}
                    sellPrice={sellPrice}
                />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <RiskAssessment />
        </Box>
        </>
    );
}
