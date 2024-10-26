import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img
              width="25px"
              src="https://cdn-icons-png.flaticon.com/512/4904/4904233.png"
              alt=""
            />
            <span>Photo</span>
          </button>
          <button>
            <img
              width="25px"
              src="https://cdn-icons-png.flaticon.com/128/6878/6878693.png"
              alt=""
            />
            <span>Video</span>
          </button>
          <button>
            <img
              width="25px"
              src="https://cdn-icons-png.flaticon.com/128/4047/4047371.png"
              alt=""
              n
            />
            <span>Event</span>
          </button>
          <button>
            <img
              width="25px"
              src="https://cdn-icons-png.flaticon.com/512/5097/5097544.png"
              alt=""
            />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>

      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <HiOutlineDotsHorizontal />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-images.jfif" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"
                  alt=""
                />
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"
                  alt=""
                />
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"
                  alt=""
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <SlLike className="icons" />
              <span>Like</span>
            </button>
            <button>
              <MdOutlineInsertComment className="icons" />
              <span>Comments</span>
            </button>
            <button>
              <RiShareForwardLine className="icons" />
              <span>Share</span>
            </button>
            <button>
              <IoIosSend className="icons" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

export default Main;
const Container = styled.div`
  grid-area: main;
  li {
    list-style: none;
  }
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: 0;
      color: rgba(0, 0, 0, 0.6);
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 8px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  display: flex;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      text-transform: capitalize;
      overflow: hidden;
      span {
        text-align: left;
        &:nth-child(1) {
          font-size: 14px;
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    top: 5px;
    right: 12px;
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 26px;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      gap: 5px;
      background: transparent;
      border: 0;
      img {
        width: 25px;
        margin-left: -15px;
      }
      &:nth-child(1){
        margin-left: 20px;
      }
    }

  }
`;

const SocialActions = styled.div`

  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding:4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 7px;
    color: #0a66c2;
    border: 0;
    background: transparent;

    & > .icons{
      font-size: 20px;
      
    }
    span{
      margin-left:4px;
    }
    @media (min-width:768px){
    span{
      margin-left: 8px;
    }
    }
  }
`
