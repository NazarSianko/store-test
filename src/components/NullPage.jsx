import React, { Component } from 'react';
import BackArrow from './BackArrow';


export default class NullPage extends Component {
  render() {
   
   
    return (
        <div className='null-page'>
           
             <BackArrow className={'back-arrow-null'}/>
        <div className="null-page-title">This Page does not exist</div>;
        </div>
      )
}
}
