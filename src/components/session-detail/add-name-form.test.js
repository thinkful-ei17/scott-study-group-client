import React from 'react';
import { shallow } from 'enzyme';

import AddNameForm from './add-name-form';


describe('<AddNameForm />', () => {
  it('Smoke test - renders without crashing', () => {
    shallow(<AddNameForm />);
  });
});