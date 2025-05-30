---
title: "MouseEvent: movementY-Eigenschaft"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementY`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die Differenz in der Y-Koordinate des Mauszeigers zwischen dem gegebenen Ereignis und dem vorherigen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis.
Anders ausgedrückt wird der Wert der Eigenschaft so berechnet: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementY` und `screenY`](https://github.com/w3c/pointerlock/issues/42) als die in der Spezifikation definierten. Abhängig vom Browser und Betriebssystem können die `movementY`-Einheiten ein physikalisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Es könnte ratsam sein, die Bewegungseigenschaften zu vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten zu berechnen.

## Wert

Eine Zahl. Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer bei `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Menge der Mausbewegung unter Verwendung von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und `movementY`.

### HTML

```html
<p id="log">Move your mouse around.</p>
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

- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
