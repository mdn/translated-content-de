---
title: "KeyboardEvent: altKey Eigenschaft"
short-title: altKey
slug: Web/API/KeyboardEvent/altKey
l10n:
  sourceCommit: 358daf81ac9cf3db999cc8af7aed81ef4ff0c3f6
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`KeyboardEvent.altKey`**-Eigenschaft ist ein boolescher Wert, der angibt, ob die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) gedrückt war (`true`) oder nicht (`false`), als das Ereignis auftrat.

Wenn die <kbd>Alt</kbd>-Taste selbst gedrückt oder losgelassen wird, ist diese Eigenschaft bei ihrem [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis `true` und bei ihrem [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis `false`, da beide Ereignisse _nach_ der Zustandsänderung ausgelöst werden.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<p>
  Press any character key, with or without holding down the ALT key.<br />
  You can also use the SHIFT key together with the ALT key.
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: "${e.key}"
ALT key KeyDown: ${e.altKey}
`;
}

document.addEventListener("keydown", showChar);
```

{{EmbedLiveSample("examples", "", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
