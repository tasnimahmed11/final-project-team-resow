import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function TextFieldContainer(props) {
  return (
    <Box sx={{ borderRadius: '7px', m: 1, p: 0.95, color: 'grey.800', bgcolor: '#e5e4e2' }}>
      <TextField label={props.label}
        InputProps={{ startAdornment: (<InputAdornment position="start"> {props.icon} </InputAdornment>), }}
        variant="standard"
        defaultValue={props.text}
        color="success" />
    </Box>
  );
}

function EditProfile(props) {

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://my.api.mockaroo.com/user_mock_data2.json?key=13a3e900"
      );

      setUserDetails(response.data);

    }

    fetchData();

  }, []);

  return (

    <Box sx={{ height: "calc(100vh - 53px)" }}>

      <Box sx={{ mt: 3, mb: 2 }}>
        <Stack direction="row" style={{ justifyContent: "center", display: "absolute" }} >
          <Avatar
            src={userDetails.avatar}
            alt="Profile Picture"
            sx={{ border: "solid 0.5px", borderColor:"black", width: 120, height: 120 }}
          />
          <Fab component="label" sx={{ display: "absolute", mt: "80px", ml: "-40px", zIndex: 'tooltip' }} size="small" color="success" >
            <input hidden accept="image/*" type="file" />
            <EditIcon />
          </Fab >
        </Stack>
      </Box>

      <Stack spacing={1} direction="column" alignItems="center">
        <TextFieldContainer label="Full Name" icon=<AccountCircle /> text={userDetails.full_name} />
        <TextFieldContainer label="Username" icon=<AlternateEmailIcon /> text={userDetails.username} />
        <TextFieldContainer label="Email ID" icon=<EmailIcon /> text={userDetails.email} />
        <TextFieldContainer label="Phone Number" icon=<LocalPhoneIcon /> text={userDetails.phone} />
        <TextFieldContainer label="Location" icon=<HomeRoundedIcon /> text={userDetails.location} />
      </Stack>

      <Box sx={{ m: 2 }}>
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Button color="success" href="/UserProfile" variant="contained">Save Changes</Button>
          <Button color="success" href="/UserProfile" variant="contained">Revert Changes</Button>
        </Stack>
      </Box>

    </Box>

  );
}

export default EditProfile;


