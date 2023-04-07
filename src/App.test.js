import React from 'react'
import { shallow } from 'enzyme/build'
import App from './App'
import Broker from './views/setting/broker/Broker'
it('mounts App without crashing', () => {
  const wrapper = shallow(<App />)
  wrapper.unmount()
})

it('mounts Dashboard without crashing', () => {
  const wrapper = shallow(<Broker />)
  wrapper.unmount()
})
