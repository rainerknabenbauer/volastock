import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';
import BuyStocksTableRows from './BuyStocksTableRows.tsx'
import DiffStocksTableRows from './DiffStocksTableRows.tsx'

const priceLabel = "Price per piece"

export default function Page() {
    return (
        <>
        <BuyStocksTableRows />
        <TableRow>
            <TableCell align="right">Sell price</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><TextField id="filled-basic" label={priceLabel} variant="filled" helperText="per piece"/></TableCell>
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
