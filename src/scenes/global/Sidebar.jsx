import React, { useState } from "react";

import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

// MUI
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// Link
import { Link } from "react-router-dom";

// Tokens
import { tokens } from "../../theme";

// Icons
import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  Person,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  Map,
} from "@mui/icons-material";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-wrapper": {
          background: "transparent !important",
        },
        "& .pro-icon-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868DFB !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870FA !important",
        },
      }}
    >
      <ProSidebar></ProSidebar>
    </Box>
  );
};

export default Sidebar;
