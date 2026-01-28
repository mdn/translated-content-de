---
title: "MouseEvent: movementX-Eigenschaft"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: 14d2fab5e6e2c9ddb412a347d54e554477082947
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`movementX`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die Differenz in der X-Koordinate der Maus (oder Zeiger) zwischen dem angegebenen Bewegungsereignis und dem vorherigen Bewegungsereignis desselben Typs.

Mit anderen Worten, der Wert der Eigenschaft wird so berechnet: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.
Der Wert ist für alle anderen Ereignisse als [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) gleich null.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementX` und `screenX`](https://github.com/w3c/pointerlock/issues/42), als es die Spezifikation definiert.
> Abhängig vom Browser und Betriebssystem können die `movementX`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Sie sollten möglicherweise die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl.
Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove` und jedem [`PointerEvent`](/de/docs/Web/API/PointerEvent) außer `pointermove` oder `pointerrawevent`.

## Beispiele

### Mausbewegung für `mousemove`-Ereignisse protokollieren

Dieses Beispiel protokolliert die Menge der Mausbewegung mit `movementX` und [`movementY`](/de/docs/Web/API/MouseEvent/movementY).

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
