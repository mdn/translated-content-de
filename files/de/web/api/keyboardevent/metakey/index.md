---
title: "KeyboardEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/KeyboardEvent/metaKey
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.metaKey`** gibt einen booleschen Wert zurück, der angibt, ob die <kbd>Meta</kbd>-Taste gedrückt war (`true`) oder nicht (`false`), als das Ereignis auftrat. Einige Betriebssysteme können die Taste abfangen, sodass sie nie erkannt wird.

> [!NOTE]
> Auf Macintosh-Tastaturen ist dies die <kbd>⌘ Command</kbd>-Taste.

> [!NOTE]
> Vor Firefox 118 wurde die <kbd>⊞ Windows</kbd>-Taste als "OS"-Taste und nicht als "Meta"-Taste behandelt. `KeyboardEvent.metaKey` war `false`, wenn die <kbd>⊞ Windows</kbd>-Taste gedrückt wurde.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<button>Click me with the meta key</button>

<p id="output"></p>
```

```js
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("#output").textContent =
    `metaKey pressed? ${e.metaKey}`;
});
```

### Ergebnis

{{ EmbedLiveSample('Examples', 400, 90) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
