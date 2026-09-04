---
title: "KeyboardEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
l10n:
  sourceCommit: 358daf81ac9cf3db999cc8af7aed81ef4ff0c3f6
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`KeyboardEvent.ctrlKey`**-Eigenschaft gibt einen boolean-Wert zurück, der angibt, ob die <kbd>Control</kbd>-Taste gedrückt wurde (`true`) oder nicht (`false`), als das Ereignis auftrat.

Wenn die <kbd>Control</kbd>-Taste selbst gedrückt oder losgelassen wird, ist diese Eigenschaft bei ihrem [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis `true` und bei ihrem [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis `false`, da beide Ereignisse _nach_ der Statusänderung ausgelöst werden.

## Wert

Ein boolean-Wert.

## Beispiele

```html
<p>
  Press any character key, with or without holding down the CTRL key.<br />
  You can also use the SHIFT key together with the CTRL key.
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: "${e.key}"
CTRL key KeyDown: ${e.ctrlKey}
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
