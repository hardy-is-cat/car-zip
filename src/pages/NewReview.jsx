import React from 'react';
import { useState } from 'react';
import { IcVector } from '../../public/assets/icons';
import styled from 'styled-components';
import theme from './../styles/theme';
import { NotRecommendBtn, RecommendBtn } from '../../public/assets/images';
import { calcRem } from './../styles/theme';

export default function NewReview() {
  return (
    <ReviewWrapper>
      <PageHeader>
        <button aria-label="뒤로가기 버튼">
          <IcVector />
        </button>
        <PageTitle>리뷰 작성</PageTitle>
      </PageHeader>
      <ParkingNameWrapper>
        <ParkingName>파킹 주차장</ParkingName>
      </ParkingNameWrapper>
      <BtnWrapper>
        <RecommendBtnWrapper aria-label="추천" tabIndex={0}>
          <RecommendBtn />
        </RecommendBtnWrapper>
        <NotRecommendBtnWrapper aria-label="비추천" tabIndex={0}>
          <NotRecommendBtn />
        </NotRecommendBtnWrapper>
      </BtnWrapper>
      <ReviewInput name="reviewInput" cols="30" rows="10" placeholder="리뷰를 작성해주세요."></ReviewInput>
      <LetterNum>40/100자</LetterNum>
      <SubmitBtn aria-label="등록하기 버튼">등록하기</SubmitBtn>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  height: 844px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const PageHeader = styled.div`
  width: 100%;
  height: 57px;
  background-color: ${theme.colors.dark};
  display: flex;
  align-items: center;

  button {
    background-color: inherit;
    border: none;
    padding: 0;
    margin-left: 14px;
    width: 17px;
    cursor: pointer;
  }
`;

const PageTitle = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-right: 30px;
  line-height: 57px;
  font-weight: 700;
  letter-spacing: -0.56px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.subTitle2};
  user-select: none;
`;

const ParkingNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
`;

const ParkingName = styled.h2`
  font-weight: 700;
  font-size: ${calcRem(32)};
  margin: 20px;
`;

const BtnWrapper = styled.div`
  margin: 0 21px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  cursor: pointer;
`;

const RecommendBtnWrapper = styled.button`
  width: 100%;

  & svg {
    width: 95%;
  }
`;

const NotRecommendBtnWrapper = styled.button`
  width: 100%;
  & svg {
    width: 95%;
  }
`;

const ReviewInput = styled.textarea`
  box-sizing: border-box;
  width: 90%;
  height: 200px;
  background-color: ${theme.colors.lightGray};
  border-color: ${theme.colors.grey};
  border-radius: 11px;
  margin: 25px 20px 8px 20px;
  padding: 20px;
  font-size: ${theme.fontSizes.paragraph3};
  letter-spacing: -0.76px;
  line-height: 28px;
`;

const LetterNum = styled.p`
  box-sizing: border-box;
  font-style: ${theme.fontSizes.paragraph2};
  line-height: 19px;
  letter-spacing: -0.76px;
  width: 100%;
  padding-right: 10%;
  margin-bottom: 20px;
  text-align: right;
  user-select: none;
`;

const SubmitBtn = styled.button`
  /* width: 354px; */
  width: 90%;
  height: 49.75px;
  background-color: ${theme.colors.orangeMain};
  border: none;
  border-radius: 6px;
  margin: 0 18px;
  font-size: ${theme.fontSizes.subTitle2};
  font-weight: 700;
  color: ${theme.colors.white};
  line-height: 50px;
  letter-spacing: 0.31px;
  text-align: center;
  cursor: pointer;
`;
