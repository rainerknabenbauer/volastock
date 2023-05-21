import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import RebuyColumn from '../types/RebuyColumn'

import { priceLabel, textFieldVariant } from '../constants/constants';

function createDefaultRebuyColumn(): RebuyColumn {
    return {
        buyPrice: 0,
        volume: 0,
        numberOfStocks: 0,
        diffAbsolute: 0,
        diffPercentage: '0%',
        depotWert: 0,
    };
}

export default function RebuyTradeTable({
    sellVolume: newBuyVolume,
    numberOfStocks: initialNumberOfStocks,
    sellPrice: oldSellPrice
}) {

    const [rebuyVolume, setRebuyVolume] = useState(newBuyVolume);
    const [numberOfStocks, setNumberOfStocks] = useState(initialNumberOfStocks);
    const [sellPrice, setSellPrice] = useState(oldSellPrice);

    useEffect(() => {
        setRebuyVolume(newBuyVolume);
        console.log("new buy volume" + newBuyVolume)
    }, [newBuyVolume]);

    useEffect(() => {
        setNumberOfStocks(initialNumberOfStocks);
    }, [initialNumberOfStocks]);

    useEffect(() => {
        setSellPrice(oldSellPrice);
    }, [oldSellPrice]);

    const [rebuyPriceLowest, setRebuyPriceLowest] = useState(0);
    const [rebuyPriceLow, setRebuyPriceLow] = useState(0);
    const [rebuyPriceNeutral, setRebuyPriceNeutral] = useState(0);
    const [rebuyPriceHigh, setRebuyPriceHigh] = useState(0);
    const [rebuyPriceHighest, setRebuyPriceHighest] = useState(0);

    useEffect(() => {
        setRebuyPriceLowest(rebuyPriceLowest);
    }, [rebuyPriceLowest]);

    useEffect(() => {
        setRebuyPriceLow(rebuyPriceLow);
    }, [rebuyPriceLow]);

    useEffect(() => {
        setRebuyPriceNeutral(rebuyPriceNeutral);
    }, [rebuyPriceNeutral]);

    useEffect(() => {
        setRebuyPriceLowest(rebuyPriceHigh);
    }, [rebuyPriceHigh]);

    useEffect(() => {
        setRebuyPriceHighest(rebuyPriceHighest);
    }, [rebuyPriceHighest]);

    // Calculate user input

    const [rebuyPriceLowestData, setRebuyPriceLowestData] = useState(createDefaultRebuyColumn())

    useEffect(() => {
        if(rebuyVolume && rebuyPriceLowest){

            const newRebuyPriceLowestData: RebuyColumn = {
                buyPrice: rebuyPriceLowest,
                volume: rebuyVolume,
                numberOfStocks: numberOfStocks,
                diffAbsolute: oldSellPrice - rebuyPriceLowest,
                diffPercentage: Math.floor((oldSellPrice / rebuyPriceLowest - 1) * 100),
                depotWert: 0, // only gets relevant on target price
            }
            setRebuyPriceLowestData(newRebuyPriceLowestData)

            console.log("createDefaultRebuyColumn " + newRebuyPriceLowestData)
            //TODO callback for the graph
        }
    }, [rebuyVolume, rebuyPriceLowest])

    const [rebuyPriceLowData, setRebuyPriceLowData] = useState(createDefaultRebuyColumn())

    useEffect(() => {
        if(rebuyVolume && rebuyPriceLow){

            const newRebuyPriceLowData: RebuyColumn = {
                buyPrice: rebuyPriceLow,
                volume: rebuyVolume,
                numberOfStocks: numberOfStocks,
                diffAbsolute: oldSellPrice - rebuyPriceLow,
                diffPercentage: Math.floor((oldSellPrice / rebuyPriceLow - 1) * 100),
                depotWert: 0, // only gets relevant on target price
            }
            setRebuyPriceLowData(newRebuyPriceLowData)

            console.log("createDefaultRebuyColumn " + newRebuyPriceLowData)
            //TODO callback for the graph
        }
    }, [rebuyVolume, rebuyPriceLow])




    const [rebuyPriceNeutralData, setRebuyPriceNeutralData] = useState(createDefaultRebuyColumn())

    useEffect(() => {
        if(rebuyVolume && rebuyPriceNeutral){

            const newRebuyPriceNeutralData: RebuyColumn = {
                buyPrice: rebuyPriceNeutral,
                volume: rebuyVolume,
                numberOfStocks: numberOfStocks,
                diffAbsolute: oldSellPrice - rebuyPriceNeutral,
                diffPercentage: Math.floor((oldSellPrice / rebuyPriceNeutral - 1) * 100),
                depotWert: 0, // only gets relevant on target price
            }
            setRebuyPriceNeutralData(newRebuyPriceNeutralData)

            console.log("createDefaultRebuyColumn " + newRebuyPriceNeutralData)
            //TODO callback for the graph
        }
    }, [rebuyVolume, rebuyPriceNeutral])




    const [rebuyPriceHighData, setRebuyPriceHighData] = useState(createDefaultRebuyColumn())

    useEffect(() => {
        if(rebuyVolume && rebuyPriceHigh){

            const newRebuyPriceHighData: RebuyColumn = {
                buyPrice: rebuyPriceHigh,
                volume: rebuyVolume,
                numberOfStocks: numberOfStocks,
                diffAbsolute: oldSellPrice - rebuyPriceHigh,
                diffPercentage: Math.floor((oldSellPrice / rebuyPriceHigh - 1) * 100),
                depotWert: 0, // only gets relevant on target price
            }
            setRebuyPriceHighData(newRebuyPriceHighData)

            console.log("createDefaultRebuyColumn " + newRebuyPriceHighData)
            //TODO callback for the graph
        }
    }, [rebuyVolume, rebuyPriceHigh])

    const [rebuyPriceHighestData, setRebuyPriceHighestData] = useState(createDefaultRebuyColumn())

    useEffect(() => {
        if(rebuyVolume && rebuyPriceHighest){

            const newRebuyPriceHighestData: RebuyColumn = {
                buyPrice: rebuyPriceHighest,
                volume: rebuyVolume,
                numberOfStocks: numberOfStocks,
                diffAbsolute: oldSellPrice - rebuyPriceHighest,
                diffPercentage: Math.floor((oldSellPrice / rebuyPriceHighest - 1) * 100),
                depotWert: 0, // only gets relevant on target price
            }
            setRebuyPriceHighestData(newRebuyPriceHighestData)

            console.log("createDefaultRebuyColumn " + newRebuyPriceHighestData)
            //TODO callback for the graph
        }
    }, [rebuyVolume, rebuyPriceHighest])

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
                        <TableCell align="right"><TextField
                            id="buy-price-lowest"
                            label={priceLabel}
                            variant={textFieldVariant}
                            inputProps={{ inputMode: 'numeric' }}
                            value={rebuyPriceLowest}
                            onChange={(e) => setRebuyPriceLowest(e.target.value)}
                        /></TableCell>
                        <TableCell align="right"><TextField
                            id="buy-price-low"
                            label={priceLabel}
                            variant={textFieldVariant}
                            inputProps={{ inputMode: 'numeric' }}
                            value={rebuyPriceLow}
                            onChange={(e) => setRebuyPriceLow(e.target.value)}
                        /></TableCell>
                        <TableCell align="right"><TextField
                            id="buy-price-neutral"
                            label={priceLabel}
                            variant={textFieldVariant}
                            inputProps={{ inputMode: 'numeric' }}
                            value={rebuyPriceNeutral}
                            onChange={(e) => setRebuyPriceNeutral(e.target.value)}
                        /></TableCell>
                        <TableCell align="right"><TextField
                            id="buy-price-high"
                            label={priceLabel}
                            variant={textFieldVariant}
                            inputProps={{ inputMode: 'numeric' }}
                            value={rebuyPriceHigh}
                            onChange={(e) => setRebuyPriceHigh(e.target.value)}
                        /></TableCell>
                        <TableCell align="right"><TextField
                            id="buy-price-highest"
                            label={priceLabel}
                            variant={textFieldVariant}
                            inputProps={{ inputMode: 'numeric' }}
                            value={rebuyPriceHighest}
                            onChange={(e) => setRebuyPriceHighest(e.target.value)}
                        /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Rebuy volume</TableCell>
                        <TableCell align="center">{rebuyVolume}</TableCell>
                        <TableCell align="center">{rebuyVolume}</TableCell>
                        <TableCell align="center">{rebuyVolume}</TableCell>
                        <TableCell align="center">{rebuyVolume}</TableCell>
                        <TableCell align="center">{rebuyVolume}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Number of stocks</TableCell>
                        <TableCell align="center">{numberOfStocks}</TableCell>
                        <TableCell align="center">{numberOfStocks}</TableCell>
                        <TableCell align="center">{numberOfStocks}</TableCell>
                        <TableCell align="center">{numberOfStocks}</TableCell>
                        <TableCell align="center">{numberOfStocks}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Diff absolute</TableCell>
                        <TableCell id="buy-price-lowest-diff-absolute" align="center">{rebuyPriceLowestData.diffAbsolute}</TableCell>
                        <TableCell id="buy-price-low-diff-absolute" align="center">{rebuyPriceLowData.diffAbsolute}</TableCell>
                        <TableCell id="buy-price-neutral-diff-absolute" align="center">{rebuyPriceNeutralData.diffAbsolute}</TableCell>
                        <TableCell id="buy-price-high-diff-absolute" align="center">{rebuyPriceHighData.diffAbsolute}</TableCell>
                        <TableCell id="buy-price-highest-diff-absolute" align="center">{rebuyPriceHighestData.diffAbsolute}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Diff percentage</TableCell>
                        <TableCell id="buy-price-lowest-diff-percentage" align="center">{rebuyPriceLowestData.diffPercentage}</TableCell>
                        <TableCell id="buy-price-low-diff-percentage" align="center">{rebuyPriceLowData.diffPercentage}</TableCell>
                        <TableCell id="buy-price-neutral-diff-percentage" align="center">{rebuyPriceNeutralData.diffPercentage}</TableCell>
                        <TableCell id="buy-price-high-diff-percentage" align="center">{rebuyPriceHighData.diffPercentage}</TableCell>
                        <TableCell id="buy-price-highest-diff-percentage" align="center">{rebuyPriceHighestData.diffPercentage}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Depot</TableCell>
                        <TableCell id="buy-price-lowest-depot" align="center">{rebuyPriceLowestData.depot}</TableCell>
                        <TableCell id="buy-price-low-depot" align="center"></TableCell>
                        <TableCell id="buy-price-neutral-depot" align="center"></TableCell>
                        <TableCell id="buy-price-high-depot" align="center"></TableCell>
                        <TableCell id="buy-price-highest-depot" align="center"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
