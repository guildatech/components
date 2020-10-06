import React, { Fragment } from 'react';

export default function Section(props) {
  
return (
	<Fragment>
	<section>{ props.children }</section>
	<style jsx="true">{`
		section {
		border: 1px solid var(--guildatech-color-primary);
		min-height: 450px;
		min-width: 350px;
		box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.45);
		transition: all 300ms;
		padding: 10px 15px;
		positin: relative;
		}
		@media (max-width: 768px) {
		section {
			position: relative;
			border: 0px;
			box-shadow: none;
		}
		}
	`}</style>
	</Fragment>
	);
}

