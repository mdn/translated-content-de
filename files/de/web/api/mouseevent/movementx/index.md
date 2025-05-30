---
title: "MouseEvent: movementX Eigenschaft"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{APIRef("Pointer Lock API")}}

Die **`movementX`** schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert den Unterschied in der X-Koordinate des Mauszeigers zwischen dem gegebenen Ereignis und dem vorherigen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis. Mit anderen Worten, der Wert der Eigenschaft wird wie folgt berechnet: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementX` und `screenX`](https://github.com/w3c/pointerlock/issues/42) als in der Spezifikation definiert. Abhängig vom Browser und Betriebssystem können die `movementX`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Möglicherweise möchten Sie die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl. Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Menge der Mausbewegung unter Verwendung von `movementX` und [`movementY`](/de/docs/Web/API/MouseEvent/movementY).

### HTML

```html
<p id="log">Move your mouse around.</p>
```

### JavaScript

```js
function logMovement(event) {
  log.insertAdjacentHTML(
    "afterbegin",
    `movement: ${event.movementX}, ${event.movementY}<br>`,
  );
  while (log.childNodes.length > 128) log.lastChild.remove();
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

- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
