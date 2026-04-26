import { Box, Typography, Collapse } from '@mui/material';
import { useState } from 'react';

const Questions = () => {
  const [open, setOpen] = useState(null);

  const items = [
    {
      q: 'Как подтвердить что у Егора миодистрофия Дюшенна',
      a: 'Это благотворительный сбор на лечение ребёнка с редким заболеванием.',
    },
    {
      q: 'Куда идут деньги?',
      a: 'Все средства идут напрямую на лечение, диагностику и реабилитацию.',
    },
    {
      q: 'Как узнать, что моя помощь дошла?',
      a: 'Да, можно поделиться сбором или помочь информационно.',
    },
    {
      q: 'Безопасно ли переводить?',
      a: 'Да, реквизиты проверены и используются только для лечения.',
    },
  ];

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Box
      sx={{
        width: '100%',
        mt: 6,
        px: { xs: 2, sm: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          sx={{
            whiteSpace: 'nowrap',
            fontWeight: 700,
            color: '#74b0f5',
            fontSize: { xs: '24px', sm: '32px', md: '42px' },
          }}
        >
          Вопросы и ответы
        </Typography>

        <Box
          sx={{
            flex: 1,
            height: '2px',
            backgroundColor: 'rgba(69, 179, 230, 0.5)',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {items.map((item, index) => (
          <Box key={index}>
            <Box
              onClick={() => handleToggle(index)}
              sx={{
                cursor: 'pointer',
                padding: { xs: 2, sm: 2.5 },
                borderRadius: '14px',
                background: 'linear-gradient(135deg,#1e88e5,#4dd4dd)',
                color: '#fff',
                fontWeight: 600,
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                }}
              >
                {item.q}
              </Typography>
            </Box>

            <Collapse in={open === index}>
              <Box
                sx={{
                  mt: 1,
                  padding: { xs: 2, sm: 2.5 },
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '13px', sm: '15px', md: '16px' },
                    color: '#333',
                    lineHeight: 1.6,
                  }}
                >
                  {item.a}
                </Typography>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Questions;
