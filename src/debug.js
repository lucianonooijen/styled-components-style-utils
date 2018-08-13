const debugBackground = 'hsla(210, 100%, 50%, 0.5)';
const debugColor = 'hsla(210, 100%, 100%, 0.9)';
const debugOutline = 'hsla(210, 100%, 100%, 0.5)';

module.exports = () => `
    *:not(path):not(g) {
        background: ${debugBackground} !important;
        box-shadow: none !important;
        color: ${debugColor} !important;
        outline: solid .25rem ${debugOutline} !important;
    }
`;
