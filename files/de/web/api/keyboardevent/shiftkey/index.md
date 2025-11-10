---
title: "KeyboardEvent: shiftKey-Eigenschaft"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.shiftKey`** ist ein
boolean-Wert, der angibt, ob die <kbd>shift</kbd>-Taste gedrückt wurde
(`true`) oder nicht (`false`), als das Ereignis auftrat.

Das Drücken der Shift-Taste kann auch das [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses ändern. Beispielsweise erzeugt das Drücken von <kbd>B</kbd> `key: "b"`, während das gleichzeitige Drücken von <kbd>Shift</kbd> `key: "B"` erzeugt.

## Wert

Ein boolean-Wert.

## Beispiele

```html
<p>
  Press any character key, with or without holding down the SHIFT key.<br />
  You can also use the SHIFT key together with the ALT key.
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: "${e.key}"
SHIFT key KeyDown: ${e.shiftKey}
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
