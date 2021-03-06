const assert = require('assert');
const fs = require('fs');
const constants = require('../lib/bitmap-constants.js');
const BitmapHeader = require('../lib/bitmap-header');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');

describe('bitmap file transformer', () => {
    
    let buffer = null;
    before(() => {
        // TODO: read './test/test-bitmap.bmp' into buffer variable
        buffer = fs.readFileSync('./tests/test-bitmap.bmp');
        // TODO: the functionality in this before is same as 
        // other test, can you remove (extract) the duplication?
    });

    // // "pinning" test, or "snapshot" test
    // it.skip('test whole transform', () => {
    //     // use the BitmapTransformer class, 
    //     // passing in the buffer from the file read
    //     const bitmap = new BitmapTransformer(buffer);

    //     // call .transform(), which will modify the buffer.
    //     // in this api, you pass in a transformation function
    //     // bitmap.transform(invert);

    //     // after above step, the buffer has been modified
    //     // and is accessible via bitmap.buffer

    //     // read the output file we saved earlier as
    //     // the "standard" expected output file
    //     const invertedBuffer = fs.readFileSync('./tests/inverted-expected.bmp');
    //     assert.deepEqual(bitmap.buffer, invertedBuffer);

    //     // if you don't have a standard file yet, you could write it 
    //     // out by commenting above code, using code below and visually inspect
    //     // the file for correctness.
    //     // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
    // });
});
