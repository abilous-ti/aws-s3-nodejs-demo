Overview
A Node.js application which creates an S3 bucket and uploads a file with permissions and metadata.

This example uses the createBucket and upload methods of the AWS SDK for JavaScript.

See API doocumentation for detailed information; https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

To see the available parameters for the s3 upload method, see the paramObjects.js file.

Prerequisites
An AWS account with appropriate permissions to create the required resources
Node.js (v12+) and npm (v6+) installed and configured for use with AWS
Bash environment in which to execute the scripts
A jpg file in the executing directory called koala.jpg
Run the code
The code can be executed as follows:

node s3PutObject.js
