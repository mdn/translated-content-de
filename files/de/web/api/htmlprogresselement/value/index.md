---
title: "HTMLProgressElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLProgressElement/value
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

Die **`value`**-Eigenschaft der Schnittstelle [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement) stellt den aktuellen Fortschritt des {{HTMLElement("progress")}}-Elements dar.

## Wert

Eine Gleitkommazahl. Wenn kein [`max`](/de/docs/Web/API/HTMLProgressElement/max)-Wert auf der Fortschrittsanzeige gesetzt ist, liegt der Wert zwischen 0,0 und 1,0. Wenn der `max`-Wert gesetzt ist, liegt der `value` zwischen `0` und dem `max`-Wert.

Wenn die `value`-Eigenschaft nicht auf das [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)-Objekt gesetzt ist, bleibt die Fortschrittsanzeige unbestimmt.

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
