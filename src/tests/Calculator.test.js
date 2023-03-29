import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line
import Calculator from '../Component/Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
