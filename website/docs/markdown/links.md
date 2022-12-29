---
sidebar_position: 1
id: md-links
title: Links
description: Always use inline links
---

import TLDR from "@site/src/components/TLDR";

<TLDR>

Always use inline links.

</TLDR>

---

:::note Todo
Adjust text to use markdown-lint rules

- links - MD011, MD034, MD039, MD042, MD051, MD052, MD053
:::

:::info
Test
:::

:::warning
Test
:::


## Link descriptions

- https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/mouse-and-keyboard-events/links/all-links-must-contain-either-text-or-an-image-with-alt-text/

## Here a new header

Use [inline](https://spec.commonmark.org/0.29/#inline-link "Link to specification") links instead of [reference](https://spec.commonmark.org/0.29/#reference-link "Link to specification").

**:thumbsup: Correct** code for this rule:

```markdown
[Plone](https://plone.org "Website of Plone")
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
[Plone](#plone)

## Plone
```

```markdown
[Plone][plone-info]

[plone-info]: https://plone.org
```

<!-- vale off -->

## No ID inner spacing

<!-- vale on -->

Do not use inner spaces within link IDs.

> remark-lint: [no-inline-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
[Plone](https://plone.org "Website of Plone") is awesome!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
[Plone]( https://plone.org ) is awesome!

```

## No trailing or leading title spaces

Do not use trailing or leading spaces in link titles.

Add necessary spaces before or after the brackets/braces (`[]`, `()`) to format links within flowing text.

**:thumbsup: Correct** code for this rule:

```markdown
[Plone](https://plone.org "Website of Plone") is awesome! [Guillotina](https://guillotina.readthedocs.io/en/latest/ "Website of Guillotina") is fast!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
[Plone](https://plone.org "Website of Plone") is awesome![ Guillotina ](https://guillotina.readthedocs.io/en/latest/ "Website of Guillotina") is fast!
```

## Autolinks

Try to avoid them.
If you have to use, always add a valid protocol when using [autolinks](https://spec.commonmark.org/0.29/#autolink "Link to specification").

> remark-lint: [no-auto-link-without-protocol](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
https://example.com

https://www.example.com

http://example.com

http://www.example.com.com
```

```markdown
mailto:code@example.com
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
www.example.com

example.com
```

## Unique IDs

Reference link IDs must be unique within a document file.

> remark-lint: [no-duplicate-definitions](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
[Plone](https://plone.org "Website of Plone")
[Guillotina](https://guillotina.readthedocs.io/en/latest/ "Website of Guillotina")
```

**Incorrect** code for this rule:

```markdown
[Plone](https://plone.org "Website of Plone")
[Plone](https://plone.de "Website of Plone")
```
