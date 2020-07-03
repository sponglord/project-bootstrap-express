module.exports = function (api) {
    api.cache(true);

    /**
     * Possible plugins for babel (to be added to package.json):
     * "@babel/plugin-proposal-class-properties": "^7.4.4"
     * "@babel/plugin-proposal-object-rest-spread": "^7.4.4"
     * "@babel/plugin-syntax-dynamic-import": "^7.2.0"
     * "@babel/plugin-transform-react-jsx": "^7.3.0"
     * "@babel/plugin-transform-runtime": "^7.3.4"
     * "@babel/plugin-jsx-pragmatic": "^1.0.2"
     */

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: 'auto',

                loose: true,
                targets: {
                    ie: '10'
                }
            }
        ]
    ];

    // const plugins = [
    //     [
    //         '@babel/plugin-transform-react-jsx',
    //         {
    //             pragma: 'h',
    //             pragmaFrag: 'Fragment'
    //         }
    //     ],
    //     [
    //         'jsx-pragmatic',
    //         {
    //             module: 'preact',
    //             export: 'h',
    //             import: 'h'
    //         }
    //     ],
    //     '@babel/plugin-proposal-object-rest-spread',
    //     '@babel/plugin-proposal-class-properties',
    //     '@babel/plugin-syntax-dynamic-import'
    // ];

    // const testPresets = [
    //     [
    //         '@babel/preset-env',
    //         {
    //             loose: true,
    //             targets: {
    //                 ie: '10'
    //             }
    //         }
    //     ]
    // ];

//     const testPlugins = [
//         [
//             '@babel/plugin-transform-react-jsx',
//             {
//                 pragma: 'h',
//                 pragmaFrag: 'Fragment'
//             }
//         ],
//         [
//             'jsx-pragmatic',
//             {
//                 module: 'preact',
//                 export: 'h',
//                 import: 'h'
//             }
//         ],
//         '@babel/plugin-proposal-object-rest-spread',
//         '@babel/plugin-proposal-class-properties',
//         [
//             '@babel/plugin-transform-runtime',
//             {
//                 helpers: false,
//                 regenerator: true
//             }
//         ],
// //        './config/testMocks/dynamic-import-node'
//     ];

    return {
        presets,
        // plugins,
        // env: {
        //     test: { presets: testPresets, plugins: testPlugins }
        // }
    };
};