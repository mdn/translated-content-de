---
title: "KeyboardEvent: charCode-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`charCode`**-Eigenschaft der
[`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle gibt den Unicode-Wert eines Zeichenschlüssels zurück,
der während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses gedrückt wurde.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen sollten Sie den
> Unicode-Wert des Zeichens mittels der [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft
> abrufen.

## Wert

Eine Zahl, die den Unicode-Wert des gedrückten Zeichenschlüssels darstellt.

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

## Anmerkungen

- Bei einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert des gedrückten Schlüssels entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)- oder der `charCode`-Eigenschaft gespeichert, jedoch nie in beiden. Wenn der gedrückte Schlüssel ein Zeichen erzeugt (z. B. 'a'), wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` berücksichtigt die Groß- und Kleinschreibung (mit anderen Worten, `charCode` berücksichtigt, ob die <kbd>Shift</kbd>-Taste gedrückt gehalten wird). Andernfalls wird der Code des gedrückten Schlüssels in `keyCode` gespeichert.
- `charCode` wird niemals in den [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code des Schlüssels zu erhalten, unabhängig davon, ob er in `keyCode` oder `charCode` gespeichert wurde, fragen Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft ab.
- Zeichen, die über einen {{Glossary("Input_method_editor", "Input Method Editor")}} eingegeben werden, werden nicht über `keyCode` oder `charCode` registriert.
- Für eine Liste der `charCode`-Werte, die bestimmten Tasten zugeordnet sind, führen Sie [Beispiel 7: Anzeigen von Event-Objekteigenschaften](/de/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties) aus und sehen Sie sich die resultierende HTML-Tabelle an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
