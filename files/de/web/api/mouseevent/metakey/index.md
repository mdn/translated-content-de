---
title: "MouseEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/MouseEvent/metaKey
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.metaKey`** ist ein boolescher Wert, der anzeigt, ob die <kbd>meta</kbd>-Taste gedrückt war, als ein bestimmtes Mausereignis aufgetreten ist.

Beachten Sie, dass viele Betriebssysteme spezielle Funktionen an die <kbd>meta</kbd>-Taste binden, sodass diese Eigenschaft `false` sein kann, selbst wenn die Taste tatsächlich gedrückt ist. Auf Windows öffnet diese Taste beispielsweise das Startmenü.

> [!NOTE]
> Auf Macintosh-Tastaturen ist diese Taste die <kbd>command</kbd>-Taste (<kbd>⌘</kbd>).
> Auf Windows-Tastaturen ist es die Windows-Taste (<kbd>⊞</kbd>).

## Wert

Ein boolescher Wert, bei dem `true` anzeigt, dass die Taste gedrückt ist, und `false` anzeigt, dass die Taste _nicht_ gedrückt ist.

## Beispiele

Dieses Beispiel protokolliert die `metaKey`-Eigenschaft, wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auslösen.

### HTML

```html
<p>Click anywhere to test the <code>metaKey</code> property.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The meta key is pressed: ${e.metaKey}`;
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
