import FrontendStack from "./FrontendStack";

import StorageStack from "./StorageStack";

export default function main(app) {
  const storageStack = new StorageStack(app, "storage");

  new FrontendStack(app, "frontend", {
    bucket: storageStack.bucket,
  });
}