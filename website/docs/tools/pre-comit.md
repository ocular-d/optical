---
sidebar_position: 4
title: Pre-commit Hooks
description: Pre-commit hooks
---

A framework for managing and maintaining multi-language pre-commit hooks.

---
## lefhook

Here info about lefthook
## pre-commit

A framework for managing and maintaining multi-language pre-commit hooks.

---

A multi-language package manager for pre-commit hooks.
You specify a list of hooks you want and pre-commit manages the installation and execution of any hook written in any language before every commit.

pre-commit is specifically designed to not require root access.

:::info

For detailed docs, please check the official pre-commit [documentation](https://pre-commit.com/)!

:::

### Installation

Before you can run hooks, you need to have the pre-commit package manager installed.

Using pip:

```shell
pip install pre-commit
```

Using Homebrew:

```shell
brew install pre-commit
```

### Configuration

<!-- vale off -->

- Create a file named *.pre-commit-config.yaml*
- You can generate a basic configuration using `pre-commit sample-config`

<!-- vale on -->

```yml
fail_fast: true

repos:
- repo: https://github.com/ocular-d/pre-commit-hooks.git
  rev: 0.0.6
  hooks:
    - id: python-black
    - id: python-isort
    - id: vale
    - id: markdown-lint

- repo: local
  hooks:
    - id: hadolint-docker
      name: Lint Dockerfiles
      description: Runs hadolint Docker image to lint Dockerfiles
      language: docker_image
      types: ["dockerfile"]
      entry: hadolint/hadolint:v2.8.0 hadolint

- repo: https://github.com/zricethezav/gitleaks
  rev: v8.2.0
  hooks:
    - id: gitleaks
      name: Gitleaks

- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: v4.1.0
  hooks:
    - id: file-contents-sorter
      name: Sort files (.gitignore, .dockerignore)
      description: Sort .gitignore and .dockerignore alphabetical
      verbose: true
      files: .gitignore|.dockerignore
      args: [--unique]
```

### Install the git hook scripts

Run `pre-commit install` to set up the git hook scripts.

```shell
pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

Now pre-commit will run automatically on git commit!

## Husky

Here info about Husky