---
title: "KeyboardEvent: charCode-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: cede06423af0242a18670246e1b25562d21c0004
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`charCode`** des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Unicode-Wert einer Zeichen-Taste zurück, die während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses gedrückt wurde.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen können Sie den Unicode-Wert des Zeichens mit der [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft abrufen.

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

## Hinweise

- In einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert der gedrückten Taste entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)- oder der `charCode`-Eigenschaft gespeichert, jedoch niemals in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z. B. 'a'), wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` respektiert die Groß- und Kleinschreibung (mit anderen Worten, `charCode` berücksichtigt, ob die <kbd>Shift</kbd>-Taste gedrückt wird). Andernfalls wird der Code der gedrückten Taste in `keyCode` gespeichert.

- Wenn eine oder mehrere Modifikatortasten gedrückt werden, gibt es einige komplexe Regeln für `charCode`. Details finden Sie unter [Gecko Keypress Event](/de/docs/Gecko_Keypress_Event).
- `charCode` wird niemals in den [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in `keyCode` oder `charCode` gespeichert wurde, verwenden Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft.
- Zeichen, die über einen {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} eingegeben werden, werden nicht über `keyCode` oder `charCode` registriert.
- Für eine Liste der `charCode`-Werte, die bestimmten Tasten zugeordnet sind, führen Sie [Beispiel 7: Anzeigen von Ereignisobjekteigenschaften](/de/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties) aus und sehen Sie sich die resultierende HTML-Tabelle an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
