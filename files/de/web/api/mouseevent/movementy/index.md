---
title: "MouseEvent: movementY Eigenschaft"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: 14d2fab5e6e2c9ddb412a347d54e554477082947
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementY`**-Eigenschaft der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle liefert die Differenz in der Y-Koordinate der Maus (oder des Zeigers) zwischen dem gegebenen Bewegungsereignis und dem vorhergehenden Bewegungsereignis desselben Typs.

Mit anderen Worten, der Wert der Eigenschaft wird wie folgt berechnet: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.
Der Wert ist für alle anderen Ereignisse als [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) null.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementY` und `screenY`](https://github.com/w3c/pointerlock/issues/42) als die, die die Spezifikation definiert.
> Je nach Browser und Betriebssystem können die `movementY`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein.
> Sie sollten möglicherweise die Bewegungs-Eigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl.
Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove` und bei jedem [`PointerEvent`](/de/docs/Web/API/PointerEvent) außer `pointermove` oder `pointerrawevent`.

## Beispiele

### Mausbewegung für `mousemove`-Ereignisse protokollieren

Dieses Beispiel protokolliert das Ausmaß der Mausbewegung unter Verwendung von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und `movementY`.

#### HTML

```html
<p id="log">Move your mouse around inside this element.</p>
```

#### JavaScript

```js
const log = document.getElementById("log");

function logMovement(event) {
  log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

document.addEventListener("mousemove", logMovement);
```

#### Ergebnis

{{EmbedLiveSample("Log mouse movement for `mousemove` events")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
