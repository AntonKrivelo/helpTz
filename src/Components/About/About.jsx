import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',

        background: 'linear-gradient(135deg, #97c2e8 0%, #1e88e5 35%, #5c9edc 65%, #4dd4dd 100%)',

        borderRadius: '20px',

        padding: { xs: '20px', md: '40px' },

        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',

        marginTop: '40px',

        color: '#fff',

        overflow: 'hidden',
      }}
    >
      <Typography variant="h3">О Егоре</Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          width: '100%',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <img
            src=""
            alt="img1"
            style={{
              width: '100%',
              borderRadius: '12px',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h4">
            Егор Ярмолович, <br />7 лет, г. Гродно
          </Typography>

          <Box
            sx={{
              height: '2px',
              width: '100%',
              backgroundColor: 'gray',
            }}
          />

          <Typography sx={{ textAlign: 'justify' }} variant="body1">
            У нашего сына страшный диагноз - миодистрофия Дюшенна.
            <br />
            Болезнь прогрессирует, и без лечения Егор потеряет возможность ходить. Нам нужно спасти
            его!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
