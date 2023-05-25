import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function Page() {

    const theme = useTheme();
    // Upside and downsite color coding can be adjusted with opacity?

    return (
        <>
        <Box  sx={{ width: '100%' }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3}}>
            <Grid xs={12} style={{textAlign: "center", backgroundColor: theme.palette.primary.main}}>Headline</Grid>

            <Grid xs={6} style={{textAlign: "right"}}>Upside</Grid>
            <Grid xs={6} sx={{ pl: 5 }} style={{textAlign: "left"}}>a</Grid>

            <Grid xs={6} style={{textAlign: "right"}}>Downside</Grid>
            <Grid xs={6} sx={{ pl: 5 }} style={{textAlign: "left"}}>a</Grid>
        </Grid>
        </Box>
        </>
    )

}
