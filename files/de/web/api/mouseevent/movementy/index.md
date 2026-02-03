---
title: "MouseEvent: movementY-Eigenschaft"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementY`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert den Unterschied in der Y-Koordinate der Maus (oder des Zeigers) zwischen dem angegebenen Bewegungsereignis und dem vorherigen Bewegungsereignis desselben Typs.

Mit anderen Worten, der Wert der Eigenschaft wird wie folgt berechnet: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.
Der Wert ist für alle Ereignisse außer [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) null.

> [!WARNING]
> Browser [verwenden für `movementY` und `screenY` unterschiedliche Einheiten](https://github.com/w3c/pointerlock/issues/42) als in der Spezifikation definiert.
> Abhängig vom Browser und Betriebssystem können die `movementY`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein.
> Sie sollten möglicherweise die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl.
Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove` und jedem [`PointerEvent`](/de/docs/Web/API/PointerEvent) außer `pointermove` oder `pointerrawupdate`.

## Beispiele

### Mausbewegung für `mousemove`-Ereignisse protokollieren

Dieses Beispiel protokolliert die Menge der Mausbewegung mithilfe von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und `movementY`.

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

{{EmbedLiveSample("Mausbewegung für `mousemove`-Ereignisse protokollieren")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
