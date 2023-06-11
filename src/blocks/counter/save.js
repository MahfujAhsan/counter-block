/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, counters, background, border, iconSizes, numberTypo, titleTypo } = attributes;

	return (
		<div {...useBlockProps.save({
			className: uniqueId
		})} style={{ padding: "50px 50px", width: "50%", borderRadius: "8px" }}>
			<InnerBlocks.Content />
		</div>
	);
}
