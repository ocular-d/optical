---
slug: vs-code-fpr-writing
title: VS Code for (technical) writing
authors: [svx]
date: 2021-03-14
description: How to configure and setup VS Code for Markdown based (technical) writing
tags: [VS Code, writing]
---

import TLDR from "@site/src/components/TLDR";

<TLDR>

This article showcases how you can use VS Code for (technical) writing based on [Markdown](https://en.wikipedia.org/wiki/Markdown).

The end result will be a tailored setup with enhancements providing you with information and feedback about your content.

</TLDR>

---

![Drag Racing](/img/blog/vs-code-wip.png)

## Features

- Reading Time
- Number of words
- Readability score
- Git status
- Line rulers
- Empty spaces
- Linters

![Hello](/img/blog/vs-code-content-info.png)

## Docs like code

In the same manner that you configure VS Code for reporting coding style violations, you can configure it to report writing inconsistencies and validations.

You will see how you can use VS Code to catch insensitive, inconsiderate writing,
check your content against your editorial and content style guides, identify typos and grammatical errors.

![Hello](/img/blog/dac2.png)

## Prerequisite

For a fully working setup please make sure to have all needed dependencies installed.

Globally on your system:

- [Vale](https://docs.errata.ai/vale/about "Link to Vale website")

Locally in your project:

- [ocld-writing](https://www.npmjs.com/package/ocld-writing "Link to ocld-writing on NPM")

ocld-writing is a NPM meta package, installing the following NPM packages

- remark,
- remark-cli
- remark-preset-lint-consistent
- remark-preset-lint-markdown-style-guide
- remark-preset-lint-recommended
- remark-validate-links
- alex
- markdown-link-check

If you prefer, you can install all included packages one by one.

Check the [README](https://github.com/ocular-d/ocld-writing/blob/master/README.md "Link to ocld-writing README on GitHub") for the included packages.

## VS Code Extension

:::tip Recommendation
Backup your VS Code configuration and plugins **before** you install this extension!
:::

Install the [ocular-d extension package](https://marketplace.visualstudio.com/items?itemName=ocular-d.writing-extension-pack)
for VS Code for creating stunning Markdown based documentation.

### Included Extensions

#### Markdown

- [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji "Link to MD emoji extension")- VS Code support for `:emoji:` in preview mode
- [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc "Link to MD toc extension") - Generate TOC (table of contents) of headlines
- [Remark Lint](https://marketplace.visualstudio.com/items?itemName=drewbourne.vscode-remark-lint "Link to remark lint extension") - Use remark lint Markdown

#### Writing

- [WordCounter](https://marketplace.visualstudio.com/items?itemName=kirozen.wordcounter "Link to word count extension") - Show number or words
- [Highlight Trailing White Spaces](https://marketplace.visualstudio.com/items?itemName=ybaumes.highlight-trailing-white-spaces "Link to trailing spaces extension") - Highlight color trailing white spaces in red
- [Read Time](https://marketplace.visualstudio.com/items?itemName=johnpapa.read-time "Link to read time extension") - Show reading time
- [Alex-linter](https://marketplace.visualstudio.com/items?itemName=TLahmann.alex-linter&utm_source=VSCode.pro&utm_campaign=AhmadAwais "Link to extension") - Catch insensitive, inconsiderate writing
- [Readability check](https://marketplace.visualstudio.com/items?itemName=jemcclin.readabilitycheck "Link to extension") - Check text for readability
- [Vale VS Code](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server "Link to extension") - Linting for prose

#### Spellcheck

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker "Link to code spell checker extension") - A spell checker

#### Screenshot

- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode "Link to polacode extension") - Polaroid for your code

#### Other

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2 "Link to bracket colorizer extension") - Allows matching brackets to be identified with colors
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag "Link to matching tag extension") - Highlights matching closing and opening tags
- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow "Link to indent extension") - Makes indentation easier to read
- [VuePress Snippets](https://marketplace.visualstudio.com/items?itemName=ocular-d.vuepress-snippets "Link to extension") - Custom VuePress snippets for (technical) writing
- [Writing Snippets](https://marketplace.visualstudio.com/items?itemName=ocular-d.writing "Link to extension") - Snippets for (technical) writing with Markdown

### Configuration

The follow settings are changing some of the default ones, enhancing the user experience
or needed by certain plugins.

Configure the settings via the VS Code UI or by adding the settings below to your *settings.json* file.

You may want to adjust them settings to your needs!

```json
{
    "telemetry.enableTelemetry": false,
    "telemetry.enableCrashReporter": false,
    "workbench.editor.highlightModifiedTabs": true,
    "editor.cursorBlinking": "solid",
    "files.trimFinalNewlines": true,
    "files.autoSave": "afterDelay",
    "vale.core.useCLI": true,
    "vale.server.provideFixes": false,
    "settingsSync.ignoredExtensions": [

    ],
    "editor.codeActionsOnSave": null,
    "editor.rulers": [

        80,
        160
      ],
      "tws.highlightTrailingWhiteSpace": true,
      "editor.renderWhitespace": "trailing",
      "alex-linter.noBinary": true,
      "cSpell.languageSettings": [

      ],

}
```
