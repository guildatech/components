/*
https://ckeditor.com/docs/ckeditor4/latest/examples/react.html#/
*/
import React, { Fragment } from 'react';

import CKEditor from 'ckeditor4-react';

export default function GTEditor(props) {

  const [data, setData] = React.useState(props.value || '');
  const [invalid, setInvalid] = React.useState(false);
  const [id, setId] = React.useState('_' + Math.random().toString(36).substr(2, 9));

  React.useEffect(() => {
    setInvalid(props.invalid);
    setData(props.value);
    // CKEditor.instances.editor1.setData(props.value);
  }, [props.invalid, props.value]);

  function uniqueId() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  function onEditorChange(evt) {
    props.onChange({
      target: {
        name: props.id,
        value: evt.editor.getData(),
      },
    });

    /*props.onChange({
		target: {
		  name: props.id,
		  value: evt.editor.window.$.document.body.innerText
		}
    })*/
    setData(evt.editor.getData());
  }

  function handleChange(changeEvent) {
    setData(changeEvent.target.value);
  }

  //			<SourceEditor data={data} handler={handleChange} />
  //  <EditorPreview data={data} />
  
  return (
    <Fragment>
      <div>
        <div
          style={{ overflow: 'auto' }}
          className={invalid ? 'is-invalid' : ''}
        >
          <CKEditor
            onBeforeLoad={CKEDITOR => (CKEDITOR.disableAutoInline = true)}
            name={id}
            id={id}
            data={data}
            onChange={onEditorChange}
            style={{
              float: 'left',
              width: '99%',
              marginLeft: '5px',
              marginBottom: '15px',
            }}
          />
        </div>
      </div>
    </Fragment>
  );
}
