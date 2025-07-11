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
	const accordions = document.querySelectorAll('.wp-block-create-block-accordion');

	accordions.forEach((accordion) => {
		const header = accordion.querySelector('.accordion-header');
		const body = accordion.querySelector('.accordion-body');
		const icon = accordion.querySelector('.accordion-header-icon span');

		if (!header || !body || !icon) return;

		header.addEventListener('click', () => {

			// Toggle class
			accordion.classList.toggle('is-open');
            const isOpen = accordion.classList.contains('is-open');

			// Show/hide content
			body.style.display = isOpen ? 'none' : 'block';

			// Swap icon
			const openIcon = accordion.dataset.iconOpen;
			const closeIcon = accordion.dataset.iconClose;

			if (openIcon && closeIcon) {
				icon.className = `dashicons ${isOpen ? openIcon : closeIcon}`;
			}
		});
	});
});
/* eslint-enable no-console */
