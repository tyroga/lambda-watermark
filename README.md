# lambda-watermark (forked)

This module places a watermark in the chosen position of your image. An S3
Lambda event can be used to watermark every image that is uploaded to S3 and to save it
as an altered version retaining the original file.

Note: this is a forked version of
[lamda-watermark](https://github.com/markadamfoster/lambda-watermark)
which is a forked version of
[lamda-watermark](https://github.com/prestonvanloon/lambda-watermark). Changes
features include:

- ability to position water mark
- ability to set the permissions of your created file
- set destination S3 bucket and path
- save a version of the file as '-watermarked' to retain the original
- logging

## How to use

- `npm install --save tyroga/lambda-watermark`
- Create your function (index.js)

```javascript
'use strict'
var LambdaWatermark = require('lambda-watermark')

var options = {
  watermarkImagePath: './exampleWatermark.png',
  relativeSize: 5,
  watermarkWidth: 250,
  watermarkHeight: 133,
  opacity: 50,
  watermarkedImageACL: 'public-read'
}

exports.handler = function(event, context) {
  console.log('🚨 New image detected!')
  new LambdaWatermark(options)(event, context)
}
```

- [Set up Lambda service on AWS](http://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)
- Zip up your directory (`index.js`, watermark image, and `node_modules`) and upload
  to your AWS Lambda function
- specify the destination bucket as an environment variable

## Configuration (options)

- `watermarkImagePath`: The relative path to your image
- `watermarkWidth`: Width of the watermark image
- `watermarkHeight`: Height of the watermark image
- `relativeSize`: The size of the watermark (percent relative to the parent
  image)
- `opacity`: How opaque the watermark should be. (100 is fully opaque, 0 is
  fully transparent)
- `position`: Where the watermark should be located on the image. (options are
  NorthWest|North|NorthEast|West|Center|East|SouthWest|South|SouthEast)
- watermarkedImageACL: ACL permissions on the final, watermarked image (i.e. 'public-read')
