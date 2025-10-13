---
title: "KeyboardEvent: charCode-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`charCode`**-Schreibgeschützte Eigenschaft des
[`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Unicode-Wert einer Zeichentaste zurück,
die während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses gedrückt wurde.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen sollten Sie den
> Unicode-Wert des Zeichens über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft abrufen.

## Wert

Eine Zahl, die den Unicode-Wert der gedrückten Zeichentaste darstellt.

## Beispiele

### HTML

```html
<p>Type anything into the input box below to log a <code>charCode</code>.</p>
<input type="text" />
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.querySelector("#log");

input.addEventListener("keypress", (e) => {
  log.innerText = `Key pressed: ${String.fromCharCode(e.charCode)}\ncharCode: ${
    e.charCode
  }`;
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Hinweise

- Bei einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert der gedrückten Taste
  entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) oder der `charCode`-Eigenschaft
  gespeichert, aber nie in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z.B. 'a'),
  wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` beachtet die Groß- und Kleinschreibung (das heißt, `charCode` berücksichtigt,
  ob die <kbd>Shift</kbd>-Taste gedrückt gehalten wird). Andernfalls wird der Code der gedrückten Taste
  in `keyCode` gespeichert.
- `charCode` wird niemals bei den [`keydown`](/de/docs/Web/API/Element/keydown_event)- und
  [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in
  `keyCode` oder `charCode` gespeichert wurde, fragen Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft ab.
- Zeichen, die über einen {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} eingegeben werden, werden nicht über `keyCode` oder
  `charCode` registriert.
- Für eine Liste der `charCode`-Werte, die bestimmten Tasten zugeordnet sind, starten Sie
  [Anzeigen der Eigenschaften von Ereignisobjekten](/de/docs/Web/API/Document_Object_Model#displaying_event_object_properties) und betrachten Sie die resultierende HTML-Tabelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
