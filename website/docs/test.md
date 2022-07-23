---
id: test-page
title: Test
sidebar_label: Test
description: Just some component testing
pagination_prev: null
pagination_next: null
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import TLDR from "@site/src/components/TLDR";
import ButtonBoxList from "@site/src/components/ButtonBoxList";
import ButtonBox from "@site/src/components/ButtonBox";
import RocketSVG from "@site/static/icons/rocket.svg";
import DiamondSVG from "@site/static/icons/diamond.svg";
import SpeechBalloonSVG from "@site/static/icons/speechBalloon.svg";
import HighVoltageSVG from "@site/static/icons/highVoltage.svg";
import ElectricPlugSVG from "@site/static/icons/electricPlug.svg";
import FishingPoleSVG from "@site/static/icons/fishingPole.svg";
import GearSVG from "@site/static/icons/gear.svg";
import AiryBubbleSVG from "@site/static/icons/airyBubble.svg";



We're in the process of sunsetting our legacy API.

---




<TLDR>

Airy Core is an **open-source**, **fully-featured**, **production-ready**
conversational platform.

</TLDR>


## Next steps

<ButtonBoxList>
<ButtonBox
    icon={<HighVoltageSVG />}
    title="What is it"
    description="Learn about cool stuff"
    link='getting-started/components'
/>
<ButtonBox
    icon={<SpeechBalloonSVG />}
    title="Some cool stuff"
    description="Learn about cool stuff"
    link='getting-started/components'
/>
<ButtonBox
    icon={<RocketSVG />}
    iconInvertible={true}
    title='Postman'
    description='Try with Postman'
    link='getting-started/installation/introduction'
/>
<ButtonBox
    icon={<DiamondSVG />}
    iconInvertible={true}
    title='To the Quick Start'
    description='Learn the Basics with our Quick Start'
    link='getting-started/quickstart'
/>
</ButtonBoxList>


## Requirements

To run the legacy API documentation locally, you need:

- [Docker](https://docker.com)



<BrowserWindow url='http://localhost:8080'>

![Picture of old docs in a Docker container](../static/img/pngegg.png 'Picture of old docs in a Docker container')

</BrowserWindow>
