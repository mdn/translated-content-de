---
title: "MouseEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/MouseEvent/ctrlKey
l10n:
  sourceCommit: 73dcf953330fd6ed7ea414cf63ab0d75518cb88f
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`MouseEvent.ctrlKey`**-Eigenschaft ist ein boolescher Wert, der angibt, ob die <kbd>ctrl</kbd>-Taste gedrückt war oder nicht, als ein bestimmtes Mausereignis auftrat.

Auf Macintosh-Tastaturen wird diese Taste als <kbd>control</kbd>-Taste bezeichnet. Beachten Sie auch, dass auf einem Mac ein Klick in Kombination mit der <kbd>control</kbd>-Taste vom Betriebssystem abgefangen und zur Öffnung eines Kontextmenüs verwendet wird, sodass `ctrlKey` bei Klickereignissen nicht erkennbar ist.

Das Zoom-Gesten mit einer Trackpad-Pinch-Geste sendet ebenfalls ein simuliertes [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis mit `ctrlKey` auf `true` gesetzt.

## Wert

Ein boolescher Wert, wobei `true` angibt, dass die Taste gedrückt ist, und `false` angibt, dass die Taste _nicht_ gedrückt ist.

## Beispiele

Dieses Beispiel protokolliert die `ctrlKey`-Eigenschaft, wenn Sie ein [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis auslösen.

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

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
