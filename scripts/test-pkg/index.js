import {InvokeStore} from '../../dist-es/invoke-store.js';

import {createRequire} from 'module';

const require = createRequire(import.meta.url);

void InvokeStore;

console.log({
    impl: InvokeStore,
    resolution: require.resolve('../../')
});