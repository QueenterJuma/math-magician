import React from 'react';
import renderer from 'react-test-renderer';
import FetchQuote from '../component/Quote';

describe('FetchQuote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FetchQuote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
