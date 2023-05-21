import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';
import BuyStocksTableRows from './BuyStocksTableRows.tsx'
import DiffStocksTableRows from './DiffStocksTableRows.tsx'
import { priceLabel, textFieldVariant } from '../constants/constants';


export default function Page() {
    return (
        <>
        <TableRow>
            <TableCell align="right">Buy price</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><TextField id="buy-price" label={priceLabel} variant={textFieldVariant}/></TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Buy volume</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><TextField id="buy-volume" label="Volume" variant={textFieldVariant}/></TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Number of stocks</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">tbd</TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Sell price</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><TextField id="sell-price" label={priceLabel} variant={textFieldVariant}/></TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Diff absolute</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">tbd</TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Diff percentage</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">tbd</TableCell>
        </TableRow>
        </>
    )
}
