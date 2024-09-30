---
title: "MouseEvent: Eigenschaft movementY"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementY`**-Eigenschaft der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle gibt den Unterschied in der Y-Koordinate des Mauszeigers zwischen dem aktuellen Ereignis und dem vorherigen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis an. Mit anderen Worten, der Wert der Eigenschaft wird wie folgt berechnet: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementY` und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)](https://github.com/w3c/pointerlock/issues/42) als in der Spezifikation definiert. Abhängig vom Browser und Betriebssystem können die Einheiten von `movementY` ein physischer Pixel, ein logischer Pixel oder ein CSS-Pixel sein. Sie sollten in Erwägung ziehen, die Bewegungseigenschaften zu vermeiden und stattdessen das Delta zwischen den aktuellen Clientwerten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Clientwerten zu berechnen.

## Wert

Eine Zahl. Immer null bei jedem anderen [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove`.

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
