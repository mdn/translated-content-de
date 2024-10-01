---
title: "KeyboardEvent: charCode-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte **`charCode`**-Eigenschaft der [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle gibt den Unicode-Wert einer Zeichen-Taste zurück, die während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses gedrückt wurde.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen sollten Sie den Unicode-Wert des Zeichens über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft ermitteln.

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

- In einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert der gedrückten Taste entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)- oder `charCode`-Eigenschaft gespeichert, aber nie in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z. B. 'a'), wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` berücksichtigt die Groß- und Kleinschreibung (mit anderen Worten, `charCode` berücksichtigt, ob die

  <kbd>Shift</kbd>

  -Taste gedrückt gehalten wird). Andernfalls wird der Code der gedrückten Taste in `keyCode` gespeichert.

- Wenn eine oder mehrere Modifiziertasten gedrückt werden, gibt es einige komplexe Regeln für `charCode`. Siehe [Gecko Keypress Event](/de/docs/Gecko_Keypress_Event) für Details.
- `charCode` wird niemals in den [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in `keyCode` oder `charCode` gespeichert wurde, verwenden Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft.
- Zeichen, die über ein {{Glossary("IME", "IME")}} eingegeben werden, registrieren sich nicht über `keyCode` oder `charCode`.
- Für eine Liste der `charCode`-Werte, die bestimmten Tasten zugeordnet sind, führen Sie [Beispiel 7: Anzeigen der Eigenschaften des Ereignisobjekts](/de/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties) aus und sehen Sie sich die resultierende HTML-Tabelle an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
