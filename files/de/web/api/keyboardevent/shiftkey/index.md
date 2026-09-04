---
title: "KeyboardEvent: shiftKey Eigenschaft"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: 358daf81ac9cf3db999cc8af7aed81ef4ff0c3f6
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.shiftKey`** ist ein
boolescher Wert, der angibt, ob die <kbd>Shift</kbd>-Taste gedrückt
(`true`) oder nicht gedrückt (`false`) war, als das Ereignis auftrat.

Das Drücken der Shift-Taste kann auch die [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses ändern. Beispielsweise erzeugt das Drücken von <kbd>B</kbd> `key: "b"`, während das gleichzeitige Drücken von <kbd>Shift</kbd> `key: "B"` erzeugt.

Wenn die <kbd>Shift</kbd>-Taste selbst gedrückt oder losgelassen wird, ist diese Eigenschaft `true` für ihr [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis und `false` für ihr [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis, da beide Ereignisse _nach_ der Zustandsänderung ausgelöst werden.

## Wert

Ein boolescher Wert.

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
