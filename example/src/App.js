import React, { Component } from 'react'

import { Button , Input, Section, Alert, Breadcrumb, GTEditor, Textarea }from 'gt-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <header>
          <h3>GuildaTech Components</h3>
        </header>
        <main>
          <article>
          <h4>Button</h4>
          <Button type="type" title="Button Example"></Button>            
          </article>

          <article>
          <h4>Input</h4>
          <Input
                  label="Usuário"
                  type="text"
                  id="username"
                  minLength="4"
                />
          </article>
          <article>
          <h4>Textarea</h4>
          <Textarea
                  label="Bio"
                  id="bio"
                />
          </article>

          <article>
            <h4>Section</h4>
            
          <Section></Section>
            
          </article>

          <article>
            <h4>Breadcrumb</h4>
            <Breadcrumb path="Docs" />
            <pre>
              <code>
              </code>
            </pre>
            
          </article>

          <article>
            <h4>Alert</h4>
            <Alert>Default</Alert>
            <br/>
            <Alert success>Success</Alert>
            <br/>
            <Alert danger>Danger</Alert>

            <br/>
            <Alert closable>closable</Alert>
            <br/>
            <Alert collapsible>collapsible</Alert>
            
            <br/>
            <Alert closable danger>closable</Alert>
            <br/>
            <Alert collapsible success>collapsible</Alert>
          </article>

          <article>
            <h4>Editor</h4>

          <GTEditor
                id="post_body"
              />
          </article>
        </main>
        <style jsx>{`
       header{
         height: 50px;
         background: var(--guildatech-color-primary)
       }
       h3 {
         margin: 0;
         padding:10px;
         color: white;
       }
       main {
        display: flex;
        align-itens: center;
        justify-content:center;
        flex-direction: column;
        padding: 50px
       }
       article {
         padding:5px;
         margin:5px;
         min-height: 100px;
         width: 80vw;
        border:1px solid var(--guildatech-color-primary)
       }
       article h4 {
         margin-top:5px;
         padding-left:10px;
         color:var(--guildatech-color-primary)
       }
        `}

        </style>
      </div>
    )
  }
}
