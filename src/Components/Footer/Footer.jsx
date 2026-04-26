import { Box, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 6,
        width: '100%',
        background: 'linear-gradient(135deg, #1e88e5 0%, #4dd4dd 100%)',
        color: '#fff',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1300px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: 4,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>Свяжитесь с нами</Typography>

          <Typography sx={{ fontSize: '14px' }}>Email: help.egor2024@gmail.com</Typography>

          <Typography sx={{ fontSize: '14px' }}>Телефон: +375 29 276 84 25</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>Документы</Typography>

          <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }}>
            Политика конфиденциальности
          </Link>

          <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }}>
            Фотоотчеты
          </Link>

          <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }}>
            Отчеты о сборах
          </Link>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>Мы в соцсетях</Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: '#fff' }}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ color: '#fff' }}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ color: '#fff' }}>
              <TelegramIcon />
            </IconButton>

            <IconButton sx={{ color: '#fff' }}>
              <XIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 4,
          textAlign: 'center',
          fontSize: '12px',
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Благотворительный фонд
      </Box>
    </Box>
  );
};

export default Footer;
