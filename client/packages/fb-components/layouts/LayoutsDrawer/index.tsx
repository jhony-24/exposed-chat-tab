import styled from "styled-components";

const LayoutsDrawer = {
  Drawer: styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    margin-top : ${props => props.theme.layoutSizes.heightNavigator};
  `,
  Stories: styled.div`
    margin:2em auto;
    width: ${props => props.theme.layoutSizes.widthStories};
  `,
  Feed: styled.div` 
    width: ${props => props.theme.layoutSizes.widthFeeds};
    margin:2em auto 0;
  `,
  LeftRail : styled.div`
    position:fixed;
    left:0;
    bottom:0;
    display:flex;
    align-items:stretch;
    height:${props => props.theme.layoutSizes.heightMainDrawer};
  `,
  RightRail : styled.div`
    position:fixed;
    right:0;
    bottom:0;
    display:flex;
    align-items:stretch;
    height:${props => props.theme.layoutSizes.heightMainDrawer};
  `
};

export default LayoutsDrawer;