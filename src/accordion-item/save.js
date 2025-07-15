import {useBlockProps, RichText} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';



export default function Save({ attributes }) { 

    const { color, text, fontSize, open, headingTag, headingIconOpen,content,headingIconClose } = attributes;
	const HeadingTag = headingTag || 'h3';
	const blockProps = useBlockProps.save({
		style: {
			color: color,
		},
		className: "accordion-item",
        'data-icon-open': headingIconOpen,
	    'data-icon-close': headingIconClose,
	});

    return (
        <div {...blockProps}>
					<div className='accordion-item-header'>
						<div className='accordion-item-header-text'>
                            <RichText.Content
                                tagName={HeadingTag}
                                value={text}
                                style={{ color }}
                            />
						</div>
						<div className='accordion-item-header-icon'>
							<span class={`dashicons ${ open ? headingIconOpen : headingIconClose}`} style={{fontSize: "24px"}}>
							</span>
						</div>
					</div>
					<div className={`accordion-item-body ${open? "is-open" : ''}`} style={{backgroundColor: '#ffffff',}}>

                            <RichText.Content
                                tagName="p"
                                value={content}
								style={{fontSize:fontSize}}
                            />

					</div>
			</div>
)
}