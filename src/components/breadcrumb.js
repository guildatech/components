import React from 'react';
export default function Breadcrumb(props) {

  return props.path ? (
    <div>
      <small>
        Voce está em <b>{props.path}</b>
      </small>
      <style jsx="true">{`
        small {
          color: #0b0b0b;
        }
      `}</style>
    </div>
  ) : null;
  
}
