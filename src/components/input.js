import React from 'react'

import PropTypes from 'prop-types';

export default function Input(props) {
  
  const [invalid, setInvalid] = React.useState(false);
  const [value, setValue] = React.useState(props.value || '');

  React.useEffect(() => {
    setInvalid(props.invalid);
  }, [props.invalid]);
 
  function handleChange(e) {
    setValue(e.target.value);
    props.onChange(e);
  }


  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type={props.type}
          name={props.id}
          id={props.id}
          placeholder={props.label}
          onChange={handleChange}
          required={props.required}
          disabled={props.disabled}
          minLength={props.minLength}
          maxLength={props.maxLength}
          value={state.value}
          invalid={
            invalid ? invalid.toString() : 'false'
          }
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

        input {
          padding: 10px;
          margin: 15px 0px 10px;
          border: 1px solid var(--guildatech-color-primary);
          position: relative;
          display: block;
          width: 98%;
          outline-color: var(--guildatech-color-primary) !important;
        }
        input[invalid='true'] {
          outline-color: var(--guildatech-color-red) !important;
          border: 1px solid var(--guildatech-color-red);
        }
        input + label {
          position: absolute;
          pointer-events: none;
          left: 15px;
          margin-top: -40px;
          z-index: 8;
          transition: all 300ms;
        }
        input::placeholder {
          color: white !important;
        }
        input:focus::placeholder {
          color: var(--guildatech-color-primary) !important;
        }

        input:focus + label,
        input:not(:placeholder-shown) + label {
          font-size: 12px;
          margin-top: -55px;
          background: white;
          padding: 0px 5px;
        }
      `}</style>
    </div>
  );
  
}

Input.propTypes = {
  invalid: PropTypes.bool,
  required: PropTypes.bool,
};
