import {useBlockProps, RichText} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';



export default function Save({ attributes }) { 

    const { color, backgroundColor, text, fontSize, open, borderColor, headingTag, headingIconOpen,content,headingIconClose } = attributes;
	const HeadingTag = headingTag || 'h3';
	const blockProps = useBlockProps.save({
		style: {
			backgroundColor: backgroundColor,
			borderColor: borderColor,
			color: color,
		},
        'data-icon-open': headingIconOpen,
	    'data-icon-close': headingIconClose,
	});

    console.log("showing from save.js")

    return (
        <div {...blockProps}>
					<div className='accordion-item-header' style={{ backgroundColor: "#E2E2E2", }}>
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
                            />

					</div>
                    { console.log("showing from save.js return") }
			</div>
)
}