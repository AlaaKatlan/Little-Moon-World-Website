import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";

import ProductsBanner from "../components/products/banner";
import { pxToRem } from ".././shared";

const Doodles = "/images/products/doddles.svg";

const base = "/images/سلسلة العم زعتر/"; //7-10
const base2 = "/images/سلسلة الملائكة الصغار/"; //2-6
const base3 = "/images/سلسلة روضة البراءة/"; //2-6

const cover_1_1 = base + "دعسوقة.jpg";
const cover_1_2 = base + "زازا.jpg";
const cover_1_3 = base + "سرمان.jpg";
const cover_1_4 = base + "صريصران.jpg";
const cover_1_5 = base + "طنطون.jpg";
const cover_1_6 = base + "عسلية.jpg";
const cover_1_7 = base + "قزقز.jpg";
const cover_1_8 = base + "نمولة.jpg";

const cover_2_1 = base2 + "جزرون.jpg";
const cover_2_2 = base2 + "ديبوو.jpg";
const cover_2_3 = base2 + "سموكة.jpg";
const cover_2_4 = base2 + "سنجوب.jpg";
const cover_2_5 = base2 + "شوكي.jpg";
const cover_2_6 = base2 + "صابر.jpg";
const cover_2_7 = base2 + "صوصو.jpg";
const cover_2_8 = base2 + "طقطوق.jpg";
const cover_2_9 = base2 + "عصفر.jpg";

const cover_3_1 = base3 + "الأرنب جزرون.jpg";
const cover_3_2 = base3 + "الفأر سمسم.jpg";
const cover_3_3 = base3 + "الكتكوت الأسود.jpg";
const cover_3_4 = base3 + "النحلة سلمى.jpg";
const cover_3_5 = base3 + "دبدوب والنحلات.jpg";

const bookCoversListBase_1 = [
  cover_1_1,
  cover_1_2,
  cover_1_3,
  cover_1_4,
  cover_1_5,
  cover_1_6,
  cover_1_7,
  cover_1_8,
];

const bookCoversListBase_2 = [
  cover_2_1,
  cover_2_2,
  cover_2_3,
  cover_2_4,
  cover_2_5,
  cover_2_6,
  cover_2_7,
  cover_2_8,
  cover_2_9,
];

const bookCoversListBase_3 = [
  cover_3_1,
  cover_3_2,
  cover_3_3,
  cover_3_4,
  cover_3_5,
];

