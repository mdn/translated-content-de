---
title: "KeyboardEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/KeyboardEvent/metaKey
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.metaKey`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die einen booleschen Wert zurückgibt, der anzeigt, ob die <kbd>Meta</kbd>-Taste gedrückt wurde (`true`) oder nicht (`false`), als das Ereignis auftrat. Einige Betriebssysteme können die Taste abfangen, sodass sie nie erkannt wird.

> [!NOTE]
> Auf Macintosh-Tastaturen ist dies die <kbd>⌘ Command</kbd>-Taste.

> [!NOTE]
> Vor Firefox 118 wurde die <kbd>⊞ Windows</kbd>-Taste als "OS"-Taste und nicht als "Meta"-Taste behandelt. `KeyboardEvent.metaKey` war `false`, wenn die <kbd>⊞ Windows</kbd>-Taste gedrückt wurde.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<button onclick="ismetaKey(event)">Click me with the meta key</button>

<p id="output"></p>
```

```js
function ismetaKey(e) {
  document.querySelector("#output").textContent =
    `metaKey pressed? ${e.metaKey}`;
}
```

### Ergebnis

{{ EmbedLiveSample('Examples', 400, 90) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
