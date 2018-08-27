var connectTabix = require('../js/tabix').connectTabix;
var URLFetchable = require('../js/bin').URLFetchable;
var BlobFetchable = require('../js/bin').BlobFetchable;



// Wrap the reader in a Promise API for LZ compatibility
function urlReader(dataUrl, indexUrl) {
    return new Promise(function(resolve, reject) {
        connectTabix(new URLFetchable(dataUrl), new URLFetchable(indexUrl),
            function (reader, err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(reader);
                }
            });
    });
}

function blobReader(data_file, tabix_file) {
    return new Promise(function(resolve, reject) {
        connectTabix(new BlobFetchable(data_file), new BlobFetchable(tabix_file),
            function (reader, err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(reader);
                }
            });
    });
}

window.urlReader = urlReader;
window.blobReader = blobReader;
