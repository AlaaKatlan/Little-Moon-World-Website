// المسار: src/pages/PolicyPage.tsx
// هذا هو الكود المحدث بتصميم جذاب وخطوط وألوان مطابقة لموقعك

import { useState, FC, SyntheticEvent } from 'react';
import { Box, Typography, Container, Tabs, Tab, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// استيراد أيقونات للتبويبات
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DescriptionIcon from '@mui/icons-material/Description';
import LoopIcon from '@mui/icons-material/Loop';

// واجهة لخصائص لوحة التبويب
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// مكون لوحة التبويب لعرض المحتوى مع حركة
const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <AnimatePresence mode="wait">
      {value === index && (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Box sx={{ p: { xs: 3, md: 4 }, textAlign: 'start', color: '#4A4A4A', lineHeight: 1.8 }}>
            <Typography component="div">{children}</Typography>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// SVG للشكل المتموج في الخلفية
const WavyBg = () => (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
        <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-150px', left: 0, width: '100%', height: 'auto' }}>
            <path d="M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,256C672,235,768,181,864,176C960,171,1056,213,1152,240C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#ffb433" fillOpacity="0.6"></path>
        </svg>
        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-100px', left: 0, width: '100%', height: 'auto' }}>
            <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,245.3C840,267,960,277,1080,261.3C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="#1e98ee" fillOpacity="0.7"></path>
        </svg>
    </Box>
);


const PolicyPage: FC = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);

  const isArabic = i18n.language === 'ar';

  // تحديد الخطوط والأحجام
  const titleFont = isArabic ? '"Tajawal", sans-serif' : '"Merienda", cursive';
  const bodyFont = isArabic ? '"Tajawal", sans-serif' : '"Iansui", sans-serif';
  const textStyle = { mb: 2, fontSize: '1.5rem', fontFamily: bodyFont };

  const policies = [
    { key: 'privacy', label: t('policyPage.privacy.title'), icon: <PrivacyTipIcon />, content: <><Typography sx={textStyle}><span dangerouslySetInnerHTML={{ __html: t('policyPage.privacy.p1') }} /></Typography><Typography sx={textStyle}>{t('policyPage.privacy.p2')}</Typography><Typography sx={textStyle}>{t('policyPage.privacy.p3')}</Typography><Typography sx={{...textStyle, mb: 0}}>{t('policyPage.privacy.p4')}</Typography></> },
    { key: 'selling', label: t('policyPage.selling.title'), icon: <DescriptionIcon />, content: <><Typography sx={textStyle}><span dangerouslySetInnerHTML={{ __html: t('policyPage.selling.p1') }} /></Typography><Typography sx={textStyle}>{t('policyPage.selling.p2')}</Typography><Typography sx={textStyle}>{t('policyPage.selling.p3')}</Typography><Typography sx={{...textStyle, mb: 0}}>{t('policyPage.selling.p4')}</Typography></> },
    { key: 'refund', label: t('policyPage.refund.title'), icon: <LoopIcon />, content: <><Typography sx={textStyle}>{t('policyPage.refund.p1')}</Typography><Typography sx={textStyle}>{t('policyPage.refund.p2')}</Typography><Typography sx={{...textStyle, mb: 0}}>{t('policyPage.refund.p3')}</Typography></> },
  ];

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  py: 6, position: 'relative' }}>
        <WavyBg />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 ,top:'10rem'}}>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}>
                    <motion.img 
                        src="/images/heros/قمور.svg" alt="قمور" 
                        style={{ width: 100, height: 100, marginInlineEnd: '20px' }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <Typography component="h1" sx={{ fontWeight: 'bold', color: '#0d47a1', fontFamily: titleFont, fontSize: {xs: '2.5rem', md: '4rem'} }}>
                        {t('policyPage.pageTitle')}
                    </Typography>
                </Box>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
                <Paper
                    elevation={10}
                    sx={{
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(8px)',
                        overflow: 'hidden',
                        border: '2px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
                    }}
                >
                    {/* تم تغيير لون خلفية التبويبات */}
                    <Box sx={{ background: '#1e98ee' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="policy tabs"
                            variant="fullWidth"
                            // تم تغيير لون المؤشر
                            TabIndicatorProps={{ style: { backgroundColor: '#ffb433', height: '4px' } }}
                        >
                            {policies.map((policy) => (
                                <Tab
                                    key={policy.key}
                                    // icon={policy.icon}
                                    // iconPosition="start"
                                    label={policy.label}
                                    sx={{
                                        fontFamily: bodyFont,
                                        fontWeight: '700',
                                        fontSize: {xs: '0.8rem', md: '2rem'},
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        py: 2.5,
                                        transition: 'all 0.3s ease',
                                        '&.Mui-selected': {
                                            color: 'white',
                                            background: 'rgba(0,0,0,0.1)'
                                        },
                                        '&:hover': {
                                            background: 'rgba(0,0,0,0.2)'
                                        }
                                    }}
                                />
                            ))}
                        </Tabs>
                    </Box>
                    
                    {policies.map((policy, index) => (
                        <TabPanel value={value} index={index} key={policy.key}>
                            {policy.content}
                        </TabPanel>
                    ))}
                </Paper>
            </motion.div>
        </Container>
    </Box>
  );
};

export default PolicyPage;
