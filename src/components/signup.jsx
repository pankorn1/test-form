import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


const Signup=()=>{
const paperStyle={padding:'30px 20px',width:300, margin:"20px auto"}  
const headerStyle={margin:0}  
const avatarStyle={backgroundColor:'#87CEEB'}
    return(
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        
                    </Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant="<caption">Please fill this from to create an account ! </Typography>
                </Grid>
                <form>
                    <TextField
                    id="standard-Name-input"
                    label="Name"
                    type="Name"
                    autoComplete="current-Name"
                    variant="standard"/> 
                    
                    
                    <p>
                    <TextField
                    id="standard-Phone Number-input"
                    label="Phone Number"
                    type="Phone Number"
                    autoComplete="current-Phone Number"
                    variant="standard"/>
                    </p>
                    

                    <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                    ria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group" style={{display:'initial'}}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>

                    <TextField
                    id="standard-Email-input"
                    label="Email"
                    type="Email"
                    autoComplete="current-Email"
                    variant="standard"/>

                    <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"/>  

                    
                    <TextField
                    id="standard-Confirm Password-input"
                    label="Confirm Password"
                    type="Confirm Password"
                    autoComplete="current-Confirm Password"
                    variant="standard"/>

                    
                    <FormControlLabel control={<Checkbox defaultChecked />} label="i accept the terms and conditions." />
                   

                    <Button type='Submit' variant='contained' color='primary'>Sign Up</Button>

                </form>
            </Paper>
        </Grid>
    )
}

export default Signup
