---
title: "MouseEvent: movementX-Eigenschaft"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementX`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die Differenz in der X-Koordinate des Mauszeigers zwischen dem gegebenen Ereignis und dem vorherigen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis an.
Mit anderen Worten wird der Wert der Eigenschaft so berechnet: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementX` und `screenX`](https://github.com/w3c/pointerlock/issues/42) als die von der Spezifikation definierten. Abhängig vom Browser und Betriebssystem können die `movementX`-Einheiten ein physischer Pixel, ein logischer Pixel oder ein CSS-Pixel sein. Es kann sinnvoll sein, die Bewegungseigenschaften zu vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten zu berechnen.

## Wert

Eine Zahl. Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Menge der Mausbewegung mithilfe von `movementX` und [`movementY`](/de/docs/Web/API/MouseEvent/movementY).

### HTML

```html
<p id="log">Move your mouse around.</p>
```

### JavaScript

```js
const log = document.getElementById("log");

function logMovement(event) {
  log.insertAdjacentHTML(
    "afterbegin",
    `movement: ${event.movementX}, ${event.movementY}<br>`,
  );
  while (log.childNodes.length > 128) log.lastChild.remove();
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

- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
