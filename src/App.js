import React from 'react';

const App = () => {
  const element1 = React.createElement('h1', {className: 'title'}, 'Topic Coverd');
  const element2 = React.createElement('p', {className: 'description'}, 'The following is a lst of all topics cover in the MDN learing area.');
  const element3 = React.createElement('a',{className:'anc'},'Getting started with the web')
  const element4= React.createElement('p',{className:'description'},'Provide a perticular introduction to web development for complete beinners.')
  const element5 = React.createElement('a',{className:'anc'},'HTML-Structuring the web')
  const element6= React.createElement('p',{className:'description'},'Html is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.')
  const element7 = React.createElement('a',{className:'anc'},'CSS-styling the the web')
  const element8= React.createElement('p',{className:'description'},'CSS is language that we use to control our web content style and layout ,as well as adding behaviour like animation .This provides comprehensive covrage of CSS .')
  return (
    <div className='Container'>
      {element1}
      {element2}
      {element3}
      {element4}
      {element5}
      {element6}
      {element7}
      {element8}
    </div>
  );
};

export default App;
