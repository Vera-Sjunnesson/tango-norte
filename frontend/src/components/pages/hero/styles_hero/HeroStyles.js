import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

/* HERO */
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 100%;
    display: block;
    position: relative;
    height: 1863px;
    background: var(--secondary-background-color);
  }

  @media (min-width: 1280px) {
    width: 100%;
    position: relative;
    height: 100vh;
    display: block;
    background: var(--secondary-background-color);
    overflow: hidden;
  }
`

export const LoaderContainer = styled.div`
  height: 100vh;
`

export const HeroWrapper = styled.div`
  display: contents;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    top: 132px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }

  @media (min-width: 1280px) {
    position: absolute;
    width: 100%;
    top: 16vh;
    height: 84vh;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

/* FEATURED CAROUSEL */
export const CarouselContainer = styled.div`
  width: 100%;
  height: 600px;
  margin: auto;
  position: relative;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    height: 80%;
    box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  }
`

export const NewsContainer = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 998;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 998;
  }

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
  }
`

export const TagLine = styled.h4`
  font-size: 20px;
  line-height: 30px;
  color: white;
  font-weight: 500;
  background: #0000007a;
  padding: 2px 10px 5px 10px;
  letter-spacing: .2rem;
  font-weight: 500;

  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 25px;
    line-height: 43.2px;
    padding: 2px 10px;
  }

  @media (min-width: 1280px) {
    font-size: 25px;
    line-height: 43.2px;
    padding: 2px 10px;
  }
`

export const Article = styled.article`
  position: relative;
  width: 100%;
  height: 600px;
  background-position: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    background-position: top;
  }

  @media (min-width: 1280px) {
    display: block;
    height: 100%;
    background-position: top;
  }
`

export const FeaturedTextCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-30%);
  width: 350px;
  padding: 5px 0px 10px 10px;
  gap: 10px;
  width: 90%;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    /* top: 75%; */
    top: auto;
    bottom: 45px;
    left: 45px;
    transform: none;
    padding: 5px 4px 10px 10px;
    gap: 14px;
    width: 50%;
  }

  @media (min-width: 1280px) {
    position: absolute;
    /* top: 75%; */
    top: auto;
    bottom: 45px;
    left: 45px;
    transform: none;
    width: auto;
    padding: 5px 4px 10px 10px;
    gap: 14px;
    align-items: flex-start;
  }
`

export const FeaturedHeading = styled.h1`
  margin: 0px;
  font-weight: 900;
  padding: 0;
  letter-spacing: .2rem;

  @media (min-width: 744px) and (max-width: 1280px) {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-align: left;
    line-height: 55px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    letter-spacing: .3rem;
  }
`

export const FeaturedText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 25px;
  width: 100%;
  font-size: 16px;
  color: #ffffff;

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0;
    width: 100%;
  }

  @media (min-width: 1280px) {
    padding: 0;
    width: 648px;
  }

  & em {
    font-weight: 900;
  }
`

/* MENU BUTTONS */
export const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
gap: 35px;
width: 80%; 
left: 0;
right: 0;
margin: auto;
margin-top: 40px;
margin-bottom: 40px;

@media (min-width: 744px) and (max-width: 1280px) {
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

@media (min-width: 1280px) {
  flex-direction: row;
  width: 1010px;
  gap: 46px;
  height: 20%;
  margin-top: 40px;
  margin-bottom: 40px;
}
`

export const MenuButtonContainer = styled(NavLink)`
  background-size: cover;
  background-position: top;
  height: 175px;
  width: 100%;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  color: var(--primary-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  transition: all 0.3s ease-in-out;

  .arrow{
    width: 30px;
    transition: all 0.3s ease;
    border: 1px solid #fff;
    position: relative;
    background: #fff;
    right: -14px;
    border-radius: 70px;
  }

  &:hover .arrow {
    width: 55px;
  }

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 250px;
    width: 50%;
  }
  @media (min-width: 1280px) {
    height: 100%;
  }
`
export const TextContainer = styled.span`
  height: 50px;
  width: 100%;
  color: var(--primary-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: var(--primary-blue);
  font-weight: 500;
  color: white;
  text-decoration: none;
  position: relative;
  box-sizing: border-box;
  padding: 10px 0;
  letter-spacing: .2rem;
  font-family: var(--secondary-font-family)
`

export const Arrow = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: flex-start;
`

export const IntroTextCard = styled.div`
  background: var(--primary-blue);
  box-shadow: 7px 7px 19px 0px rgba(0,0,0,0.50);
  padding: 30px 20px;
  margin: 0px 0 30px 0;
  display: flex;
  flex-wrap: wrap;

  .h5 {
    color: var(--primary-color);
  }
`

export const IntroTextParagraph = styled.p`
  color: var(--primary-color);
  line-height: 25px;
`
