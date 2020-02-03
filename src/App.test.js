import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it("renders correctly", () => {
  const wrapper = shallow(
    <App />
  );

  expect(wrapper).toMatchSnapshot();
});

it("check lifecycle", () => {
  const wrapper = mount(
    <App />
  );

  expect(wrapper).toMatchSnapshot();
});

it("renders childrens correctly", () => {
  const wrapper = render(
    <App />
  );

  expect(wrapper).toMatchSnapshot();
});