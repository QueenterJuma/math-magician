import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../component/Home.js';

describe('test home component', () => {
  it('should render correctly', () => {
    const homePage = TestRenderer.create(<Home />).toJSON();
    expect(homePage).toMatchSnapshot();
  });
  it('should have a head tag displaying "welcome to our page"', async () => {
    render(<Home />);
    const title = await screen.findByRole('heading');
    expect(title.textContent).toEqual(expect.stringContaining('Welcome to Our Page!'));
  });
});
