import React, { useState } from 'react';
import { Box, Button, Fade, Menu, MenuItem, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import SwordIcon from './SwordIcon';

import { fixedTop } from '../theme/CustomTheme';

const StyledFade = styled(Fade) `

  background-color: black;
  border-radius: 15px;
  width: 190px;

`;

const PageLink = styled(Link) `

 color: #fff;
 font-size: 14px;
 text-decoration: none;

  &:hover {
    font-weight: bold;
  }

`;

const NavPage = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {

    setAnchorEl(e.currentTarget);

  };

  const handleClose = () => {

    setAnchorEl(null);

  };

  return (
    <Box sx={{ ...fixedTop, minHeight: 75, backgroundColor: "transparent", zIndex: 5 }}>
        <Stack sx={{ minHeight: 75, px: 3 }} alignItems="center" justifyContent={{ xs: "center", md: "space-between" }} direction="row">
          <Box>
            <Link to="/"><SwordIcon /></Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button size="large" id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Other Projects</Button>
            <Menu id="fade-menu" MenuListProps={{'aria-labelledby': 'fade-button'}} anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={StyledFade}>
              <MenuItem onClick={handleClose}><PageLink to="/national-park-service-finder">NPS Finder</PageLink></MenuItem>
              <MenuItem onClick={handleClose}><PageLink to="/rehab-typing-test">Rehab Typing Test</PageLink></MenuItem>
              <MenuItem onClick={handleClose}><PageLink to="/tesla-clone">Tesla Clone</PageLink></MenuItem>
              <MenuItem onClick={handleClose}><PageLink to="/portfolio-site">My Portfolio</PageLink></MenuItem>
            </Menu>
          </Box>
        </Stack>
    </Box>
  )
}

export default NavPage;
