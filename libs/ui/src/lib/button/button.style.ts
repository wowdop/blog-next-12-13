import styled from 'styled-components';

import type * as T from './button.type';

export const getRadius = ({ $radius }: T.$Button) =>
  $radius ? `border-radius: ${$radius / 16}rem;` : '';

export const Button = styled.button`
  border: 0;
  padding: 1rem 2rem;
  transition: 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;

  ${getRadius}

  &:hover {
    transform: scale(1.25);
  }
`;
