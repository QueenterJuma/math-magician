import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../component/Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
