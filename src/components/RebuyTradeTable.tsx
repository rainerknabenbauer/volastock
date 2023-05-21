import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';

import { priceLabel, textFieldVariant } from '../constants/constants';

export default function RebuyTradeTable({ sellVolume: initialSellVolume, numberOfStocks: initialNumberOfStocks }) {

    const [sellVolume, setSellVolume] = useState(initialSellVolume);
    const [numberOfStocks, setNumberOfStocks] = useState(initialNumberOfStocks);

    useEffect(() => {
        setSellVolume(initialSellVolume);
        console.log('cc initialSellVolume changed: ' + initialSellVolume);
    }, [initialSellVolume]);

    useEffect(() => {
        setNumberOfStocks(initialNumberOfStocks);
        console.log('cc initialNumberOfStocks changed' + initialNumberOfStocks);
    }, [initialNumberOfStocks]);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={6}>
                            Rebuy
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">Lowest rebuy</TableCell>
                        <TableCell align="center">Median rebuy</TableCell>
                        <TableCell align="center">neutral</TableCell>
                        <TableCell align="center">Median gain risk</TableCell>
                        <TableCell align="center">Worst gain risk</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">Buy price</TableCell>
                        <TableCell align="right"><TextField id="buy-price-lowest" label={priceLabel} variant={textFieldVariant} inputProps={{ inputMode: 'numeric' }} /></TableCell>
                        <TableCell align="right"><TextField id="buy-price-low" label={priceLabel} variant={textFieldVariant} inputProps={{ inputMode: 'numeric' }} /></TableCell>
                        <TableCell align="right"><TextField id="buy-price-neutral" label={priceLabel} variant={textFieldVariant} inputProps={{ inputMode: 'numeric' }} /></TableCell>
                        <TableCell align="right"><TextField id="buy-price-high" label={priceLabel} variant={textFieldVariant} inputProps={{ inputMode: 'numeric' }} /></TableCell>
                        <TableCell align="right"><TextField id="buy-price-highest" label={priceLabel} variant={textFieldVariant} inputProps={{ inputMode: 'numeric' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Buy volume</TableCell>
                        <TableCell align="right">{sellVolume}</TableCell>
                        <TableCell align="right">{sellVolume}</TableCell>
                        <TableCell align="right">{sellVolume}</TableCell>
                        <TableCell align="right">{sellVolume}</TableCell>
                        <TableCell align="right">{sellVolume}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Number of stocks</TableCell>
                        <TableCell align="right">{numberOfStocks}</TableCell>
                        <TableCell align="right">{numberOfStocks}</TableCell>
                        <TableCell align="right">{numberOfStocks}</TableCell>
                        <TableCell align="right">{numberOfStocks}</TableCell>
                        <TableCell align="right">{numberOfStocks}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Diff absolute</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Diff percentage</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Depot</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
