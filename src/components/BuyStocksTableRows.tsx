import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';

const priceLabel = "Price per piece"

export default function Page() {
    return (
        <>
        <TableRow>
            <TableCell align="right">Buy price</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><TextField id="buy-price" label={priceLabel} variant="filled" helperText="per piece"/></TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Buy volume</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><TextField id="buy-volume" label="Volume" variant="filled" helperText="total investment"/></TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right">Number of stocks</TableCell>
            <TableCell align="right">tbd</TableCell>
            <TableCell align="right"></TableCell>
        </TableRow>
        </>
    )
}
