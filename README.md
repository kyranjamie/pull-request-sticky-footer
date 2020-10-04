<p>
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/kyranjamie/pull-request-sticky-footer/workflows/build/badge.svg"></a>
  <a href="http://www.wtfpl.net/about/"><img alt="License WTFPL" src="https://img.shields.io/badge/License-WTFPL-brightgreen.svg"></a>
</p>

# Pull Request Sticky Footer

> Keep a custom message at the bottom of your PR description

This PR is forked from @lucasmotta's [pull-request-sticky-header](https://github.com/lucasmotta/pull-request-sticky-header)

```yml
name: Sticky footer example
on:
  pull_request:
    branches:
      - master
jobs:
  pull-request:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: kyranjamie/pull-request-sticky-footer@1.0.0
        with:
          footer: '> 🚀 This message is automated and the run number is: **${{ github.run_number }}**'
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
