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

export default function Page() {
    const [buyPrice, setBuyPrice] = useState(0);
    const [buyVolume, setBuyVolume] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);

    const [numberOfStocks, setNumberOfStocks] = useState('');
    const [diffAbsolute, setDiffAbsolute] = useState('');
    const [diffPercentage, setDiffPercentage] = useState('');
    const [sellVolume, setSellVolume] = useState('');

    useEffect(() => {

        if(buyPrice && buyVolume){

            setNumberOfStocks(
                Math.floor(buyVolume / buyPrice)
            )

            if(sellPrice) {
                setDiffAbsolute(
                    sellPrice - buyPrice
                )
                setDiffPercentage(
                    Math.floor(sellPrice / buyPrice - 1)
                )
                setSellVolume(
                    numberOfStocks * sellPrice
                )
            }
        }

    }, [buyPrice, buyVolume, sellPrice]);

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
                        />
                    </TableCell>
                    <TableCell align="right">
                        <TextField
                            id="sell-price"
                            label={priceLabel}
                            variant={textFieldVariant}
                            value={sellPrice}
                            onChange={(e) => setSellPrice(e.target.value)}
                            tabIndex={2}
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
                            tabIndex={3}
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
