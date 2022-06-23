var params = {
  Bucket: 'STRING_VALUE', /* required */
  Key: 'STRING_VALUE', /* required */
  ACL: private | public-read | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | bucket-owner-full-control,
  Body: Buffer.from('...') || 'STRING_VALUE' || streamObject,
  CacheControl: 'STRING_VALUE',
  ContentDisposition: 'STRING_VALUE',
  ContentEncoding: 'STRING_VALUE',
  ContentLanguage: 'STRING_VALUE',
  ContentLength: 'NUMBER_VALUE',
  ContentMD5: 'STRING_VALUE',
  ContentType: 'STRING_VALUE',
  Expires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  GrantFullControl: 'STRING_VALUE',
  GrantRead: 'STRING_VALUE',
  GrantReadACP: 'STRING_VALUE',
  GrantWriteACP: 'STRING_VALUE',
  Metadata: {
    '<MetadataKey>': 'STRING_VALUE',
    /* '<MetadataKey>': ... */
  },
  ObjectLockLegalHoldStatus: ON | OFF,
  ObjectLockMode: GOVERNANCE | COMPLIANCE,
  ObjectLockRetainUntilDate: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  RequestPayer: requester,
  SSECustomerAlgorithm: 'STRING_VALUE',
  SSECustomerKey: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
  SSECustomerKeyMD5: 'STRING_VALUE',
  SSEKMSEncryptionContext: 'STRING_VALUE',
  SSEKMSKeyId: 'STRING_VALUE',
  ServerSideEncryption: AES256 | aws:kms,
  StorageClass: STANDARD | REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE,
  Tagging: 'STRING_VALUE',
  WebsiteRedirectLocation: 'STRING_VALUE'
};
s3.putObject(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
