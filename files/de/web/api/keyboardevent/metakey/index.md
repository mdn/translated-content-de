---
title: "KeyboardEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/KeyboardEvent/metaKey
l10n:
  sourceCommit: ae8bc7a516bbed676b875b6a53203027a0207ec1
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.metaKey`** gibt einen
booleschen Wert zurück, der angibt, ob die <kbd>Meta</kbd>-Taste beim Auftreten des Ereignisses gedrückt wurde (`true`) oder nicht (`false`). Einige Betriebssysteme können die Taste abfangen, sodass sie nie erkannt wird.

> [!NOTE]
> Auf Macintosh-Tastaturen ist dies die <kbd>⌘ Befehl</kbd>-Taste.

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
document.querySelector("button").addEventListener("click", (e) => {
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
