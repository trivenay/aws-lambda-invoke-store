const rollup = require("rollup");
const {nodeResolve} = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");

const path = require('node:path');
const root = path.join(__dirname, "..");

(async () => {

    const entryPoint = path.join(root, "src", "invoke-store.ts");

    const inputOptions = {
        input: [entryPoint],
        plugins: [
            nodeResolve(),
            typescript({
                compilerOptions: {
                    importHelpers: true,
                    noEmitHelpers: false,
                    module: "esnext",
                    moduleResolution: "bundler",
                    target: "es2022",
                    noCheck: true,
                    removeComments: true,
                },
            }),
        ],
    }

    {
        const outputOptions = {
            dir: path.join(root, 'dist-es'),
            format: "esm",
            exports: "named",
            preserveModules: false,
        };

        const bundle = await rollup.rollup(inputOptions);
        await bundle.write(outputOptions);
        await bundle.close();
    }

    {
        const outputOptions = {
            dir: path.join(root, 'dist-cjs'),
            format: "cjs",
            exports: "named",
            preserveModules: false,
        };

        const bundle = await rollup.rollup(inputOptions);
        await bundle.write(outputOptions);
        await bundle.close();
    }
})()