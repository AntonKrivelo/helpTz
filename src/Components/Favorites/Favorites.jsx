import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Favorites = () => {
  const items = [
    {
      icon: <VolunteerActivismIcon sx={{ color: pink[500], fontSize: 34 }} />,
      text: 'Смертельное заболевание',
    },
    {
      icon: <Diversity1Icon sx={{ color: pink[500], fontSize: 34 }} />,
      text: 'Остался год на спасение',
    },
    {
      icon: <FavoriteIcon sx={{ color: pink[500], fontSize: 34 }} />,
      text: 'Шаг к спасению',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1350px',

          backgroundColor: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(10px)',
          borderRadius: { xs: '16px', md: '22px' },

          p: { xs: 3, sm: 4 },

          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },

          gap: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-start' },

              textAlign: { xs: 'center', sm: 'left' },

              gap: 2,

              backgroundColor: 'rgba(255,255,255,0.55)',
              borderRadius: '16px',

              p: { xs: 2, sm: 2.5 },

              minHeight: { xs: 75, sm: 90, md: 100 },
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', flexShrink: 0 }}>{item.icon}</Box>

            <Typography
              sx={{
                color: '#111',
                fontWeight: 600,

                fontSize: {
                  xs: '15px',
                  sm: '16px',
                  md: '18px',
                },

                lineHeight: 1.4,
                flex: 1,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
