import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #97c2e8 0%, #1e88e5 30%, #5c9edc 50%, #4dd4dd 100%)',
      }}
    >
      <Typography variant="h3">О Егоре</Typography>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <img src="" alt="img1"></img>
        </Box>
        <Box>
          <Typography variant="h4">Егор Ярмолович, 7 лет, г. Гродно</Typography>
          <hr sx={{ height: '2px', width: '100%', backgroundColor: 'gray' }} />
          <Typography variant="body">
            У нашего сына страшный диагноз - миодистрофия Дюшенна. Болезнь прогрессирует, и без
            лечения Егор потеряет возможность ходить. Нам нужно спасти его!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
