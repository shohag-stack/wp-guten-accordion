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

import lottie from "lottie-web";

document.addEventListener("DOMContentLoaded", ()=>{
    const blocks = document.querySelectorAll(".wp-block-create-block-lottie-embed")
    blocks.forEach((block) => {
        const container = block.querySelector(".lottie-animation");
        const jsonUrl = block.getAttribute("data-json-url")
        const bgColor = block.getAttribute('data-bg');

        if (!block || !jsonUrl) return;
        if (bgColor) {
			container.style.backgroundColor = bgColor;
		}

		// Clear any previous animation (if any)
		container.innerHTML = '';

		// Load the Lottie animation
		lottie.loadAnimation({
			container: container,
			renderer: 'svg',
			loop: true, // You can change this if needed (or set from data-*)
			autoplay: true,
			path: jsonUrl,
		});

    })
})

/* eslint-enable no-console */
