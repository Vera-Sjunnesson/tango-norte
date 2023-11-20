import React from 'react';
import styled from 'styled-components/macro';
import { ArrowButton } from './Buttons';

export const ListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 400px;
  width: 100%;
  background: white;
  padding: 0px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 179px;
    width: 80%;
    height: 65%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    left: 100px;
    top: 170px;
    width: 70%;
    height: 70%;
    padding: 20px;
  }
`

export const ListHeader = styled.h5`
  padding: 15px;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  & :nth-child(odd of .noted) {
    background: ${(props) => (props.$dark ? '#80b6bf' : '#e78431a6')};
  }

  & :nth-child(even of .noted) {
    background: white;
  }

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
  }

  @media (min-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
  }
`

export const ListItemCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 10px;
  gap: 15px;

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
  }
`

export const DateText = styled.p`
  color: white;
  width: 277px;
  background: #000000d6;
  width: 100%;
  padding-left: 5px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }

  @media (min-width: 1280px) {
    width: auto;
    align-self: flex-start;
    padding: 0px 5px;
  }
`

export const StyledH5 = styled.h5`
  color: #222222;
  width: 100%;
`

export const ListDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const ListDetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 60%;
  padding-left: 5px;
  margin-right: 15px;
`

export const ListParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`

export const FacititatorDetails = styled.p`
  font-weight: 700;
  color: #222222;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 277px;
  }

  @media (min-width: 1280px) {
    width: 277px;
  }
`

export const ListSection = ({ loading, list, isDark }) => {
  return (
    <ListWrapper>
      <ListHeader>STOCKHOLM</ListHeader>
      <ListContainer $dark={isDark}>
        {!loading && list.map((listItem) => (
          <ListItemCard className="noted" key={listItem.id}>
            <DateText>{listItem.starts}</DateText>
            <StyledH5>{listItem.title}</StyledH5>
            <ListDetailsSection>
              <ListDetailsSpan>
                <ListParagraph>{listItem.body}</ListParagraph>
                <FacititatorDetails>{listItem.facilitator}</FacititatorDetails>
              </ListDetailsSpan>
              <ArrowButton isSmall />
            </ListDetailsSection>
          </ListItemCard>
        ))}
        {loading
      && (
        <ListItemCard>
          <ListParagraph>Loading...</ListParagraph>
        </ListItemCard>
      )}
      </ListContainer>
    </ListWrapper>
  );
}
