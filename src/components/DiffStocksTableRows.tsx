import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';

const priceLabel = "Price per piece"

export default function Page() {
    return (
        <>
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
