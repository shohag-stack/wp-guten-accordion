<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/accordion',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'styles' => array(
			
		),
		'attributes' => array(
			'color' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#E2E2E2'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Heading goes here'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Paragraph content goes here. You can edit this text.'
			),
			'open' => array(
				'type' => 'boolean',
				'default' => false
			),
			'fontSize' => array(
				'type' => 'string',
				'default' => '20px'
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'headingIconOpen' => array(
				'type' => 'string',
				'default' => 'dashicons-plus-alt2'
			),
			'headingIconClose' => array(
				'type' => 'string',
				'default' => 'dashicons-minus'
			)
		),
		'supports' => array(
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'accordion',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
