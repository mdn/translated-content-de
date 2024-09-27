---
title: "HTMLProgressElement: value Eigenschaft"
short-title: value
slug: Web/API/HTMLProgressElement/value
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

Die **`value`**-Eigenschaft des [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)-Interfaces repräsentiert den aktuellen Fortschritt des {{HTMLElement("progress")}}-Elements.

## Wert

Eine Fließkommazahl. Wenn der [`max`](/de/docs/Web/API/HTMLProgressElement/max)-Wert nicht auf der Fortschrittsleiste gesetzt ist, liegt der Wert zwischen 0,0 und 1,0. Ist der `max`-Wert gesetzt, dann liegt der `value` zwischen `0` und dem `max`-Wert.

Wenn die `value`-Eigenschaft am [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)-Objekt nicht gesetzt ist, bleibt die Fortschrittsleiste unbestimmt.

## Beispiele

### HTML

```html
Determinate Progress bar: <progress id="pBar"></progress> <span>0</span>%
<br />
Indeterminate Progress bar: <progress></progress>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

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
