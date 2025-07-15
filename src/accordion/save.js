import {useBlockProps, RichText, InnerBlocks} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';



export default function Save({ attributes }) { 

    const { color, backgroundColor, borderColor, headingTag, headingIconOpen,headingIconClose } = attributes;
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

    console.log(InnerBlocks)

    return (
        <div {...blockProps}>
					<InnerBlocks.Content />
			</div>
)
}