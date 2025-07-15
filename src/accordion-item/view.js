/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.wp-block-create-block-accordion-item');

	accordions.forEach((accordion) => {
		const header = accordion.querySelector('.accordion-item-header');
		const body = accordion.querySelector('.accordion-item-body');
		const icon = accordion.querySelector('.accordion-item-header-icon span');

		if (!header || !body || !icon) return;

        const openIcon = accordion.dataset.iconOpen;
		const closeIcon = accordion.dataset.iconClose;

        const isOpen = body.classList.contains('is-open');
		icon.className = `dashicons ${isOpen ? closeIcon : openIcon}`;

		header.addEventListener('click', () => {

			// Toggle class
			 const toggleOpen = body.classList.toggle('is-open');
			 header.classList.toggle('active', toggleOpen);
             icon.className = `dashicons ${toggleOpen ? closeIcon : openIcon}`;
		});
	});

	console.log('Accordion Item View Script Loaded');
});
/* eslint-enable no-console */
