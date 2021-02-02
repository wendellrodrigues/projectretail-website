import React from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"
import { BeginButtonText } from "../../../components/styles/TextStyles"

export default function IpadBeginScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <Welcome>Welcome</Welcome>
        <ButtonWrapper>
          <PurpleButton>
            <Title>Begin</Title>
          </PurpleButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Screen>
  )
}

const Screen = styled.div`
  width: 439px;
  height: 328px;
  background: white;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

const Welcome = styled.p`
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  //height: 100%;
  position: absolute;
  top: 40%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;
`

const PurpleButton = styled.div`
  width: 120px;
  height: 30px;
  position: absolute;
  top: 50%;
  background: #6a80fb;
  border-radius: 8px;
  display: grid;
  justify-content: center;
  align-items: center;
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
  }
  :hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }
`

const Title = styled(BeginButtonText)``
