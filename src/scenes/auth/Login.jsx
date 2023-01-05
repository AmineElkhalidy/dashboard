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

// Link
import { Link } from "react-router-dom";

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
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h2"
              fontWeight="600"
              color={colors.greenAccent[400]}
              mb="5px"
            >
              Welcome Back
            </Typography>
            <Typography variant="h6" color={colors.grey[200]}>
              Please enter your Credentiels
            </Typography>
          </Box>

          {/* Form */}
          <Box variant="form" display="flex" flexDirection="column" gap={2}>
            {/* Email */}
            <Box borderRadius={1}>
              <TextField label="Email" variant="outlined" color="secondary" />
            </Box>

            {/* Password */}
            <Box>
              <TextField
                label="Password"
                variant="outlined"
                color="secondary"
              />
            </Box>

            {/* Remember & Forgot password */}
            <Box></Box>

            {/* Buttons box */}
            <Box display="flex" gap={1}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "100%",
                  padding: ".75rem",
                  color: "white",
                  letterSpacing: "1px",
                  fontWeight: "600",
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "100%",
                  padding: ".75rem",
                  color: "white",
                  letterSpacing: "1px",
                  fontWeight: "600",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to="/dashboard"
                >
                  Demo
                </Link>
              </Button>
            </Box>
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
