---
title: "KeyboardEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/KeyboardEvent/metaKey
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.metaKey`** schreibgeschützte Eigenschaft liefert einen booleschen Wert, der angibt, ob die <kbd>Meta</kbd>-Taste (`true`) gedrückt wurde oder nicht (`false`), als das Ereignis eintrat. Einige Betriebssysteme können diese Taste abfangen, sodass sie nie erkannt wird.

> [!NOTE]
> Auf Macintosh-Tastaturen ist dies die <kbd>⌘ Command</kbd>-Taste.

> [!NOTE]
> Vor Firefox 118 wurde die <kbd>⊞ Windows</kbd>-Taste als "OS"-Taste statt als "Meta"-Taste behandelt. `KeyboardEvent.metaKey` war `false`, wenn die <kbd>⊞ Windows</kbd>-Taste gedrückt wurde.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<button onclick="ismetaKey(event)">Klicken Sie mit der Meta-Taste</button>

<p id="output"></p>
```

```js
function ismetaKey(e) {
  document.querySelector("#output").textContent =
    `metaKey gedrückt? ${e.metaKey}`;
}
```

### Ergebnis

{{ EmbedLiveSample('Examples', 400, 90) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("KeyboardEvent") }}
