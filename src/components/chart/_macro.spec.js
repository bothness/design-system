// /** @jest-environment jsdom */

// import * as cheerio from 'cheerio';

// import axe from '../../tests/helpers/axe';
// import { renderComponent } from '../../tests/helpers/rendering';

// const EXAMPLE_CHART_SRC_URL_MINIMAL = {
//     src: 'example.png',
// };

// const EXAMPLE_CHART_CHART_MINIMAL = {
//     chart: {
//         smallSrc: 'example-small.png',
//         largeSrc: 'example-large.png',
//     },
// };

// describe('macro: chart', () => {
//     it('outputs a `figure` element', () => {
//         const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_SRC_URL_MINIMAL));

//         expect($('.ons-image')[0].tagName).toBe('figure');
//     });

//     it('outputs a `figurecaption` element when `caption` is provided', () => {
//         const $ = cheerio.load(
//             renderComponent('chart', {
//                 ...EXAMPLE_CHART_SRC_URL_MINIMAL,
//                 caption: 'Example chart caption',
//             }),
//         );

//         expect($('.ons-image__caption')[0].tagName).toBe('figcaption');
//     });

//     it('outputs a `figurecaption` element with provided `caption` text', () => {
//         const $ = cheerio.load(
//             renderComponent('chart', {
//                 ...EXAMPLE_CHART_SRC_URL_MINIMAL,
//                 caption: 'Example chart caption',
//             }),
//         );

//         expect($('.ons-image__caption').text().trim()).toBe('Example chart caption');
//     });

//     describe('mode: src', () => {
//         it('passes jest-axe checks', async () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_SRC_URL_MINIMAL));

//             const results = await axe($.html());
//             expect(results).toHaveNoViolations();
//         });

//         it('outputs an `img` element', () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_SRC_URL_MINIMAL));

//             expect($('.ons-image__img')[0].tagName).toBe('img');
//         });

//         it('outputs an `img` element with the expected `src`', () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_SRC_URL_MINIMAL));

//             expect($('.ons-image__img').attr('src')).toBe('example.png');
//         });

//         it('outputs an `img` element with the expected alt text', () => {
//             const $ = cheerio.load(
//                 renderComponent('chart', {
//                     ...EXAMPLE_CHART_SRC_URL_MINIMAL,
//                     alt: 'Example alt text',
//                 }),
//             );

//             expect($('.ons-image__img').attr('alt')).toBe('Example alt text');
//         });
//     });

//     describe('mode: chart', () => {
//         it('passes jest-axe checks', async () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_CHART_MINIMAL));

//             const results = await axe($.html());
//             expect(results).toHaveNoViolations();
//         });

//         it('outputs an `img` element', () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_CHART_MINIMAL));

//             expect($('.ons-image__img')[0].tagName).toBe('img');
//         });

//         it('outputs an `img` element with the expected `srcset`', () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_CHART_MINIMAL));

//             expect($('.ons-image__img').attr('srcset')).toBe('example-small.png 1x, example-large.png 2x');
//         });

//         it('outputs an `img` element with the expected `src`', () => {
//             const $ = cheerio.load(renderComponent('chart', EXAMPLE_CHART_CHART_MINIMAL));

//             expect($('.ons-image__img').attr('src')).toBe('example-small.png');
//         });

//         it('outputs an `img` element with the expected alt text', () => {
//             const $ = cheerio.load(
//                 renderComponent('chart', {
//                     ...EXAMPLE_CHART_CHART_MINIMAL,
//                     alt: 'Example alt text',
//                 }),
//             );

//             expect($('.ons-image__img').attr('alt')).toBe('Example alt text');
//         });
//     });
// });
