import { Box, Typography, Button, Collapse } from '@mui/material';
import { useState } from 'react';

const Helping = () => {
  const [openCard, setOpenCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { title: 'Сбербанк', text: 'Номер карты: 1234 5678 9012 3456' },
    { title: 'ЕРИП', text: 'Путь: Благотворительность → Помощь детям → Егор' },
    { title: 'Беларусбанк', text: 'BY12 AKBB 3012 0000 0000 0000 0000' },
    { title: 'Прямой перевод', text: 'Получатель: Иван Иванов' },
  ];

  const extraCards = [
    { title: 'PayPal', text: 'example@email.com' },
    { title: 'Wise', text: 'IBAN: LT12 1234 5678 9012' },
    { title: 'Криптовалюта', text: 'BTC адрес: 1A1zP1...' },
  ];

  const handleOpen = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <Box
      sx={{
        mt: 5,
        px: { xs: 2, sm: 4, md: 8 },
        maxWidth: '1300px',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          width: '100%',
          mb: 4,
        }}
      >
        <Box sx={{ flex: 1, height: '2px', backgroundColor: 'rgba(69, 179, 230, 0.5)' }} />

        <Typography
          sx={{
            whiteSpace: 'nowrap',
            fontWeight: 700,
            color: '#74b0f5',
            fontSize: { xs: '24px', sm: '32px', md: '42px' },
          }}
        >
          Как помочь
        </Typography>

        <Box sx={{ flex: 1, height: '2px', backgroundColor: 'rgba(69, 179, 230, 0.5)' }} />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(4,1fr)',
          },
          gap: 3,
        }}
      >
        {cards.map((card, index) => (
          <Box key={index}>
            <Box
              onClick={() => handleOpen(index)}
              sx={{
                background: 'linear-gradient(135deg,#1e88e5,#4dd4dd)',
                color: '#fff',
                p: 3,
                borderRadius: '18px',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
            >
              <Typography>{card.title}</Typography>
            </Box>

            <Collapse in={openCard === index}>
              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  borderRadius: '14px',
                  backgroundColor: '#f5f9ff',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
                }}
              >
                <Typography sx={{ fontSize: '14px', color: '#333' }}>{card.text}</Typography>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>

      <Collapse in={showAll}>
        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(3,1fr)',
            },
            gap: 3,
          }}
        >
          {extraCards.map((card, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                borderRadius: '18px',
                backgroundColor: '#eaf4ff',
                boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 1 }}>{card.title}</Typography>
              <Typography sx={{ fontSize: '14px' }}>{card.text}</Typography>
            </Box>
          ))}
        </Box>
      </Collapse>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button variant="contained" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Скрыть реквизиты' : 'Посмотреть все реквизиты'}
        </Button>
      </Box>
    </Box>
  );
};

export default Helping;
