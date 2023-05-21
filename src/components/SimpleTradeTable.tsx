import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import EssentialStocksTableRows from '../components/EssentialStocksTableRows.tsx'
import { priceLabel, textFieldVariant, totalInvestmentHint } from '../constants/constants';

export default function Page({ onStateChange }) {
    const [buyPrice, setBuyPrice] = useState(0);
    const [buyVolume, setBuyVolume] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);

    const [numberOfStocks, setNumberOfStocks] = useState(0);
    const [diffAbsolute, setDiffAbsolute] = useState(0);
    const [diffPercentage, setDiffPercentage] = useState(0);
    const [sellVolume, setSellVolume] = useState(0);

    useEffect(() => {

        if(buyPrice && buyVolume){
            const newNumberOfStocks = Math.floor(buyVolume / buyPrice);
            setNumberOfStocks(newNumberOfStocks);

            if(sellPrice) {
                const newDiffAbsolute = sellPrice - buyPrice;
                setDiffAbsolute(newDiffAbsolute);

                const newDiffPercentage = Math.floor((sellPrice / buyPrice - 1) * 100);
                setDiffPercentage(newDiffPercentage);

                const newSellVolume = newNumberOfStocks * sellPrice;
                setSellVolume(newSellVolume);

                // Call parent callback with new values
                onStateChange({ sellVolume: newSellVolume, numberOfStocks: newNumberOfStocks });
            }
        }

    }, [buyPrice, buyVolume, sellPrice]);

    useEffect(() => {
        onStateChange({
            newBuyVolume: buyVolume,
            newSellVolume: sellVolume,
            newNumberOfStocks: numberOfStocks,
            newSellPrice: sellPrice
        });
    }, [sellVolume, numberOfStocks, buyVolume, sellPrice]);

    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={3}>Simple</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Buy</TableCell>
                  <TableCell align="center">Sell</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">
                        <TextField
                            id="buy-price"
                            label={priceLabel}
                            variant={textFieldVariant}
                            value={buyPrice}
                            onChange={(e) => setBuyPrice(e.target.value)}
                            tabIndex={1}
                            autoFocus
                            inputProps={{ inputMode: 'numeric' }}
                        />
                    </TableCell>
                    <TableCell align="right">
                        <TextField
                            id="sell-price"
                            label={priceLabel}
                            variant={textFieldVariant}
                            value={sellPrice}
                            onChange={(e) => setSellPrice(e.target.value)}
                            tabIndex={3}
                            inputProps={{ inputMode: 'numeric' }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right">Buy for</TableCell>
                    <TableCell align="right">
                        <TextField
                            id="buy-volume"
                            label={totalInvestmentHint}
                            variant={textFieldVariant}
                            value={buyVolume}
                            onChange={(e) => setBuyVolume(e.target.value)}
                            tabIndex={2}
                            inputProps={{ inputMode: 'numeric' }}
                        />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" style={{whiteSpace: 'nowrap'}}>Number of stocks</TableCell>
                    <TableCell id="number-of-stocks" align="center" colSpan={2}>{numberOfStocks}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" style={{whiteSpace: 'nowrap'}}>Diff absolute</TableCell>
                    <TableCell id="diff-absolute" align="center" colSpan={3}>{diffAbsolute}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" style={{whiteSpace: 'nowrap'}}>Diff percentage</TableCell>
                    <TableCell id="diff-percentage" align="center" colSpan={3}>{diffPercentage}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" style={{whiteSpace: 'nowrap'}}>Sell volume in €</TableCell>
                    <TableCell id="sell-volume" align="center" colSpan={3}>{sellVolume}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    )
}
