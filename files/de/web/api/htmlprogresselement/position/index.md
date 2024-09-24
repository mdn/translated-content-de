---
title: "HTMLProgressElement: position-Eigenschaft"
short-title: position
slug: Web/API/HTMLProgressElement/position
l10n:
  sourceCommit: 2b1417faf65c87bb164a0e75043c1fb53f43a848
---

{{APIRef("HTML DOM")}}

Die **`position`** Eigenschaft des {{DOMxRef("HTMLProgressElement")}} Interfaces gibt den aktuellen Fortschritt des {{HTMLElement("progress")}} Elements zurück.

## Wert

Bei einem determinierten Fortschrittsbalken gibt sie das Ergebnis des aktuellen Wertes geteilt durch den Maximalwert zurück, d.h. einen Bruchteil zwischen `0.0` und `1.0`.

Bei einem unbestimmten Fortschrittsbalken ist der Wert immer `-1`.

## Beispiele

### HTML

```html
Determinate Fortschrittsbalken: <progress id="pBar"></progress> Position:
<span>0</span>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = pBar.position;
}, 100);
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
