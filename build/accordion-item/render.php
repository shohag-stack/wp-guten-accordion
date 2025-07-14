<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php 
$color = $attributes["color"] ?? "#000000";
?>

<p style="color: <?php echo esc_attr($color); ?>" <?php echo get_block_wrapper_attributes(); ?>>
	<?php  esc_html_e( 'Accordion – hello from a dynamic block!', 'accordion' ); ?>
</p>
