---
title: "KeyboardEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/KeyboardEvent/altKey
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.altKey`** ist ein boolescher Wert, der anzeigt, ob die <kbd>alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) gedrückt war (`true`) oder nicht (`false`), als das Ereignis auftrat.

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
