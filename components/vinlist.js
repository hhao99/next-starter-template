
import React from 'react'
import { Box, Button ,TextField, List, ListItem, ListItemText } from '@material-ui/core'

class VinList extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            vin: '',
            vin_list: []
        }
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleAddVin = this.handleAddVin.bind(this)
    }
    handleVinChange(e) {
        this.setState({
            vin: e.target.value
        })
    }
    handleAddVin(e) {
        let vin_list = this.state.vin_list
        vin_list.push(this.state.vin)
        this.setState({
            vin: '',
            vin_list: vin_list
        })
    }
    render() {
        return (
            <>
                <TextField 
                    id='vin'
                    label='vin'
                    value={this.state.vin}
                    onChange={this.handleVinChange}
                />
                <Button onClick={ this.handleAddVin}>add</Button>
                <Box>
                    <h3> Vin List</h3>
                    <List>
                    { this.state.vin_list.map( (vin) => 
                        <ListItem key={vin}>
                            <ListItemText primary={`Vin ${vin}`} />
                        </ListItem>)}

                    </List>
                    
                </Box>
            </>
        )
    }
    

}

export default VinList