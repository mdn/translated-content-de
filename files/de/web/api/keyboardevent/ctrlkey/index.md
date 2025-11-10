---
title: "KeyboardEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.ctrlKey`** gibt einen boolean-Wert zurück, der anzeigt, ob die <kbd>Strg</kbd>-Taste gedrückt war (`true`) oder nicht (`false`), als das Ereignis auftrat.

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
