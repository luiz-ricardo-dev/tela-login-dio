import React from 'react'

import { Container, NameText, Progress, UserPicture} from './styled';

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
      <UserPicture src={image} />

      <div>
          <NameText>{nome}</NameText>
          <Progress percentual={percentual}></Progress>
      </div>
      
    </Container>
     

  )
}

export {UserInfo};
