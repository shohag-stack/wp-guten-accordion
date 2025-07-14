	/**
	 * Retrieves the translation of text.
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
	 */
	import { __ } from '@wordpress/i18n';

	/**
	 * React hook that is used to mark the block wrapper element.
	 * It provides all the necessary props like the class name.
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
	 */
	import { useBlockProps,  } from '@wordpress/block-editor';
	import { PanelBody, SelectControl, RangeControl} from '@wordpress/components';
	import { InspectorControls, InnerBlocks} from '@wordpress/block-editor';

	/**
	 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
	 * Those files can contain any CSS code that gets applied to the editor.
	 *
	 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
	 */
	import './editor.scss';

	/**
	 * The edit function describes the structure of your block in the context of the
	 * editor. This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
	 *
	 * @return {Element} Element to render.
	 */
	export default function Edit({ attributes, setAttributes }) {

		const { color, backgroundColor, fontSize, borderColor, headingTag, headingIconOpen,headingIconClose } = attributes;
		const blockProps = useBlockProps({
			style: {
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				color: color,
			},
		});


		const Icons = [
			{
				label: __("Plus", "accordion"),
				value: "dashicons-plus-alt2"
			},
			{
				label: __("Minus", "accordion"),
				value: "dashicons-minus"
			},
		]


		return (
			<>

				<InspectorControls>
						<PanelBody title= { __("Accordion Setting", "accordion") } >
							<SelectControl label={__("Heading", "accordion")}
								value={headingTag}
								options={
									[
										{
											label: __("H1", "accordion"),
											value: "h1"
										},
										{
											label: __("H2", "accordion"),
											value: "h2"
										},
										{
											label: __("H3", "accordion"),
											value: "h3"
										},
										{
											label: __("H4", "accordion"),
											value: "h4"
										},
										{
											label: __("H5", "accordion"),
											value: "h5"
										},
										{
											label: __("H6", "accordion"),
											value: "h6"
										}
									]
								}
								onChange={(value) => setAttributes({ headingTag: value })}>

							</SelectControl>
							<SelectControl label={__("Open Icon", "accordion")}
								value={headingIconOpen}
								options={
									Icons
								}
								onChange={(value) => setAttributes({ headingIconOpen: value })}>

							</SelectControl>

							<SelectControl label={__("Close Icon", "accordion")}
								value={headingIconClose}
								options={
									Icons
								}
								onChange={(value) => setAttributes({ headingIconClose: value })}>

							</SelectControl>

							<RangeControl
								label={__("Font Size", "accordion")}
								value={parseInt(fontSize)}
								onChange={(val) => setAttributes({ fontSize: val + 'px' })}
								min={11}
								max={100}
								step={1}>
							</RangeControl>
						</PanelBody>
				</InspectorControls>

				<div {...blockProps}>
						<InnerBlocks
							allowedBlocks={['create-block/accordion-item']}
							templateLock={false}
							template={[
								['create-block/accordion-item'
								], 
								['create-block/accordion-item'
								],
								['create-block/accordion-item'
								]

							]}
							renderAppender={() => (
								<div style={{ textAlign: "center" }} className="add-new-accordion-wrapper">
								<InnerBlocks.ButtonBlockAppender/>
							</div>
							)}
						/>
				</div>
			</>
		);
	}
