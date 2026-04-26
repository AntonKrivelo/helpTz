import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Favorites = () => {
  const items = [
    {
      icon: <VolunteerActivismIcon sx={{ color: pink[500] }} />,
      text: 'Смертельное заболевание',
    },
    {
      icon: <Diversity1Icon sx={{ color: pink[500] }} />,
      text: 'Остался год на спасение',
    },
    {
      icon: <FavoriteIcon sx={{ color: pink[500] }} />,
      text: 'Шаг к спасению',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(8px)',
        borderRadius: { xs: '14px', md: '18px' },
        p: { xs: 1.5, sm: 2, md: 3 },

        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr',
          md: 'repeat(3,1fr)',
        },

        gap: 2,
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1.2,

            backgroundColor: 'rgba(255,255,255,0.45)',
            borderRadius: '12px',

            px: { xs: 1.2, sm: 2 },
            py: { xs: 1.2, sm: 1.5 },

            minHeight: { xs: '58px', sm: '64px', md: '72px' },

            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {item.icon}
          </Box>

          <Typography
            sx={{
              color: '#111',
              fontWeight: 500,

              fontSize: {
                xs: '12px',
                sm: '14px',
                md: '18px',
              },

              lineHeight: 1.25,

              wordBreak: 'break-word',
              overflowWrap: 'break-word',

              flex: 1,
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Favorites;
