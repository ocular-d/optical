---
sidebar_position: 2
id: admonitions
title: Admonitions
description: Use admonitions to capture the reader’s attention, but don't overuse them
tags:
  - Editorial
  - Style Guide
---

import TLDR from "@site/src/components/TLDR";
import SuccessBox from "@site/src/components/SuccessBox";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<TLDR>

Use admonitions to capture the reader’s attention, but don't overuse them.

</TLDR>

---

Admonitions stand out from the main body of text to capture the reader’s attention on something important.
For their nature, they break the reading flow and are perceived as a distraction by readers.
If they appear frequently, readers will think that they don't contain important information, so they will skip them.

## Recommendations

When you use admonitions, keep these recommendations in mind:

- Before adding an admonition, ask yourself whether an admonition is really needed for that content
- Give the admonition a meaningful title that hints at the content it contains. Don't use "Tip", "Info" or "Warning"
- Use admonition types consistently. We explain when to use each type later in the article.
- If the admonition is about a specific step, place it inside the step.
- If the admonition is generic for the topic, place it at the beginning of the topic.
- If the admonition is a generic consideration after a series of steps, place it at the end of the topic.
- Never start a section with an admonition.
- Never place two admonitions next to each other.
- Don't nest admonitions.

## Admonition types

Use three admonition types: Tips, Infos, and Warnings.

### Tip

Also known as "best practice" or "hint", it conveys the possibility to enhance the user experience by implementing the recommendations it contains.

:::tip Tip's title
This is a "tip" admonition, use it to give recommendations and best practices that will enhance the user experience.
:::

### Info

Also known as "note" or “notice”, it contains generic contextual and additional info about requirements and technical limitations.
It also conveys the possibility of soft errors when the recommendations contained are not followed.

:::info Info's title
This is a "info" admonition. Use it to give information about limitations, additional considerations, or warn the user about possible soft errors.
:::

### Caution

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `API`](#).

:::

### Warning

Also known as "danger", “alert”, it alerts the reader about the possibility of fatal errors,
human damage, and consequent liability if caution is not used or if the recommendations contained are not followed.

:::danger Warning's title
This is a "warning" admonition. Use it to warn the user about possible fatal errors and possibility of service disruption.
:::

---

<SuccessBox>

## Read more

Additionally, [research indicates](https://www.nngroup.com/articles/how-users-read-on-the-web/ "How users read on the Web by Nielsen Norman Group") that readers tend to scan the content rapidly
and only turn their attention when they spot something important.
By giving a meaningful title to an admonition, you'll reduce the cognitive load and the task completion time
by allowing readers to spot at a glance if they are interested in the admonition or not.

</SuccessBox>