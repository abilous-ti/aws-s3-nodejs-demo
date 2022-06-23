// api reference: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
// s3 acl reference: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html

// get the refernce to the aws-sdk
const aws = require("aws-sdk");

const fs = require('fs');

// get reference to S3 client
const s3 = new aws.S3();

function random(low, high) {
  return Math.round(Math.random() * (high - low) + low);
}

// global vars
const S3_BUCKET_NAME = "s3-putobject-test-" + random(10000, 50000);
const FILE_NAME = "koala.jpg";
const AWS_REGION = "eu-west-1"

async function createBucket() {
	const params = {
	    Bucket: S3_BUCKET_NAME,
	    CreateBucketConfiguration: {
	        // Set your region here
	        LocationConstraint: AWS_REGION
	    }
	};

	await s3.createBucket(params, function(err, data) {
	    if (err) console.log(err, err.stack);
	    else console.log("Bucket Created Successfully", data.Location);
	});
};

function uploadFile() {
    // Read content from the file
    const fileContent = fs.readFileSync(FILE_NAME);

    // Setting up S3 upload parameters
    const params = {
        Bucket: S3_BUCKET_NAME,
        Key: FILE_NAME, // File name you want to save as in S3
        ACL: "private",
        Body: fileContent,
        ContentType: "image/jpeg",
        // You can either assign an ACL or indivudual grants (not both!)
        // GrantFullControl: "emailaddress=username@domain.com",
        // GrantFullControl: "id=canonical-user-id",
        // GrantRead: "http://acs.amazonaws.com/groups/global/AuthenticatedUsers",
        Metadata: {
		    'FirstName': 'Joe',
		    'LastName': 'Montana',
		    'Position': 'Quarterback',
		    'Team': 'San Francisco 49ers'
		},
		StorageClass: "STANDARD",
		ServerSideEncryption: "AES256",

    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
	    if (err) console.log(err, err.stack);
	    else console.log("File uploaded successfully.", data.Location);
    });
};

// execute the create bucket function
createBucket(S3_BUCKET_NAME);

// execute the upload function
uploadFile(FILE_NAME);
