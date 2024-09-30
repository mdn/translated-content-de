---
title: "HTMLProgressElement: position-Eigenschaft"
short-title: position
slug: Web/API/HTMLProgressElement/position
l10n:
  sourceCommit: 2b1417faf65c87bb164a0e75043c1fb53f43a848
---

{{APIRef("HTML DOM")}}

Die **`position`**-Eigenschaft des [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)-Interfaces, die nur lesen ist, gibt den aktuellen Fortschritt des {{HTMLElement("progress")}}-Elements zurück.

## Wert

Für eine determinierte Fortschrittsanzeige gibt sie das Ergebnis des aktuellen Wertes geteilt durch den Maximalwert zurück, d.h. ein Bruchteil zwischen `0.0` und `1.0`.

Für eine indeterminierte Fortschrittsanzeige beträgt der Wert immer `-1`.

## Beispiele

### HTML

```html
Determinate Progress bar: <progress id="pBar"></progress> Position:
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
