import styled from "styled-components";
import {Link} from 'react-router-dom';

import { keyframes } from "styled-components";
const slideAnimation = keyframes`
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0);
  }
`;

export const CompleteSidebarContainer = styled.div``;

export const PcSidebarConatiner = styled.nav`
  min-height: 95vh;
  width: 250px;
  background-color: ${(props) =>
    props.theme === true ? "#212429" : "#d6d6d6"};
  color: ${(props) => (props.theme === true ? "#a4a4a4" : "#212429")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media all and (max-width: 768px) {
    display: none;
  }
`;

// Responsive Sidebar

export const MobileSidebarContainer = styled.nav`
  position: absolute;
  left: ${(props) => (props.mobile === "true" ? "0px" : "-800px")};
  min-height: 95vh;
  width: 250px;
  background-color: ${(props) =>
    props.theme === true ? "#212429" : "#adadad"};
  color: ${(props) => (props.theme === true ? "#a4a4a4" : "#212429")};
  transition: left 0.5s ease-in-out;
  animation: ${slideAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media all and (min-width: 768px) {
    display: none;
  }
`;

// Common Menu Design
export const ComSideTextContainer = styled.div`
  overflow: auto;
  padding: 25px 15px 25px 15px;
`;

export const MiniSideHeading = styled.p`
  font-weight: bold;
  margin: 25px 0px 25px 0px;
  font-size: 15px;
  font-stretch: extra-condensed;
`;

export const SideIconTextArrowContainer = styled(Link)`
display: flex;
align-items: center;
justify-content: space-between;
background: none;
border: none;
text-decoration: none;
color: ${(props) => (props.theme === true ? "#a4a4a4" : "#212429")};
width: 100%;
margin: 20px 0px 20px 0px;
`;

export const SideIconTextContainer = styled.div`
display: flex;
align-items: center;
margin: 10px 0px 10px 0px;
`;

export const SideMenuTextPara = styled.p`
margin-left: 15px;
font-size: 17px;
&:hover{
  color: white;
}
`;

export const SideLowerIconContainer = styled.div`
  
`;

// Footer Sider

export const BottomSiderTextContainer = styled.div`
  background-color: #353a40;
  padding: 15px 10px 15px 10px;
  height: 60px;
`;

export const BottomText = styled.p`
  line-height: 25px;
  font-size: ${(props) => (props.big === true ? "20px" : "15px")};
`;
