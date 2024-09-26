---
title: "MouseEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/MouseEvent/ctrlKey
l10n:
  sourceCommit: 192bb8c0fd91f451c69303a431971c1937c4feca
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.ctrlKey`** ist ein boolescher Wert, der angibt, ob die <kbd>ctrl</kbd>-Taste gedrückt war oder nicht, als ein bestimmtes Mausereignis auftrat.

Auf Macintosh-Tastaturen ist diese Taste als <kbd>control</kbd>-Taste beschriftet. Beachten Sie auch, dass auf einem Mac ein Klick in Kombination mit der <kbd>control</kbd>-Taste vom Betriebssystem abgefangen und zum Öffnen eines Kontextmenüs verwendet wird. Daher ist `ctrlKey` bei Klickereignissen nicht nachweisbar.

## Wert

Ein boolescher Wert, wobei `true` anzeigt, dass die Taste gedrückt ist, und `false` anzeigt, dass die Taste _nicht_ gedrückt ist.

## Beispiele

Dieses Beispiel protokolliert die `ctrlKey`-Eigenschaft, wenn Sie ein {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis auslösen.

### HTML

```html
<p id="log">The ctrl key was pressed while the cursor was moving: false</p>
```

### JavaScript

```js
const log = document.querySelector("#log");
window.addEventListener("mousemove", logKey);

function logKey(e) {
  log.textContent = `The ctrl key was pressed while the cursor was moving: ${e.ctrlKey}`;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseEvent") }}