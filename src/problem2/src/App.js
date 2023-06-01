import './App.css';
import { TextField, Box, Grid, Button, Typography } from '@mui/material';
import { useState } from 'react'


function App() {
  const [inputAddress, setInputAddress] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputOtp, setInputOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [inputAddressError, setInputAddressError] = useState(false);
  const [inputAmountError, setInputAmountError] = useState(false);
  const [inputOtpError, setInputOtpError] = useState(false);

  function submitForm(){
    setLoading(true);
    setInputAddressError(false);
    setInputAmountError(false);
    setInputOtpError(false);
    if (inputAddress.length < 1 || inputAmount.length < 1 || inputOtp.length < 1){
      if (inputAddress.length < 1){
        setInputAddressError(true);
      }
      if (inputAmount.length < 1){
        setInputAmountError(true);
      }
      if (inputOtp.length < 1){
        setInputOtpError(true);
      } 
      setLoading(false);
    }else{
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }
  return (
    <div className="App">
        <Box margin={4}>
          <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" sx={{marginBottom: "2ch"}}>Transaction Form</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField sx={{marginBottom: "2ch"}}
                  fullWidth
                  label='ETH Address'
                  variant='outlined'
                  value={inputAddress}
                  onChange={(event) =>{
                    setInputAddress(event.target.value)
                  }}
                  disabled={loading}
                  error={inputAddressError}
                  helperText={inputAddressError ? "ETH Address cannot be empty" : ""}
                >    
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField sx={{marginBottom: "2ch"}}
                  fullWidth
                  label='Amount to send'
                  variant='outlined'
                  value={inputAmount}
                  onChange={(event) =>{
                    setInputAmount(event.target.value)
                  }}
                  disabled={loading}
                  error={inputAmountError}
                  helperText={inputAmountError ? "Amount cannot be empty" : ""}
                  >
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField sx={{marginBottom: "2ch"}}
                  fullWidth
                  label='OTP Authentication'
                  variant='outlined'
                  value={inputOtp}
                  onChange={(event) =>{
                    setInputOtp(event.target.value)
                  }}
                  disabled={loading}
                  error={inputOtpError}
                  helperText={inputOtpError ? "Amount cannot be empty" : ""}
                >
                </TextField>
            </Grid>
            
            <Grid item xs={12} >
                <Button 
                    variant='outlined'
                    component='span'
                    sx={{
                        marginTop: '5ch',
                        color: '#E2FCA4',
                        backgroundColor: '#193B4D',
                        borderColor: '#193B4D',
                        '&:hover': {
                          backgroundColor: 'white', // Set background color on hover
                          borderColor: '#41ADA4 !important', // Set border color on hover
                          color: '#41ADA4',
                        },
                        '&.Mui-disabled': {
                          backgroundColor: '#98d8d3',
                          color: 'white',
                          borderColor: '#98d8d3',
                        }
                    }}
                    disabled={loading}
                    onClick={() => {
                      submitForm();
                    }}
                    >{loading ? 'Loading...' : 'SEND TOKENS'}
                </Button>
            </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
