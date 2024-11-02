import React from 'react'

import {CardContainer,Content,HasInfo,ImageBackGround,PostInfo,
    UserInfo,UserPicturer
} from './styles'
import { FiThumbsUp } from 'react-icons/fi'
import CardImage from '../../assets/card.jpg'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackGround src={CardImage}/>
            <UserInfo>
                <UserPicturer src='https://avatars.githubusercontent.com/u/87581372?v=4'/>
                <div>
                    <h4>Luiz Ricardo</h4>
                    <p>Há 10 Minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto foi feito em bootcamp de html e css</p>
                <strong>Saiba mais..</strong>
            </PostInfo>
            <HasInfo>
                <h4>Hyml Css e JavaScript</h4>
                <p>
                    <FiThumbsUp />  10         
                </p>
            </HasInfo>
    </CardContainer>
  )
}

export { Card }