import React from "react";

// MUI
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  useTheme,
} from "@mui/material";

import { tokens } from "../../theme";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      {/* Container Box */}
      <Box>
        {/* Credentiels Box */}
        <Box>
          {/* Welcoming */}
          <Box textAlign="center">
            <Typography
              variant="h2"
              fontWeight="600"
              color={colors.greenAccent[400]}
              mb="5px"
            >
              Welcome back
            </Typography>
            <Typography variant="h6">Please enter your Credentiels</Typography>
          </Box>

          {/* Form */}
          <Box variant="form" display="flex" flexDirection="column">
            {/* Email */}
            <Box></Box>

            {/* Password */}
            <Box></Box>

            {/* Remember & Forgot password */}
            <Box></Box>

            {/* Buttons box */}
            <Box></Box>
          </Box>
        </Box>

        {/* Image Box */}
        <Box>
          <img src="" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
