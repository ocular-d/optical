---
sidebar_position: 11
id: paragraphs
title: Paragraphs
description: Never indent the content of paragraphs
---

import TLDR from "@site/src/components/TLDR";

<TLDR>

Never indent the content of paragraphs.

</TLDR>

---

## No Indentation

> remark-lint: [no-paragraph-content-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-paragraph-content-indent "Link to remarkjs")

**:thumbsup: Correct** code for this rule:

```markdown
The summer is awesome!
Swimming is great.
```

::: tip Note
The `·` character represents a space.
:::

**:thumbsdown: Incorrect** code for this rule:

```markdown
·The summer is awesome!
·Swimming is great.
```

```markdown
······The summer is awesome!
········Swimming is fun.
```
