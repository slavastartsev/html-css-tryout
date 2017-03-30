import * as React from "react";
import {expect} from "chai";
import {Simulate, scryRenderedDOMComponentsWithTag, isCompositeComponent, isElementOfType, renderIntoDocument} from "react-addons-test-utils";
import {Header} from "../components/Header";
import * as ReactTestUtils from "react-dom/lib/ReactTestUtils";
let assert = require('assert');

describe('../components/Header', () => {
  let links = [
    {
      icon: "fa fa-eye",
      text: "версия для слабовидящих"
    },
    {
      icon: "fa fa-map-marker",
      text: " мое местоположение: сыктывкар"
    },
    {
      icon: "fa fa-user",
      text: "старцев вячеслав александрович"
    },
    {
      icon: "",
      text: "выход"
    }
  ];

  it('should render', () => {
    const header = renderIntoDocument(
      <Header links={links}/>
    );

    expect(header).toExist;
  });

  it('should exist', () => {
    const header = renderIntoDocument(
      <Header links={links}/>
    );

    expect(isCompositeComponent(header)).to.exist;
  });

  it('Header instance is created properly', () => {
    assert.equal(isElementOfType(<Header />, Header), true);
  });

  it('Header list item test', () => {
    const header = renderIntoDocument(
      <Header links={links}/>
    );
    let li = scryRenderedDOMComponentsWithTag(header, 'li');
    expect(li.length == 4).to.be.true;
  });
});
