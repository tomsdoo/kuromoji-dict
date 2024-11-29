import { execute } from "@/util";
import { REPOSITORY_NAME, TAG_NAME, CONTAINER_NAME } from "@/constants";

const dockerExists = await execute("docker -v").then(
  (stdout) => stdout.match(/^Docker version/) != null,
);

if (!dockerExists) {
  console.log("docker is not found");
  process.exit(1);
}

const images = await execute(
  `docker image ls ${REPOSITORY_NAME}:${TAG_NAME} --format json`,
).then((stdout) =>
  stdout
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line)),
);
for (const { ID } of images) {
  await execute(`docker image rm ${ID}`);
}

await execute(
  `docker image build -f Dockerfile -t ${REPOSITORY_NAME}:${TAG_NAME} .`,
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
