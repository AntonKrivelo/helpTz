import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import belBank from '../../icons/belBANK.png';
import belInvest from '../../icons/belInvest.png';
import Sber from '../../icons/Sber.png';
import Photo from '../../image/photo.jpg';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(to right, #97c2e8 0%, #1e88e5 30%, #5c9edc 50%, #4dd4dd 100%)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch',
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
          overflow: 'hidden',
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img className={styles.imgPhoto} src={Photo} alt="preview" />
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
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          flex: 1,
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
