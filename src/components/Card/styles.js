import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3b4651;
    position: relative;
    margin-bottom: 24px;

`

export const ImageBackGround = styled.img`
    width: 100%;
    height: 180px;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-left: 10px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    margin-left: 10px;

    div{
        margin-left: 12px;
    }
    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 780;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }
    p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 480;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }

`

export const UserPicturer = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    border: 3px solid #FFFFFF;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;
    margin-left: 10px;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 780;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }
    p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 480;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
`

export const HasInfo = styled.div `
    margin-top: 12px;
    margin-left: 10px;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 780;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF80;
    }
    p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 780;
        font-size: 16px;
        line-height: 22px;
        
    }
`