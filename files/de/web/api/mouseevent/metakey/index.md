---
title: "MouseEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/MouseEvent/metaKey
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`MouseEvent.metaKey`**-Eigenschaft ist ein boolescher Wert, der angibt, ob die <kbd>meta</kbd>-Taste gedrückt wurde oder nicht, als ein bestimmtes Mausereignis auftrat.

Seien Sie sich bewusst, dass viele Betriebssysteme spezielle Funktionen an die <kbd>meta</kbd>-Taste binden, sodass diese Eigenschaft `false` sein kann, auch wenn die Taste tatsächlich gedrückt ist.
Unter Windows kann diese Taste beispielsweise das Startmenü öffnen.

> [!NOTE]
> Auf Macintosh-Tastaturen ist diese Taste die <kbd>command</kbd>-Taste (<kbd>⌘</kbd>).
> Auf Windows-Tastaturen ist diese Taste die Windows-Taste (<kbd>⊞</kbd>).

## Wert

Ein boolescher Wert, wobei `true` anzeigt, dass die Taste gedrückt ist, und `false`, dass die Taste _nicht_ gedrückt ist.

## Beispiele

Dieses Beispiel gibt die Eigenschaft `metaKey` aus, wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auslösen.

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
