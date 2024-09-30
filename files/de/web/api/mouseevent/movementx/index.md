---
title: "MouseEvent: movementX-Eigenschaft"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Pointer Lock API")}}

Die **`movementX`** schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die Differenz der X-Koordinate des Mauszeigers zwischen dem gegebenen Ereignis und dem vorherigen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis. Mit anderen Worten wird der Wert der Eigenschaft folgendermaßen berechnet: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementX` und [`screenX`](/de/docs/Web/API/MouseEvent/screenX)](https://github.com/w3c/pointerlock/issues/42) als die von der Spezifikation definierten. Je nach Browser und Betriebssystem können die `movementX`-Einheiten ein physisches Pixel, ein logisches Pixel oder ein CSS-Pixel sein. Sie sollten möglicherweise die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Clientwerten ([`screenX`](/de/docs/Web/API/MouseEvent/screenX), [`screenY`](/de/docs/Web/API/MouseEvent/screenY)) und den vorherigen Clientwerten berechnen.

## Wert

Eine Zahl. Immer null bei jedem [`MouseEvent`](/de/docs/Web/API/MouseEvent) außer `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Mausbewegung mit `movementX` und [`movementY`](/de/docs/Web/API/MouseEvent/movementY).

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
