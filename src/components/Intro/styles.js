import styled from "styled-components";

export const Container = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    overflow: hidden;

    .n {
      display: block;
      position: relative;
      width: 300px;
      height: 300px;
      overflow: hidden;
      animation-name: zoom-in;
      animation-delay: 0.5s;
      animation-duration: 3.5s;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      background-size: 4000px;
      background-position: -1950px 0;

      &::before {
        content: "";
        position: absolute;
        display: block;
        background-color: #000000;
        width: 150%;
        height: 30%;
        left: -25%;
        bottom: -27%;
        border-radius: 50%;
        z-index: 5;
        transform-origin: left center;
        background-size: 4000px;
        background-position: -1950px 0;
      }

      &[letter="N"] {
        transform-origin: 30% center;

        .helper1 {
          width: 19.5%;
          height: 100%;
          background-color: rgba(#e40913, 0.5);
          left: 22.4%;
          top: 0;
          transform: rotate(180deg);
          animation-name: fading-lumieres-box;
          animation-duration: 2s;
          animation-delay: 0.6s;
          animation-fill-mode: forwards;

          .effectBrush {
            animation-name: brush-moving;
            animation-duration: 2.5s;
            animation-fill-mode: forwards;
            animation-delay: 1.2s;

            [class*="fur-"] {
              bottom: 0;
              height: 40%;
            }
          }
        }

        .helper2 {
          width: 19.5%;
          height: 100%;
          left: 57.8%;
          top: 0;
          transform: rotate(180deg);
          overflow: hidden;

          .effectBrush {
            animation-name: brush-moving;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: 0.5s;
          }
        }

        .helper3 {
          width: 19%;
          height: 150%;
          left: 40.5%;
          top: -25%;
          transform: rotate(-19.5deg);
          box-shadow: 0px 0px 35px -12px rgba(0, 0, 0, 0.4);
          overflow: hidden;

          .effectBrush {
            animation-name: brush-moving;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: 0.8s;

            [class*="fur-"] {
              bottom: 0;
              height: 40%;
            }
          }
        }
      }

      [class*="helper"] {
        position: absolute;

        .effectBrush {
          position: absolute;
          width: 100%;
          height: 300%;
          top: 0;
          overflow: hidden;

          &::before {
            display: block;
            content: "";
            position: absolute;
            background-color: #e40913;
            width: 100%;
            height: 70%;
            box-shadow: 0px 0px 29px 24px #e40913;
          }

          [class*="fur"] {
            display: block;
            position: absolute;
            bottom: 10%;
            height: 30%;
          }

          .fur1 {
            left: 0%;
            width: 3.8%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 15%,
              rgba(0, 0, 0, 0) 81%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur2 {
            left: 3.8%;
            width: 2.8%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 10%,
              rgba(0, 0, 0, 0) 62%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur3 {
            left: 6.6%;
            width: 4.8%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 37%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur4 {
            left: 11.4%;
            width: 4%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 23%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur5 {
            left: 15.4%;
            width: 4%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 15%,
              rgba(0, 0, 0, 0) 86%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur6 {
            left: 19.4%;
            width: 2.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 27%,
              rgba(0, 0, 0, 0) 89%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur7 {
            left: 21.9%;
            width: 4%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 20%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur8 {
            left: 25.9%;
            width: 2%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 30%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur9 {
            left: 27.9%;
            width: 4%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 35%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur10 {
            left: 31.9%;
            width: 3.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 39%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur11 {
            left: 35.4%;
            width: 2%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 34%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur12 {
            left: 37.4%;
            width: 2.6%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 22%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur13 {
            left: 40%;
            width: 6%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 47%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur14 {
            left: 46%;
            width: 2%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 36%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur15 {
            left: 48%;
            width: 5.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 29%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur16 {
            left: 53.5%;
            width: 3%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 39%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur17 {
            left: 56.5%;
            width: 4.1%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 45%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur18 {
            left: 60.6%;
            width: 2.4%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 34%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur19 {
            left: 63%;
            width: 4%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 47%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur20 {
            left: 67%;
            width: 1.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 27%,
              rgba(0, 0, 0, 0) 95%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur21 {
            left: 68.5%;
            width: 2.8%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 37%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur22 {
            left: 71.3%;
            width: 2.3%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 9%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur23 {
            left: 73.6%;
            width: 2.2%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 28%,
              rgba(0, 0, 0, 0) 92%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur24 {
            left: 75.8%;
            width: 1%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 37%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur25 {
            left: 76.8%;
            width: 2.1%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 28%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur26 {
            left: 78.9%;
            width: 4.1%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 34%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur27 {
            left: 83%;
            width: 2.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 21%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur28 {
            left: 85.5%;
            width: 4.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 39%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur29 {
            left: 90%;
            width: 2.8%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 30%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur30 {
            left: 92.8%;
            width: 3.5%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 19%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .fur31 {
            left: 96.3%;
            width: 3.7%;
            background: linear-gradient(
              to bottom,
              #e40913 0%,
              #e40913 37%,
              rgba(0, 0, 0, 0) 100%
            );
          }
        }

        .effectLumieres {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation-name: showing-lumieres;
          animation-duration: 2s;
          animation-delay: 1.6s;
          animation-fill-mode: forwards;

          [class*="lamp"] {
            position: absolute;
            display: block;
            height: 100%;
            box-shadow: 0px 0px 10px 0px rgba(#e40913, 0.75);
            background: var(--color);

            &::before {
              position: absolute;
              content: " ";
              display: block;
              width: 100%;
              height: 100%;
              background: var(--color);
              box-shadow: 0px 0px 10px 0px rgba(#e40913, 0.75);
            }
          }

          .lamp1 {
            --color: #ff0100;
            z-index: 6;
            left: 0.7%;
            width: 1%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp2 {
            --color: #ffde01;
            left: 2.2%;
            width: 1.4%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp3 {
            --color: #ff00cc;
            left: 5.8%;
            width: 2.1%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp4 {
            --color: #04fd8f;
            left: 10.1%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp5 {
            --color: #ff0100;
            left: 12.9%;
            width: 1.4%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp6 {
            --color: #ff9600;
            left: 15.3%;
            width: 2.8%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp7 {
            --color: #0084ff;
            left: 21.2%;
            width: 2.5%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp8 {
            --color: #f84006;
            left: 25%;
            width: 2.5%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp9 {
            --color: #ffc601;
            left: 30.5%;
            width: 3%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp10 {
            --color: #ff4800;
            left: 36.3%;
            width: 3%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp11 {
            --color: #fd0100;
            left: 41%;
            width: 2.2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp12 {
            --color: #01ffff;
            left: 44.2%;
            width: 2.6%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp13 {
            --color: #ffc601;
            left: 51.7%;
            width: 0.5%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp14 {
            --color: #ffc601;
            left: 52.1%;
            width: 1.8%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp15 {
            --color: #0078fe;
            left: 53.8%;
            width: 2.3%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp16 {
            --color: #0080ff;
            left: 57.2%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp17 {
            --color: #ffae01;
            left: 62.3%;
            width: 2.9%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp18 {
            --color: #ff00bf;
            left: 65.8%;
            width: 1.7%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp19 {
            --color: #a601f4;
            left: 72.8%;
            width: 0.8%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp20 {
            --color: #f30b34;
            left: 74.3%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp21 {
            --color: #ff00bf;
            left: 79.8%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp22 {
            --color: #04fd8f;
            left: 78.2%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp23 {
            --color: #01ffff;
            left: 78.5%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp24 {
            --color: #a201ff;
            left: 85.3%;
            width: 1.1%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp25 {
            --color: #ec0014;
            left: 86.9%;
            width: 1.1%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp26 {
            --color: #0078fe;
            left: 88.8%;
            width: 2%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp27 {
            --color: #ff0036;
            left: 92.4%;
            width: 2.4%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }

          .lamp28 {
            --color: #06f98c;
            left: 96.2%;
            width: 2.1%;
            animation-delay: (random(200) / 100) + s;

            &::before {
              left: percentage((random(200) / 100));
              animation-delay: (random(200) / 100) + s;
            }
          }
        }
      }
    }
  }

  .netflixIntro .n [class*="helper"] .effectLumieres .lamp1,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp3,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp5,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp7,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp9,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp11,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp13,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp15,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp17,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp19,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp21,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp23,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp25,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp27 {
    animation-name: lumieres-moving-left;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }

  .netflixIntro .n [class*="helper"] .effectLumieres .lamp1::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp3::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp5::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp7::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp9::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp11::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp13::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp15::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp17::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp19::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp21::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp23::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp25::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp27::before {
    animation-name: lumieres-moving-left;
    animation-duration: 5.5s;
  }

  .netflixIntro .n [class*="helper"] .effectLumieres .lamp2,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp4,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp6,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp8,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp10,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp12,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp14,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp16,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp18,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp20,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp22,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp24,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp26,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp28 {
    animation-name: lumieres-moving-right;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }

  .netflixIntro .n [class*="helper"] .effectLumieres .lamp2::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp4::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp6::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp8::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp10::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp12::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp14::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp16::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp18::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp20::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp22::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp24::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp26::before,
  .netflixIntro .n [class*="helper"] .effectLumieres .lamp28::before {
    animation-name: lumieres-moving-right;
    animation-duration: 5.5s;
  }

  @keyframes brush-moving {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes fading-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes lumieres-moving-right {
    0% {
      transform: translate(0);
    }
    40% {
      transform: translate(-10px) scaleX(1);
    }
    50% {
      transform: translate(-60px);
    }
    100% {
      transform: translate(-120px) scaleX(3);
    }
  }

  @keyframes lumieres-moving-left {
    0% {
      transform: translate(0);
    }
    40% {
      transform: translate(10px) scaleX(1);
    }
    50% {
      transform: translate(60px);
    }
    100% {
      transform: translate(120px) scaleX(3);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(15);
    }
  }

  @keyframes showing-lumieres {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fading-lumieres-box {
    0% {
      background-color: rgba(#e40913, 0.5);
    }
    100% {
      background-color: rgba(#e40913, 0);
    }
  }
`
