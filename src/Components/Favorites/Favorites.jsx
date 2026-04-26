import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Favorites = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%' },
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: '12px',
        padding: { xs: '15px', md: '20px' },
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        gap: { xs: '10px', md: '25px' },
      }}
    >
      <Typography
        variant="body"
        sx={{
          color: '#000',
          fontWeight: 300,
          fontSize: { xs: '12px', sm: '14px', md: '18px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <VolunteerActivismIcon sx={{ color: pink[500], paddingRight: '5px' }} />
        Смертельное заболевание
      </Typography>
      <Typography
        variant="body"
        sx={{
          color: '#000',
          fontWeight: 300,
          fontSize: { xs: '12px', sm: '14px', md: '18px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Diversity1Icon sx={{ color: pink[500], paddingRight: '5px' }} />
        Остался год на спасение
      </Typography>

      <Typography
        variant="body"
        sx={{
          color: '#000',
          fontWeight: 300,
          fontSize: { xs: '12px', sm: '14px', md: '18px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FavoriteIcon sx={{ color: pink[500], paddingRight: '5px' }} />
        Шаг к спасению
      </Typography>
    </Box>
  );
};

export default Favorites;
