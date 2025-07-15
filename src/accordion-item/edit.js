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
import { useBlockProps } from '@wordpress/block-editor';
import { RichText} from '@wordpress/block-editor';

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
export default function Edit({ attributes, setAttributes, context }) {

	const { color, text, open } = attributes;
	const fontSize = context['accordion/fontSize'] || '16px';
	const headingIconOpen = context['accordion/headingIconOpen'];
	const headingIconClose = context['accordion/headingIconClose'];
	const HeadingTag = context['accordion/headingTag'] || 'h3';
	const blockProps = useBlockProps();

	const toggleOpen = () => {
		setAttributes({
			open: !open
		})
	};


	return (
		<>
			<div {...blockProps}>
					<div onClick={toggleOpen} className='accordion-item-header' style={{ backgroundColor: open? "#f3f3f3" : "" }}>
						<div className='accordion-item-header-text'>

							<RichText tagName={HeadingTag} value={text} onChange={(value)=> setAttributes({text:value})} style={{ color }} placeholder={__("accordion-item content...", "accordion-item")}/>
						</div>
						<div className='accordion-item-header-icon'>
							<span className={`dashicons ${ open ? headingIconClose : headingIconOpen}`}>
							</span>
						</div>
					</div>
					
					<div className={`accordion-item-body ${open? "is-open" : ''}`} style={{backgroundColor: '#ffffff',}}>
						<RichText
							tagName="p"
							value={attributes.content}
							onChange={(value) => setAttributes({ content: value })}
							placeholder={__("accordion-item content...", "accordion-item")}
							style={{ color, fontSize: fontSize }}
							/>

					</div>
			</div>
		</>
	);
}
