import * as core from '@actions/core'
import * as github from '@actions/github'
import { upsertFooter } from './utils'

async function run(): Promise<void> {
  const pullNumber = github.context.payload.pull_request?.number || 0

  if (isNaN(pullNumber) || pullNumber < 1) {
    core.info('Not a pull request, skipping it...')
    return
  }

  try {
    const githubToken = core.getInput('github_token', { required: true })
    const footer = core.getInput('footer', { required: true })
    const octokit = github.getOctokit(githubToken)
    const repo = github.context.repo

    const pullRequest = await octokit.pulls.get({
      ...repo,
      pull_number: pullNumber,
    })

    const params = {
      ...github.context.repo,
      pull_number: pullNumber,
      body: upsertFooter(footer, pullRequest?.data?.body),
    }

    await octokit.pulls.update(params)
  } catch ({ message }) {
    core.setFailed(message)
  }
}

run()
