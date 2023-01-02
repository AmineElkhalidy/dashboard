import React from "react";

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

import { ColorModeContext, tokens } from "../../theme";

// Image
import LogImg from "../../assets/images/log_img.jpg";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      minHeight="100vh"
    >
      {/* Credentiels */}
      <Box width="100%" display="flex" flexDirection="column" gap={2.5}>
        {/* Welcoming */}
        <Box textAlign="center" mb={2}>
          <Typography variant="h2">Welcome back</Typography>
          <Typography variant="p">Please enter your credentiels</Typography>
        </Box>

        {/* Form */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1.5}
        >
          {/* Email */}
          <Box>
            <Typography mb={0.5}>Email</Typography>
            <TextField placeholder="Enter your email" variant="outlined" />
          </Box>

          {/* Password */}
          <Box>
            <Typography mb={0.5}>Password</Typography>
            <TextField placeholder="Enter your password" variant="outlined" />
          </Box>

          {/* Remember and forgot password */}
          <Box display="flex" justifyContent="space-between">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: colors.greenAccent[500],
                      },
                    }}
                  />
                }
                label="Remember me"
              />
            </FormGroup>

            <Button
              sx={{ textTransform: "uppercase" }}
              variant="text"
              color="secondary"
            >
              Forgot password
            </Button>
          </Box>

          {/* Buttons */}
          <Button color="secondary" sx={{ width: "60%" }}>
            Sign in
          </Button>
        </Box>
      </Box>

      {/* Image */}
      <Box width="100%" height="100%">
        <img src={LogImg} alt="Login" loading="lazy" />
      </Box>
    </Box>
  );
};

export default Login;
