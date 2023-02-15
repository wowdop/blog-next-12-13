import * as S from './button.style';
import type * as T from './button.type';

const Button = ({ children, radius }: T.Button) => {
  return <S.Button $radius={radius}>{children}</S.Button>;
};

export { Button };
