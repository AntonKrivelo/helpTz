import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const pages = ['Документы', 'Фотогалерея', 'Новости', 'FAQ', 'Отчеты'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElContacts, setAnchorElContacts] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenContacts = (event) => {
    setAnchorElContacts(event.currentTarget);
  };

  const handleCloseContacts = () => {
    setAnchorElContacts(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              О Егоре
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', fontSize: '1rem' }}>{page}</Typography>
                </MenuItem>
              ))}

              <MenuItem>
                <Link href="tel:+375292768425" sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIphoneIcon sx={{ mr: 1 }} /> +375 29 276 84 25
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="mailto:help.egor2024@gmail.com"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <EmailIcon sx={{ mr: 1 }} /> help.egor2024@gmail.com
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              minWidth: 0,
              maxWidth: '100%',
              overflow: 'hidden',
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              columnGap: '40px',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                }}
              >
                {page}
              </Button>
            ))}

            <Button
              onClick={handleOpenContacts}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontSize: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              Контакты
            </Button>

            <Menu
              anchorEl={anchorElContacts}
              open={Boolean(anchorElContacts)}
              onClose={handleCloseContacts}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <MenuItem>
                <Link href="tel:+375292768425" sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIphoneIcon sx={{ mr: 1 }} /> +375 29 276 84 25
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  href="mailto:help.egor2024@gmail.com"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <EmailIcon sx={{ mr: 1 }} /> help.egor2024@gmail.com
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              display: 'flex',
              columnGap: '20px',
              alignItems: 'center',
              flexShrink: 0,
              whiteSpace: 'nowrap',
              '@media (max-width:1300px)': {
                display: 'none',
              },
            }}
          >
            <Link
              sx={{ color: '#FFF', display: 'flex', alignItems: 'center' }}
              href="tel:+375292768425"
            >
              <PhoneIphoneIcon sx={{ mr: 1 }} />
              +375 29 276 84 25
            </Link>

            <Link
              sx={{ display: 'flex', alignItems: 'center' }}
              href="mailto:help.egor2024@gmail.com"
              underline="hover"
              color="inherit"
            >
              <EmailIcon sx={{ mr: 1 }} />
              help.egor2024@gmail.com
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
