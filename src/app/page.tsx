'use client';

import React from 'react';
import { Grid, TextField, FormControl, FormGroup, FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Initial',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    brb: 2000
  },
  {
    name: 'Result',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    brb: 2000
  }
];

export default function Page() {

    const priceLabel = "Price per piece"
    const textFieldPadding = 2

    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
          <Grid container spacing={2} style={{ height: '100%', display: 'flex', alignItems: 'stretch' }}>
            <Grid item xs={6} md={4} style={{ display: 'flex' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="brb" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
            <Grid item xs={6} md={8} style={{ display: 'flex' }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Buy</FormLabel>
                  <FormGroup>
                    <TextField id="buy-price" label={priceLabel} variant="filled" helperText="per piece"/>
                    <TextField id="buy-volume" label="Volume" variant="filled" helperText="total investment"/>
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Sell</FormLabel>
                  <FormGroup>
                    <TextField id="filled-basic" label={priceLabel} variant="filled" helperText="per piece"/>
                    <TextField helperText="Future target price" id="filled-basic" label={priceLabel} variant="filled" />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Rebuy</FormLabel>
                  <FormGroup>
                      <TextField helperText="Lowest rebuy" id="filled-basic" label={priceLabel} variant="filled" />
                      <TextField helperText="Median rebuy" id="filled-basic" label={priceLabel} variant="filled" />
                      <TextField helperText="neutral" disabled id="filled-basic" label={priceLabel} variant="filled" />
                      <TextField helperText="Median gain risk" id="filled-basic" label={priceLabel} variant="filled" />
                      <TextField helperText="Worst gain risk" id="filled-basic" label={priceLabel} variant="filled" />
                  </FormGroup>
                </FormControl>

            </Grid>
          </Grid>
        </Box>


    );
}
