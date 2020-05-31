import { Button, Box, TextField } from '@material-ui/core'
import DatePicker from '../components/datepicker'
import VinList from '../components/vinlist'


export default () => {
    return (
        <Box component='span' m={1}>
            
            <Button color='primary'>Hello NEXT</Button>
            <DatePicker />
            <VinList />
           
        </Box>
    )
}