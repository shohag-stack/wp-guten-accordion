import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls,PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, RangeControl,ColorPalette } from '@wordpress/components';
import './editor.scss';
import lottie from 'lottie-web';
import { useRef, useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {

	const containerRef = useRef();
	const blockProps = useBlockProps();
	const { jsonUrl, loop, autoPlay, speed, direction, containerBg } = attributes;

	useEffect(() => {

		let animation;
		if (containerRef.current) {
			containerRef.current.innerHTML = ''; // Clear previous animation
		}
		if (jsonUrl && containerRef.current) {
			animation = lottie.loadAnimation({
				container: containerRef.current,
				renderer: 'svg',
				loop: loop,
				autoplay: autoPlay,
				path: jsonUrl,
			})
			animation.setSpeed(speed); // Set the speed of the animation
			animation.setDirection(direction);


			return () => {
				if (animation) {
					animation.destroy(); // Clean up the animation instance
				}
			}
		}
	}, [jsonUrl, loop, speed, autoPlay, direction, containerBg]);


	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Animation Settings", 'lottie-embed')} initialOpen={true}>
					<TextControl help={__("Enter the URL of the Lottie JSON file.", "lottie-embed")} __nextHasNoMarginBottom={true} __next40pxDefaultSize label={__("Json URL", 'lottie-embed')} value={jsonUrl} onChange={(value) => setAttributes({ jsonUrl: value })} />
					<ToggleControl label={__("Loop", "lottie-embed")} onChange={(value) => setAttributes({ loop: value })} checked={loop} />
					<ToggleControl label={__("Autoplay", "lottie-embed")} onChange={(value) => setAttributes({ autoPlay: value })} checked={autoPlay} />
					<RangeControl label={__('Speed', 'lottie-embed')} value={speed} onChange={(value) => setAttributes({ speed: value })} min={0.1} max={3} step={0.3} />
					<RangeControl help={__("1 is forward, -1 is reverse.", "lottie-embed")} label={__('Direction', 'lottie-embed')} value={direction} onChange={(value) => setAttributes({ direction: value })} min={-1} max={2} step={0.5} />
				</PanelBody>
				<PanelBody title={__("Color Settings", 'lottie-embed')} initialOpen={false}>
				<PanelColorSettings
					title={__("Container Background Color", 'lottie-embed')}
					initialOpen={false}
					colorSettings={[
						{
							value: containerBg,
							onChange: (color) => setAttributes({ containerBg: color }),
							label: __('Background Color', 'lottie-embed'),
						},
					]}
					className="lottie-embed-color-panel-settings"
				/>
				</PanelBody>

			</InspectorControls>
			<div {...blockProps}>
				<div className="lottie-animation-container">
					<div className="lottie-animation" style={{ backgroundColor: containerBg }} ref={containerRef} ></div>
				</div>
			</div>
		</>
	);
}
