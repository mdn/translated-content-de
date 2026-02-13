---
title: "MouseEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/MouseEvent/ctrlKey
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die **`MouseEvent.ctrlKey`** schreibgeschützte Eigenschaft ist ein boolescher Wert, der angibt, ob die <kbd>ctrl</kbd>-Taste gedrückt wurde oder nicht, wenn ein bestimmtes Mausereignis eintritt.

Auf Macintosh-Tastaturen ist diese Taste als <kbd>control</kbd>-Taste beschriftet. Beachten Sie auch, dass auf einem Mac ein Klick in Kombination mit der <kbd>control</kbd>-Taste vom Betriebssystem abgefangen und zum Öffnen eines Kontextmenüs verwendet wird, sodass das `ctrlKey` bei Klickereignissen nicht erkennbar ist.

Das Pinch-Zoomen mit einem Trackpad sendet ebenfalls ein simuliertes [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis mit `ctrlKey` auf true gesetzt.

## Wert

Ein boolescher Wert, bei dem `true` anzeigt, dass die Taste gedrückt ist, und `false`, dass die Taste _nicht_ gedrückt ist.

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
