import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import { ClipWrapper, LinkWrapper } from "./Clip.style";

//  define the example data
import backImage from "assets/images/player/clip.png";

const data: ClipProps[] = [
  {
    backgroundImage: backImage,
    title: "Fraser McInnes - Top 5 Marks of 2021",
    content: "272 Views   108 Likes   3 days ago",
  },
  {
    backgroundImage: backImage,
    title: "Fraser McInnes - Top 5 Marks of 2021",
    content: "272 Views   108 Likes   3 days ago",
  },
  {
    backgroundImage: backImage,
    title: "Fraser McInnes - Top 5 Marks of 2021",
    content: "272 Views   108 Likes   3 days ago",
  },
  {
    backgroundImage: backImage,
    title: "Fraser McInnes - Top 5 Marks of 2021",
    content: "272 Views   108 Likes   3 days ago",
  },
  {
    backgroundImage: backImage,
    title: "Fraser McInnes - Top 5 Marks of 2021",
    content: "272 Views   108 Likes   3 days ago",
  },
];

// const setting for react slick
const NextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "100px",
      }}
      onClick={onClick}
    />
  );
};

const BeforeArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "100px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = () => {
  const onHandleSeeAll = () => {
    alert();
  };

  return (
    <ClipWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700}>
          {"Featured Clips"}
        </Text>
        <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        />
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <Slider {...settings}>
            {data.map((item: ClipProps, index: number) => {
              return <ClipCard {...item} key={index} />;
            })}
          </Slider>
        </Col>
      </Row>
    </ClipWrapper>
  );
};

export default ClipView;