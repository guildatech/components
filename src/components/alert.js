import React, { Component, Fragment } from 'react';

export default class Alert extends Component {
  constructor(props) {
    super(props);
    const reservedKey = ['closable', 'children', 'collpasible'];
    let classes = [];
    Object.keys(props).forEach(key => {
      if (!reservedKey.includes(key)) {
        classes.push(key);
      }
    });

    this.state = { props, classNames: classes.join(' '), shown: true, collapsed: false };
    this.closeAlert = this.closeAlert.bind(this);
    this.collapseAlert = this.collapseAlert.bind(this);
  }

  closeAlert() {
    this.setState({shown:false})
  }
  collapseAlert() {
    this.setState({collapsed:!this.state.collapsed})
  }
  render() {
    return (
      <Fragment>
        <div>
        {this.state.shown ?
          <div className={`alert ${this.state.classNames} ${ this.state.collapsed ? 'collapsed':''}`}>
            {this.props.closable ? <span onClick={this.closeAlert} className="action closable">x</span> : null}
            {this.props.collapsible ? <span onClick={this.collapseAlert} className="action collapsible"></span> : null}
          
            <span className="content"> {this.props.children}</span>
            </div>
            
          : null}
          <style jsx>{`
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
          
          .alert.success ,
          .alert.success > .action::hover {
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
    );
  }
}
