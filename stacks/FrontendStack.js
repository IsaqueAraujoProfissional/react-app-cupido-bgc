import * as sst from "@serverless-stack/resources";

export default class FrontendStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const { bucket } = props;

    // Define our React app
    const site = new sst.ReactStaticSite(this, "ReactSite", {
      path: "frontend",
      // Pass in our environment variables
      environment: {
        REACT_APP_REGION: scope.region,
        REACT_APP_BUCKET: bucket.bucketName,
      },
    });

    // Show the url in the output
    this.addOutputs({
      SiteUrl: site.url,
    });
  }
}