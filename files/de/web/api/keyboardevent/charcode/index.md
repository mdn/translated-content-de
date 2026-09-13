---
title: "KeyboardEvent: charCode Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die **`charCode`**-Eigenschaft ist eine schreibgeschützte Eigenschaft des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces und gibt den Unicode-Wert eines Zeichen-Tastendrucks während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses zurück.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen sollten Sie den Unicode-Wert des Zeichens mithilfe der [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft abrufen.

## Wert

Eine Zahl, die den Unicode-Wert der gedrückten Zeichen-Taste darstellt.

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

- Bei einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert der gedrückten Taste entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)- oder `charCode`-Eigenschaft gespeichert, aber nie in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z. B. 'a'), wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` beachtet dabei die Groß- und Kleinschreibung (das heißt, `charCode` berücksichtigt, ob die <kbd>Shift</kbd>-Taste gedrückt gehalten wird). Andernfalls wird der Code der gedrückten Taste in `keyCode` gespeichert.
- `charCode` wird niemals in den [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in `keyCode` oder `charCode` gespeichert wurde, können Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft abfragen.
- Zeichen, die über einen {{Glossary("Input_method_editor", "Input-Method-Editor")}} eingegeben werden, werden weder über `keyCode` noch über `charCode` registriert.
- Für eine Liste der spezifischen `charCode`-Werte, die mit bestimmten Tasten verknüpft sind, führen Sie [Anzeigen von Ereignisobjekteigenschaften](/de/docs/Web/API/Document_Object_Model#displaying_event_object_properties) aus und sehen Sie sich die resultierende HTML-Tabelle an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