const Card: FC<{
  seriesName: string;
  description: string;
  footer: String;
  books: string[];
}> = ({ seriesName, description, footer, books }) => {
  return (
    <Box
      sx={{
        // height: "60px",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
        borderRight: "1px solid rgba(0, 0, 0, 0.1)",
        borderBottom: "8px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "25px",
        padding: "25px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {/* <Box
          sx={{
            backgroundColor: "#35B6BF",
            width: "165px",
            height: "160px",
            borderRadius: "25px",
            marginInlineEnd: "12px",
          }}
        ></Box> */}
        <Box sx={{ flex: "1 1 0", m: "auto" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: {
                xs: pxToRem(36),
                md: pxToRem(46),
              },
              paddingBottom: "24px",
            }}
          >
            {seriesName}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: pxToRem(20),
                md: pxToRem(30),
              },
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: {
            xs: pxToRem(20),
            md: pxToRem(30),
          },
          paddingBlock: "30px",
        }}
      >
        {footer}
      </Typography>
      <Grid container spacing={3}>
        {books.map((img) => (
          <Grid item xs={12} md={6} lg={4} key={img}>
            <Box
              onClick={() => window.open(img)}
              sx={{
                transition: "300ms",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "300ms",
                },
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                style={{
                  width: "380px",
                  height: "280px",
                  borderRadius: "12px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const AgeSpan: FC<{ age: string; handleAgeRange: (range: string) => void }> = ({
  age,
  handleAgeRange,
}) => {
  return (
    <Typography
      onClick={() => handleAgeRange(age)}
      sx={{
        cursor: "pointer",
        color: "white",
        fontSize: {
          xs: pxToRem(26),
          md: "26px",
        },
        fontWeight: "700",
        backgroundColor: "#04B9AC",
        display: "inline-block",
        borderRadius: "8px",
        padding: 0.5,
        m: 2,
        whiteSpace: "nowrap",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "300ms",
        },
      }}
    >
      الفئة العمرية {age}
    </Typography>
  );
};

const ageList = [
  "2-6",
  "7-10",
  // "الفئة العمرية 11-15 ",
  // "الفئة العمرية فوق 16",
  // "أناشيد",
  // "أفلام",
  // "تسالي",
];

const seriesList = [
  {
    name: "سلسلة العم زعتر",
    description:
      "في هذه الكتيبات يأخذنا (عم زعتر) في رحلة شائقة إلى عوالم المخلوقات الصغيرة.. ليعرفنا إلى دورة حياتها وأنماط عيشها وتكاثرها وطعامها وشرابها والكثير الكثير عنها. ",
    age: "7-10",
    footer: "16 صفحات – 8 أجزاء – 14  20 سم",
    books: bookCoversListBase_1,
  },
  {
    name: "سلسلة الملائكة الصغار",
    description:
      "عزيزي المربي عزيزتي المربية: هذه الكتيبات تجمع بين اللعب والتعلم والحكاية، لنتعاون جميعاً في الرياضيات بأسلوب مبسط للأعزاء الصغار من خلال التمارين والألعاب والحكايات الممتعة، ومن ثم راقبوا تطور ذهنية الطفل في إجراء العمليات الحسابية.",
    age: "2-6",
    footer: "8 صفحات – 5 أجزاء – 17  24 سم",
    books: bookCoversListBase_2,
  },
  {
    name: "سلسلة روضة البراءة",
    description:
      "مجموعة من القصص البسيطة للأطفال الصغار (المرحلة العمرية الأولى...) مرسومة بألوان زاهية والنص مكتوب بطريقة لطيفة تساعد الطفل على تخيل الحدث وكأنه يشاهده، الهدف منها تربوي توجيهي مقدم بأسلوب سهل غير مباشر",
    age: "2-6",
    footer: "8 صفحات – 5 أجزاء – 24 /17 سم",
    books: bookCoversListBase_3,
  },
];
export const Products: FC = () => {
  const [selectedAge, setSelectedAge] = useState<string>("");
  const Theme = useTheme();
  const isSmall = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        direction: "rtl",
        // padding: {
        //   md: "110px",
        // },
      }}
    >
      <ProductsBanner />
      <Box>
        <Box
          sx={{
            position: "relative",
            marginTop: "40px",
          }}
        >
          <img
            src={Doodles}
            style={{
              position: "absolute",
              width: "115%",
              height: "396px",
              zIndex: -99,
              left: 0,
              right: 0,
              top: 0,
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: "700",
            textAlign: "center",
            paddingTop: "140px",
            marginBottom: "40px",
          }}
        >
          أختر الفئة المطلوبة
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            // flexWrap: "wrap",
            maxWidth: {
              md: "50vw",
            },
            margin: "auto",
          }}
        >
          {ageList.map((age) => (
            <AgeSpan
              key={age}
              age={age}
              handleAgeRange={(range) => setSelectedAge(range)}
            />
          ))}
        </Stack>
        <Divider
          sx={{
            marginInline: {
              md: "110px",
            },
            marginBlock: {
              md: "44px",
            },
          }}
        />
        <Grid
          container
          spacing={6}
          sx={{
            padding: {
              md: "110px",
            },
          }}
        >
          {seriesList.map(({ name, age, description, footer, books }) => (
            <Grid item xs={12} key={name}>
              {age === selectedAge || selectedAge === "" ? (
                <Card
                  seriesName={name}
                  description={description}
                  footer={footer}
                  books={books}
                />
              ) : (
                <></>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
