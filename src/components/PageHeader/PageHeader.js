import React from "react";

export default function PageHeader(props) {
  return (    
      <div className='headerTitle'>
        {props.pageTitle}
      </div>
  );
}