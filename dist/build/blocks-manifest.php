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
				'default' => 'dashicons-plus'
			),
			'headingIconClose' => array(
				'type' => 'string',
				'default' => 'dashicons-minus'
			)
		),
		'providesContext' => array(
			'accordion/headingTag' => 'headingTag',
			'accordion/headingIconOpen' => 'headingIconOpen',
			'accordion/headingIconClose' => 'headingIconClose',
			'accordion/fontSize' => 'fontSize'
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'accordion',
		'editorScript' => 'file:./index.js',
		'editorStyle' => array(
			'file:./index.css',
			'dashicons'
		),
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'accordion-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/accordion-item',
		'version' => '0.1.0',
		'title' => 'accordion-item',
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
				'default' => 'dashicons-plus'
			),
			'headingIconClose' => array(
				'type' => 'string',
				'default' => 'dashicons-minus'
			)
		),
		'supports' => array(
			'html' => false,
			'inserter' => true
		),
		'usesContext' => array(
			'accordion/headingTag',
			'accordion/headingIconOpen',
			'accordion/headingIconClose',
			'accordion/fontSize'
		),
		'parent' => array(
			'create-block/accordion'
		),
		'textdomain' => 'accordion-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => array(
			'file:./index.css',
			'dashicons'
		),
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'lottie-embed' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/lottie-embed',
		'version' => '0.1.0',
		'title' => 'Lottie Embed',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'color' => true,
				'width' => true
			),
			'shadow' => true
		),
		'attributes' => array(
			'jsonUrl' => array(
				'type' => 'string',
				'default' => 'https://lottie.host/c7d7d859-c2a2-4cb5-9de6-a607de25a940/0LyHkOfpLB.json'
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoPlay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'speed' => array(
				'type' => 'number',
				'default' => 1
			),
			'direction' => array(
				'type' => 'number',
				'default' => 1
			),
			'containerBg' => array(
				'type' => 'string',
				'default' => '#ffffff'
			)
		),
		'textdomain' => 'lottie-embed',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
