import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/할 일이 없어요!/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeeptJS: 실제 브라우저에서 사용자 테스트 실행 가능.
});
