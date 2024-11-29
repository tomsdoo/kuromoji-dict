import { exec } from "child_process";

export function execute(cmd: string): Promise<string> {
  console.log(cmd);
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      console.log(stderr || stdout);
      (err ? reject : resolve)(err ? stderr || stdout : stdout);
    });
  });
}
