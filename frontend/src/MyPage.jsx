import React from "react";
import Header from "./components/Header";
import UpDownContainer from "./components/layout/UpDownContainer";
import RowContainer from "./components/layout/RowContainer";
import ColContainer from "./components/layout/ColContainer";
import MyPageCard from "./components/MyPageCard";
import Burger from "./assets/img/burger.png";
import GapH from "./components/layout/GapH";
import GapW from "./components/layout/GapW";
import BoldMedium from "./components/text/BoldMedium";
import BoldLarge from "./components/text/BoldLarge";
import Button4 from "./components/button/Button4";

function MyPage() {
  return (
    <div>
      <Header />
      <UpDownContainer>
        <RowContainer
          justify="start"
          height="calc(100vh * 29.8 / 100)"
          background="#F0F0E8"
        >
          <ColContainer width="18.3%" justify="start">
            <GapH height="30.8%" />
            <img
              src={Burger}
              alt="burger"
              style={{
                width: "79px",
              }}
            />
          </ColContainer>
          <ColContainer
            width="81.7%"
            height="100%"
            justify="start"
            align="start"
          >
            <GapH height="22.3%" />
            <BoldMedium>MY PAGE</BoldMedium>
            <GapH height="15.4%" />
            <RowContainer justify="start">
              <BoldLarge>배진호 님의 마이페이지입니다</BoldLarge>
              <GapW width="10.1%" />
              <Button4>
                <BoldMedium color="white">회원정보</BoldMedium>
              </Button4>
            </RowContainer>
          </ColContainer>
        </RowContainer>
        <ColContainer
          height="calc(100vh * 70.2 / 100 - 60px)"
          align="start"
          width="1170px"
          style={{ alignSelf: "center" }}
        >
          <BoldMedium>MY CAKE</BoldMedium>
          <GapH />
          <RowContainer
            width="100%"
            style={{ justifyContent: "space-between" }}
          >
            <MyPageCard title="title1" />
            <MyPageCard title="title2" />
          </RowContainer>
        </ColContainer>
      </UpDownContainer>
    </div>
  );
}

export default MyPage;