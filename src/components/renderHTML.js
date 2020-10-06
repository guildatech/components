import React from 'react';

export default function RenderHTML(props) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
    </div>
  );
}
