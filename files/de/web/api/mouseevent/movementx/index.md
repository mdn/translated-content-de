---
title: "MouseEvent: movementX-Eigenschaft"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Pointer Lock API")}}

Die **`movementX`** schreibgeschützte Eigenschaft des {{domxref("MouseEvent")}}-Interfaces liefert die Differenz in der X-Koordinate des Mauszeigers zwischen dem angegebenen Ereignis und dem vorherigen {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis.
Mit anderen Worten, der Wert der Eigenschaft wird folgendermaßen berechnet: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

> [!WARNING]
> Browser [verwenden unterschiedliche Einheiten für `movementX` und {{domxref("MouseEvent.screenX", "screenX")}}](https://github.com/w3c/pointerlock/issues/42) als das, was die Spezifikation definiert. Je nach Browser und Betriebssystem können die `movementX`-Einheiten ein physischer Pixel, ein logischer Pixel oder ein CSS-Pixel sein. Sie sollten möglicherweise die Bewegungseigenschaften vermeiden und stattdessen das Delta zwischen den aktuellen Client-Werten ({{domxref("MouseEvent.screenX", "screenX")}}, {{domxref("MouseEvent.screenY", "screenY")}}) und den vorherigen Client-Werten berechnen.

## Wert

Eine Zahl. Immer null bei jedem {{domxref("MouseEvent")}} außer `mousemove`.

## Beispiele

Dieses Beispiel protokolliert die Menge der Mausbewegung unter Verwendung von `movementX` und {{domxref("MouseEvent.movementY", "movementY")}}.

### HTML

```html
<p id="log">Bewegen Sie Ihre Maus herum.</p>
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

- {{domxref("MouseEvent.movementY")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
