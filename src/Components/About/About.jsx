import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 3, md: 4 },
        width: '100%',
        maxWidth: '1300px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 8 },
        background: 'linear-gradient(135deg, #97c2e8 0%, #1e88e5 35%, #5c9edc 65%, #4dd4dd 100%)',
        borderRadius: { xs: '14px', md: '20px' },
        padding: { xs: '16px', sm: '24px', md: '40px' },
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        mt: { xs: 3, md: 5 },
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          width: '100%',
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: '2px',
            backgroundColor: 'rgba(255,255,255,0.5)',
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: '24px', sm: '32px', md: '42px' },
            fontWeight: 700,
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          О Егоре
        </Typography>

        <Box
          sx={{
            flex: 1,
            height: '2px',
            backgroundColor: 'rgba(255,255,255,0.5)',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1, width: '100%' }}>
          <Box
            component="img"
            src=""
            alt="img1"
            sx={{
              width: '100%',
              height: { xs: '260px', sm: '340px', md: '420px' },
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: { xs: 2, md: 3 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '22px', sm: '28px', md: '36px' },
              fontWeight: 700,
              lineHeight: 1.3,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Егор Ярмолович,
            <br />7 лет, г. Гродно
          </Typography>

          <Box
            sx={{
              height: '2px',
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.4)',
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: '15px', sm: '17px', md: '20px' },
              lineHeight: 1.7,
              textAlign: 'justify',
            }}
          >
            У нашего сына страшный диагноз — миодистрофия Дюшенна. Болезнь прогрессирует, и без
            лечения Егор потеряет возможность ходить. Нам нужно спасти его!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
