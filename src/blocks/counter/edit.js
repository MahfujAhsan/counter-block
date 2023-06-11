/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
const { Fragment } = wp.element;
import { __ } from "@wordpress/i18n";

// editor style
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {

	const { uniqueId, counters, background, border, iconSizes, numberTypo, titleTypo } = attributes;

	setAttributes({
		uniqueId: `ctrb-${clientId.slice(0, 8)}`
	})

	const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph'];

	const MY_TEMPLATE = [
		['core/image', { width: 70, height: 70, className: "infoImage", url: "http://localhost/bplugins/wp-content/uploads/2023/06/index-removebg-preview.png" }],
		['core/heading', { content: '', "level": 3, placeholder: 'Enter Title', style: { typography: { fontSize: "32px", fontStyle: "normal", fontWeight: "600" } } }],
		['core/paragraph', { content: '', placeholder: 'Enter Paragraph', style: { typography: { fontSize: "24px", fontStyle: "normal", fontWeight: "400" } } }],
	];

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'counter-block')}
				>
					Settings
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps({
				className: uniqueId
			})} style={{padding: "50px 50px", width: "50%", borderRadius: "8px"}}>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={MY_TEMPLATE}
				/>
			</div>

		</Fragment>
	);
}
