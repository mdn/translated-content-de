---
title: "KeyboardEvent: `charCode`-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte **`charCode`**-Eigenschaft des
[`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Unicode-Wert einer Zeichen-Taste zurück,
die während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses gedrückt wurde.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen sollten Sie den
> Unicode-Wert des Zeichens über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft abrufen.

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

- Bei einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert der gedrückten Taste entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)- oder `charCode`-Eigenschaft gespeichert, aber nie in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z.B. 'a'), wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` berücksichtigt dabei die Groß- und Kleinschreibung (das heißt, `charCode` berücksichtigt, ob die <kbd>Shift</kbd>-Taste gedrückt ist). Andernfalls wird der Code der gedrückten Taste in `keyCode` gespeichert.

- Wenn eine oder mehrere Modifikatortasten gedrückt werden, gibt es einige komplexe Regeln für `charCode`. Siehe [Gecko Keypress Event](/de/docs/Gecko_Keypress_Event) für Details.
- `charCode` wird niemals bei den [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in `keyCode` oder `charCode` gespeichert wurde, sollten Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft abfragen.
- Durch ein {{Glossary("IME", "IME")}} eingegebene Zeichen werden weder über `keyCode` noch über `charCode` registriert.
- Für eine Liste der `charCode`-Werte, die bestimmten Tasten zugeordnet sind, führen Sie [Beispiel 7: Anzeigen von Ereignisobjekteigenschaften](/de/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties) aus und sehen Sie sich die resultierende HTML-Tabelle an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
