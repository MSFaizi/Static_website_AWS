# Host Static_website on AWS S3
Creating a static website and hosting it on AWS S3, configuring Amazon CloudFront for content delivery, and using Route 53 for domain management involves several steps. Here's a step-by-step guide to achieving this:

# Step 1: Create an AWS Account

If you don't have an AWS account, sign up for one at https://aws.amazon.com/. Once you have an account, log in to the AWS Management Console.

# Step 2: Create an S3 Bucket

In the AWS Management Console, go to the S3 service.

Click the "Create bucket" button.

Choose a globally unique name for your bucket (e.g., my-static-website-example).

Select a region for your bucket (choose the one closest to your target audience).

Leave the default settings and create the bucket.

# Step 3: Upload Your Website Files

Inside your newly created S3 bucket, click on the "Upload" button.

Upload your HTML, CSS, JavaScript, and any other static assets (e.g., images) to the bucket.

Once uploaded, select your HTML file and click on the "Properties" tab. Under "Permissions," set the object to be public by clicking "Make public."

# Step 4: Configure S3 for Static Website Hosting

In your S3 bucket, navigate to the "Properties" tab.

Scroll down to the "Static website hosting" section.

Select the option for "Use this bucket to host a website."

Set the index document (e.g., index.html) and the error document if desired.

Click "Save changes."

# Step 5: Configure Amazon CloudFront for Content Delivery

In the AWS Management Console, go to the CloudFront service.

Click "Create Distribution."

Choose the "Web" distribution type.

Configure the following settings:

Origin Domain Name: Select your S3 bucket endpoint from the dropdown.
Viewer Protocol Policy: Choose "Redirect HTTP to HTTPS" or "HTTPS Only" depending on your preference.
Alternate Domain Names (CNAMEs): Add your domain name (e.g., www.example.com).
Default Root Object: Specify your index document (e.g., index.html).
Leave the rest as default or configure as needed.
Click "Create Distribution."

# Step 6: Configure Route 53 for Domain Management

In the AWS Management Console, go to the Route 53 service.

Create a new hosted zone for your domain (e.g., example.com).

Inside the hosted zone, create a new record set.

Choose the record type (e.g., A - IPv4 address).
Alias: Yes.
Alias Target: Select your CloudFront distribution from the dropdown.
Create another record set for the "www" subdomain following the same steps.

Update the DNS settings of your domain registrar to use the Route 53 name servers.

# Step 7: Test Your Website

It may take some time for DNS changes to propagate. Once it's done, you should be able to access your static website via your custom domain (e.g., www.example.com).

That's it! Your static website is now hosted on AWS S3, delivered through CloudFront for faster content delivery, and managed using Route 53 for domain management.