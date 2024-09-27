---
title: "MouseEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/MouseEvent/altKey
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`MouseEvent.altKey`** schreibgeschützte Eigenschaft ist ein boolescher Wert, der angibt, ob die <kbd>alt</kbd>-Taste gedrückt war oder nicht, als ein bestimmtes Mausereignis auftrat.

Seien Sie sich bewusst, dass der Browser die <kbd>alt</kbd>-Taste nicht immer auf manchen Betriebssystemen erkennen kann.
Auf einigen Linux-Varianten zum Beispiel wird ein linker Mausklick in Kombination mit der <kbd>alt</kbd>-Taste verwendet, um Fenster zu bewegen oder zu skalieren.

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
