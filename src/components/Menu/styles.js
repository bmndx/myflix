import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 94px;
   z-index: 100;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   padding-left: 5%;
   padding-right: 5%;
   background: var(--black);
   border-bottom: 2px solid var(--primary);
`;

export const Nav = styled.div`
  img {
   max-width: 168px;
  }
  @media (max-width: 800px) {
     img {
        max-width: 105px;
        height: 40px;
        justify-content: center;
     }
   }
`;

export const ButtonLink = styled.div`
   a {
      color: var(--white);
      border: 1px solid var(--white);
      box-sizing: border-box;
      cursor: pointer;
      padding: 16px 24px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      outline: none;
      border-radius: 5px;
      text-decoration: none;
      display: inline-block;
      transition: opacity .3s; 
   }
   
   @media (max-width: 800px) {
      a {
         position: fixed;
         left: 0;
         right: 0;
         bottom: 0;
         background: var(--primary);
         border-radius: 0;
         border: 0;
         text-align: center;
      }
   }
`;