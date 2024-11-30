import { execute } from "@/util";
import { REPOSITORY_NAME, TAG_NAME, CONTAINER_NAME } from "@/constants";

const dockerExists = await execute("docker -v").then(
  (stdout) => stdout.match(/^Docker version/) != null,
);

if (!dockerExists) {
  console.log("docker is not found");
  process.exit(1);
}

await execute(
  `docker image build --no-cache -f Dockerfile -t ${REPOSITORY_NAME}:${TAG_NAME} .`,
);

let exited = false;
execute(
  `docker run --rm --name ${CONTAINER_NAME} ${REPOSITORY_NAME}:${TAG_NAME}`,
).catch((e) => {
  if (!exited) {
    throw e;
  }
});

await new Promise((resolve) => setTimeout(resolve, 5 * 1000));

await execute(`docker cp ${CONTAINER_NAME}:/usr/local/app/kuromoji.js/dict ./`);

await execute(`docker container stop ${CONTAINER_NAME}`);
exited = true;

await execute(`docker image rm ${REPOSITORY_NAME}:${TAG_NAME}`);
