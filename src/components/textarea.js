import React from 'react';

export default function Textarea(props) {
  const [invalid, setInvalid] = React.useState(false);

  React.useEffect(() => {
    setInvalid(props.invalid);
  }, [props.invalid])

  return (
    <div className="field">
      <div className="control">
        <textarea
          className="textarea"
          name={props.id}
          id={props.id}
          placeholder={props.label}
          onChange={props.onChange}
          required={props.required}
          minLength={props.minLength}
          maxLength={props.maxLength}
          invalid={
            invalid ? invalid.toString() : 'false'
          }
          value={props.value}
        />
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>

      <style jsx="true">{`
        .field,
        .field.control {
          position: relative;
          display: block;
        }

        textarea {
          padding: 10px;
          margin: 15px 0px 10px;
          border: 1px solid var(--guildatech-color-primary);
          position: relative;
          display: block;
          width: 98%;
          outline-color: var(--guildatech-color-primary) !important;
        }
        textarea[invalid='true'] {
          outline-color: var(--guildatech-color-red) !important;
          border: 1px solid var(--guildatech-color-red);
        }
        textarea + label {
          position: absolute;
          pointer-events: none;
          left: 15px;
          margin-top: -40px;
          z-index: 8;
          transition: all 300ms;
        }
        textarea::placeholder {
          color: white !important;
        }
        textarea:focus::placeholder {
          color: var(--guildatech-color-primary) !important;
        }

        textarea:focus + label,
        textarea:not(:placeholder-shown) + label {
          font-size: 12px;
          margin-top: -70px;
          background: white;
          padding: 0px 5px;
        }
      `}</style>
    </div>
  );
  
}