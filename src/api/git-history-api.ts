import { Octokit } from "@octokit/core";

const getGitHistory = async (authKey: string) => {
  try {
    const octokit = new Octokit({
      auth: authKey,
    });

    const response = await octokit.request("GET /repos/ali4code/git-history/commits", {
      owner: "OWNER",
      repo: "REPO",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getGitHistory;
