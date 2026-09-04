---
title: "KeyboardEvent: metaKey Eigenschaft"
short-title: metaKey
slug: Web/API/KeyboardEvent/metaKey
l10n:
  sourceCommit: 358daf81ac9cf3db999cc8af7aed81ef4ff0c3f6
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.metaKey`** schreibgeschützte Eigenschaft gibt einen booleschen Wert zurück, der anzeigt, ob die <kbd>Meta</kbd>-Taste gedrückt wurde (`true`) oder nicht (`false`), als das Ereignis auftrat. Einige Betriebssysteme können die Taste abfangen, so dass sie nie erkannt wird.

> [!NOTE]
> Auf Macintosh-Tastaturen ist dies die <kbd>⌘ Command</kbd>-Taste.

> [!NOTE]
> Vor Firefox 118 wurde die <kbd>⊞ Windows</kbd>-Taste als "OS"-Taste und nicht als "Meta"-Taste behandelt. `KeyboardEvent.metaKey` war `false`, wenn die <kbd>⊞ Windows</kbd>-Taste gedrückt wurde.

Wenn die <kbd>Meta</kbd>-Taste selbst gedrückt oder losgelassen wird, ist diese Eigenschaft bei ihrem [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis `true` und bei ihrem [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis `false`, da beide Ereignisse _nach_ der Zustandsänderung ausgelöst werden.

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
