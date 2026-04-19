import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import belBank from '../../icons/belBANK.png';
import belInvest from '../../icons/belInvest.png';
import Sber from '../../icons/Sber.png';
import Photo from '../../image/photo.jpg';

const Layout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        // minHeight: { xs: 'auto', md: '350px' },
        height: '100vh',
        background: 'linear-gradient(to right, #97c2e8 0%, #1e88e5 30%, #5c9edc 50%, #4dd4dd 100%)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '15px', md: '20px' },
        boxSizing: 'border-box',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '45%' },

          height: {
            xs: '320px',
            sm: '380px',
            md: '300px',
            lg: '350px',
          },

          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.15)',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${Photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.2)',
            zIndex: 1,
          },
        }}
      >
        <img
          src={Photo}
          alt="preview"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '55%' },
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: '12px',
          padding: { xs: '15px', md: '20px' },
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: { xs: '10px', md: '15px' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '24px', sm: '28px', md: '36px' },
          }}
        >
          Спасем Егора Ярмоловича!
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', sm: '18px', md: '22px' },
          }}
        >
          Борьба с миодистрофией Дюшенна
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', sm: '18px', md: '22px' },
            backgroundColor: 'orange',
            padding: { xs: '10px 15px', md: '15px 25px' },
            borderRadius: '20px',
            fontWeight: 600,
          }}
        >
          Собрать нужно <span>$ 2 900 000</span>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            columnGap: '20px',
            rowGap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <img
            src={belBank}
            alt="belarusbank"
            style={{
              width: '150px',
              height: '100px',
              objectFit: 'contain',
            }}
          />
          <img
            src={belInvest}
            alt="belinvest"
            style={{
              width: '150px',
              height: '100px',
              objectFit: 'contain',
            }}
          />
          <img
            src={Sber}
            alt="sber"
            style={{
              width: '120px',
              height: '100px',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
