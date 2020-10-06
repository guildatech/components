import React from 'react'
export default function Button(props) {
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    setDisabled(props.disabled);
  }, [props.disabled]);

  function callOnClick() {
    if (props.onClick) {
      props.onClick(props.data);
    }
  }

  return (
    <button
      type={props.type}
      className={props.danger ? "danger" : "botao-primario"}
      onClick={callOnClick}
      disabled={disabled}
      style={props.style}
      data={props.data}
    >
      {props.title}

      <style jsx="true">{`
        button {
          color: black;
          background: var(--guildatech-color-primary);
          border-radius: 80px;
          padding: 10px 20px;
          border: none;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
          border: 2px solid var(--guildatech-color-primary);
          cursor: pointer;
          transition: all 300ms ease;
        }
        button.danger {
          background: var(--guildatech-color-red);
          border: 2px solid var(--guildatech-color-red);
          font-weight: 900;
          color: white;
      
        }
        button[disabled] {
          opacity: 0.6;
          cursor: not-allowed;
        }
        button:hover {
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
          border: 2px solid #d1a423;
        }
        
        button.danger:hover {
          border-color: white !important
        }
      `}</style>
    </button>
  );

}
