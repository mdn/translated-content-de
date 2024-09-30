---
title: "MouseEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/MouseEvent/altKey
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.altKey`** ist ein boolescher Wert, der angibt, ob die <kbd>alt</kbd>-Taste gedrückt war oder nicht, als ein bestimmtes Mausereignis auftrat.

Beachten Sie, dass der Browser unter einigen Betriebssystemen die <kbd>alt</kbd>-Taste nicht immer erkennen kann. Bei einigen Linux-Varianten wird beispielsweise ein linker Mausklick in Kombination mit der <kbd>alt</kbd>-Taste verwendet, um Fenster zu verschieben oder zu ändern.

> [!NOTE]
> Auf Macintosh-Tastaturen ist diese Taste auch als <kbd>option</kbd>-Taste bekannt.

## Wert

Ein boolescher Wert, wobei `true` anzeigt, dass die Taste gedrückt ist, und `false` anzeigt, dass die Taste _nicht_ gedrückt ist.

## Beispiele

Dieses Beispiel protokolliert die `altKey`-Eigenschaft, wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auslösen.

### HTML

```html
<p>Click anywhere to test the <code>altKey</code> property.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The alt key is pressed: ${e.altKey}`;
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
