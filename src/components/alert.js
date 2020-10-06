import React, { Fragment } from 'react'

export default function Alert(props) {

  const reservedKey = ['closable', 'children', 'collapsible'];
  let classes = []
  Object.keys(props).forEach(key => {
    if(!reservedKey.includes(key)) {
      classes.push(key);
    }
  });
  const [collapsed, setCollapsed] = React.useState(false);
  const [shown, setShown] = React.useState(true);
  const [classNames, setClassNames] = React.useState(classes.join(' '));

  function closeAlert() {
    setShown(false);
  }

  function collapseAlert() {
    setCollapsed(prev => !prev);
  }
  
	return (
		<Fragment>
			<div>
        {shown ? 
          <div className={`alert ${classNames} ${ collapsed ? 'collapsed' : '' } `}>
            {props.closable ? <span onClick={closeAlert} className="action closable">x</span> : null}
            {props.collapsible ? <span onClick={collapseAlert} className="action collapsible"></span> : null}
          
            <span className="content"> {props.children}</span>
          </div> : null }
          <style jsx="true">{`
        .alert > .action {
          font-size: 12px;
          position: absolute;
          padding: 3px 12px;
          right: 0;
          pointer-events: all;
          cursor: pointer;
          top: 0;
          border: 1px solid transparent;
          margin: 2px;
          transition: all 300ms ease;
        }
        .alert {
            border: 1px solid var(--guildatech-color-primary);
            color: var(--guildatech-color-primary);
            min-height: 50px;
            min-width: 98%;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
            transition: all 300ms;
            padding: 5px;
            font-weight:700;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            
          }
          
          .alert.success,
          .alert.success > .action:hover {
              border-color: var(--guildatech-color-green) !important;
              color: var(--guildatech-color-green-darker) !important;
          }
          
          .alert.danger,
          .alert.danger > .action:hover  {
                border-color: var(--guildatech-color-red) !important;
                color: var(--guildatech-color-red) !important;
          }
          .alert > .action:hover {
            border-color: var(--guildatech-color-primary) !important;
            color: var(--guildatech-color-primary) !important;
          }
          .alert.collapsible.collapsed {
            height: auto;
            min-height: 20px;
         }

          .alert.collapsed > span.content {
            height: 0;
            overflow: hidden;
          }
          .alert.collapsible > .action.collapsible:before {
            content:'-';
            display: block;
          }
          .alert.collapsible.collapsed  > .action.collapsible:before {
            content:'+';
            display: block;
          }
          @media (max-width: 768px) {
           
            .alert {
              position: relative;
              border: 0px;
              box-shadow: none;
            }
          }

        `}</style>
      </div>
		</Fragment>
	)
}
