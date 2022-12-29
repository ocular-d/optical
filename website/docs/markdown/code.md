---
sidebar_position: 2
id: md-code
title: Code
description: Guide for code and code blocks
---

import TLDR from "@site/src/components/TLDR";

<TLDR>

Guide for code and code blocks.

</TLDR>

---

## Code Blocks

<!--lint disable-->

Avoid indentation based code blocks, use [fenced code blocks](https://spec.commonmark.org/0.29/#fenced-code-blocks "Link to CommonMark spec") for multi line code.

This prevents malformed rendered output due to wrong indentation errors, increases the readability and allows the usage of [language syntax highlighting](https://v1.vuepress.vuejs.org/guide/markdown.html#syntax-highlighting-in-code-blocks "Link to vuepress docs about syntax highlighting").

> remark-lint: [code-block-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-code-block-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Awesome extends PureComponent {
  // ...
}

export default Awesome;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~
```js
    import React, { PureComponent } from "react";

    class Awesome extends PureComponent {
      // ...
    }

    export default Awesome;
```
~~~

### Fenced code blocks should be surrounded by blank lines

>markdown-lint:[MD031 ](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031)

This rule is triggered when fenced code blocks are either not preceded or not
followed by a blank line:

````markdown
Some text
```
Code block
```

```
Another code block
```
Some more text
````

To fix this, ensure that all fenced code blocks have a blank line both before
and after (except where the block is at the beginning or end of the document):

````markdown
Some text

```
Code block
```

```
Another code block
```

Some more text
````

Set the `list_items` parameter to `false` to disable this rule for list items.
Disabling this behavior for lists can be useful if it is necessary to create a
[tight](https://spec.commonmark.org/0.29/#tight) list containing a code fence.

Rationale: Aside from aesthetic reasons, some parsers, including kramdown, will
not parse fenced code blocks that don't have blank lines before and after them.

## Syntax highlighting

Explicitly declare the language for blocks containing code snippets, so that neither the syntax highlighter nor the next editor must guess.

> remark-lint: [fenced-code-flag](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-flag "Link to remarkjs docs")
> markdown-lint: [MD040](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040)

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Awesome extends PureComponent {
  // ...
}

export default Awesome;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~md
```
import React, { PureComponent } from "react";

class Awesome extends PureComponent {
  // ...
}

export default Awesome;
```
~~~

## Escape newlines in terminal commands

Command snippets are intended to be copied and pasted directly into for example a terminal.

To protect the user from unintentional run the copied code due to a newline (interpreted by the terminal as <kbd>Enter</kbd>) use a single backslash at the end of the line.

**:thumbsup: Correct** code for this rule:

```bash
npx run docs:generate -- --template=plone --description="Plone is awesome" \
--elements="volto" --scale=20
```

**:thumbsdown: Incorrect** code for this rule:

```bash
npx run docs:generate -- --template=plone --description="Plone is awesome" --elements="volto" --scale=20
```

## No shell code dollar sign

Avoid to use dollar sign (`$`) in shell code.
It improves the readability and prevents error when users copy and paste the code.

To clarify the output of a command use for example a comment on the next line or optionally append it to the command on the same line, separated by a space.

> remark-lint: [no-shell-dollars](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shell-dollars "Link to remarkjs docs")
> markdown-lint:[MD014](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md014)

**:thumbsup: Correct** code for this rule:

```bash
echo "Plone is awesome!"
```

```bash
winter="Plone is awesome!"
echo $winter # Plone is awesome!
```

**:thumbsdown: Incorrect** code for this rule:

```bash
$ echo "Plone is awesome!"
```

## Within lists

When using code blocks within lists make sure to use the correct indention to not break the list.

**:thumbsup: Correct** code for this rule:

~~~
- Plone
  ```jsx
  const Volto = <Scale amount=20 />;
  ```
- Guillotina
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~
- Plone
```jsx
const Volto = <Scale amount=20 />;
```
- Guillotina
~~~

## Inline

Use one (1) backtick character `` ` `` to create a `inline code` span which will render all wrapped content literally.

**:thumbsup: Correct** code for this rule:

```md
Use `pip` and `buildout`!
```

**:thumbsdown: Incorrect** code for this rule:

~~~md
Use ```pip``` and ```buildout```!
~~~

## Marker character style

Use backtick characters `` ` `` for both blocks and inline code.

> remark-lint: [fenced-code-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-marker "Link to remarkjs docs")
> markdown-lint:[https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048)

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";
class Awesome extends PureComponent {
  // ...
}
export default Awesome;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

```
~~~js
import React, { PureComponent } from "react";
class Awesome extends PureComponent {
  // ...
}
export default Awesome;
~~~
```

## Use cases

[Code blocks](#blocks) should be used for code snippets longer than a single line
or terminal command quotations that contain sample output when the being executed.

[Inline code spans](#inline) on the other hand should be used to highlight e.g.

- **Executables** - `gcc`, `npm`, `go`, `python`
- **Paths** - `/etc/hosts`, `src/main/java/com/arcticicestudio/icecore/hashids/Hashids.java`
- **Version numbers** - `0.2.0`, `1.8.6-frost.2`
- **Code for example reserved keywords, builtins and operators** - `this`, `true`/`false`, `String`, `=>`
- **HTTP calls** - `GET`, `POST`, `PATCH`

Don't use it for

- **Project or proper names** - for example [React](https://reactjs.org "Link to reactjs"), [GCC](https://gcc.gnu.org "Link to GCC"), [Node.js](https://nodejs.org "Link to nodejs"), [Golang](https://golang.org "Link to Golang") or [Rust](https://www.rust-lang.org "Link to rust")
- **Libraries** - for example [yafowil.plone](https://pypi.org/project/yafowil.plone/ "Plone Integration for YAFOWIL")
- **Packages and modules** - for example [react-dom](https://www.npmjs.com/package/react-dom "Link to react-dom")
<!--lint enable-->

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <h2>Sauce OnDemand Plugin</h2>
    <p>Use the Sauce Labs OnDemand plugin in conjunction with your existing CI pipeline to integrate your tests.<br/>
      <ul>
        <li><a href="/basics/integrations/bamboo">Bamboo</a></li>
        <li><a href="/basics/integrations/bitbucket">Bitbucket</a></li>
        <li><a href="/basics/integrations/jenkins">Jenkins</a></li>
        <li><a href="/basics/integrations/teamcity">TeamCity</a></li>
      </ul></p>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <h2>3rd Party Integrations</h2>
    <p>Get set up instructions provided by external developers for CI platforms for which we don't yet have a dedicated plugin.<br/>
      <ul>
        <li><a href="https://circleci.com/integrations/saucelabs/">CircleCI</a></li>
        <li><a href="https://docs.travis-ci.com/user/sauce-connect/">Travis CI</a></li>
      </ul></p>
    </div>
  </div>
</div>
<div>
  <div className="box boxwidebottom card">
    <div className="container">
    <h2>Learn More</h2>
    <p>Not a developer? Want to learn more about continuous integration and how you can design a strategy for testing right through your entire software development cycle? Check out some of these helpful resources.<br/>
      <ul>
        <li><a href="https://saucelabs.com/resources/articles/automated-testing-in-cicd-a-continuous-integration-server-integration-primer">Automated Testing in CI/CD Primer White Paper</a></li>
        <li><a href="https://saucelabs.com/blog/choosing-a-ci-cd-tool">Choosing a CI/CD Tool Blog</a></li>
        <li><a href="https://training.saucelabs.com/codelabs/Module2-Testrunner/index.html?index=..%2F..saucectl#4">Sauce School Cypress/GitHub Actions Integration Module</a></li>
      </ul></p>
    </div>
  </div>
</div>