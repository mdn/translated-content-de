---
title: "MouseEvent: movementX-Eigenschaft"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementX`**-Eigenschaft der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle bietet die Differenz in der X-Koordinate der Maus (oder des Zeigers) zwischen dem angegebenen Bewegungsereignis und dem vorherigen Bewegungsereignis desselben Typs.

Mit anderen Worten, der Wert der Eigenschaft wird folgendermaßen berechnet: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.
Der Wert ist null für alle Ereignisse außer [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event).

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementX` und `screenX`](https://github.com/w3c/pointerlock/issues/42) als in der Spezifikation definiert.
> Abhängig vom Browser und Betriebssystem können die `movementX`-Einheiten ein physikalisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Es kann ratsam sein, die Bewegungseigenschaften zu vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten zu berechnen.

## Wert

Eine Zahl.
Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove`, und jedem [`PointerEvent`](/de/docs/Web/API/PointerEvent) außer `pointermove` oder `pointerrawupdate`.

## Beispiele

### Mausbewegung für `mousemove`-Ereignisse protokollieren

Dieses Beispiel protokolliert die Menge der Mausbewegung unter Verwendung von `movementX` und [`movementY`](/de/docs/Web/API/MouseEvent/movementY).

#### HTML

```html
<p id="log">Move your mouse around.</p>
```

#### JavaScript

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

#### Ergebnis

{{EmbedLiveSample("### Mausbewegung für `mousemove`-Ereignisse protokollieren")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
