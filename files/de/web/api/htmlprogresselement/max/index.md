---
title: "HTMLProgressElement: max-Eigenschaft"
short-title: max
slug: Web/API/HTMLProgressElement/max
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

Die **`max`**-Eigenschaft der [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)-Schnittstelle stellt die obere Grenze des Bereichs des {{HTMLElement("progress")}}-Elements dar.

## Wert

Eine Fließkommazahl, die größer als null ist. Der Standardwert ist 1,0.

## Beispiele

### HTML

```html
Progress: <progress id="pBar"></progress> <span>0</span>%
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

console.log(`Default value of max: ${pBar.max}`);

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = Math.trunc(pBar.position * 100);
}, 100);
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
