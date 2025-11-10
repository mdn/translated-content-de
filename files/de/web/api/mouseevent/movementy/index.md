---
title: "MouseEvent: movementY-Eigenschaft"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte Eigenschaft **`movementY`** des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die Differenz in der Y-Koordinate des Mauszeigers zwischen dem gegebenen Ereignis und dem vorherigen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis. Mit anderen Worten wird der Wert der Eigenschaft folgendermaßen berechnet: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementY` und `screenY`](https://github.com/w3c/pointerlock/issues/42) als die, die die Spezifikation definiert. Abhängig vom Browser und Betriebssystem können die `movementY`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Möglicherweise möchten Sie die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl. Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Menge der Mausbewegung unter Verwendung von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und `movementY`.

### HTML

```html
<p id="log">Move your mouse around.</p>
```

### JavaScript

```js
const log = document.getElementById("log");

function logMovement(event) {
  log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

document.addEventListener("mousemove", logMovement);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
