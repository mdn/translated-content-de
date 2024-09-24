---
title: "MouseEvent: movementY-Eigenschaft"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Pointer Lock API")}}

Die **`movementY`**-Eigenschaft der {{domxref("MouseEvent")}}-Schnittstelle ist schreibgeschützt und liefert den Unterschied in der Y-Koordinate des Mauszeigers zwischen dem gegebenen Ereignis und dem vorherigen {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis.
Mit anderen Worten: Der Wert der Eigenschaft wird folgendermaßen berechnet: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementY` und {{domxref("MouseEvent.screenY", "screenY")}}](https://github.com/w3c/pointerlock/issues/42) als von der Spezifikation definiert. Je nach Browser und Betriebssystem können die `movementY`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Möglicherweise möchten Sie die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ({{domxref("MouseEvent.screenX", "screenX")}}, {{domxref("MouseEvent.screenY", "screenY")}}) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl. Immer null bei jedem {{domxref("MouseEvent")}} außer `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Menge der Mausbewegung mit {{domxref("MouseEvent.movementX", "movementX")}} und `movementY`.

### HTML

```html
<p id="log">Bewegen Sie Ihre Maus herum.</p>
```

### JavaScript

```js
function logMovement(event) {
  log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

const log = document.getElementById("log");
document.addEventListener("mousemove", logMovement);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
