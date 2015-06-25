var chai = require('chai');
var expect = chai.expect;
var React = require('react/addons');
var renderTarget, component;

describe('intensity-bar component', () => {
  beforeEach(() => {
    var ComponentClass = require('../app/components/intensity-bar.react.js');
    renderTarget = document.getElementsByTagName('body')[0];
    var renderedComponent = React.createElement(ComponentClass, renderTarget);
    component = renderedComponent;
  });

  afterEach(() => {
    React.unmountComponentAtNode(renderTarget);
    component = null;
  });

  it('should be able to render', () => {
    expect(component).not.to.equal(null);
  });
});
