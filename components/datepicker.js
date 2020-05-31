
import { TextField } from '@material-ui/core'

export default () => {
    return (
        <form>
        <TextField
            id="start_date"
            label="start"
            type="date" 
            defaultValue="2020-06-01"
            >

            </TextField>
            <TextField
            id="end_date"
            label="end"
            type="date" 
            defaultValue="2020-06-01"
            >

            </TextField>
    </form>

    )
}