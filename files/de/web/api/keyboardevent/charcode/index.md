---
title: "KeyboardEvent: charCode-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`charCode`**-Eigenschaft der [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Unicode-Wert einer gedrückten Zeichentaste während eines [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignisses zurückgibt.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen sollten Sie den Unicode-Wert des Zeichens mit der [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft ermitteln.

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

- Bei einem [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird der Unicode-Wert der gedrückten Taste entweder in der [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)- oder `charCode`-Eigenschaft gespeichert, jedoch nie in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z.B. 'a'), wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode` berücksichtigt die Groß- und Kleinschreibung (mit anderen Worten, `charCode` berücksichtigt, ob die <kbd>Shift</kbd>-Taste gedrückt gehalten wird). Andernfalls wird der Code der gedrückten Taste in `keyCode` gespeichert.

- Wenn eine oder mehrere Modifikatortasten gedrückt werden, gibt es einige komplexe Regeln für `charCode`. Siehe [Gecko Keypress Event](/de/docs/Gecko_Keypress_Event) für Details.
- `charCode` wird nie bei `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in `keyCode` oder `charCode` gespeichert wurde, fragen Sie die [`which`](/de/docs/Web/API/UIEvent/which)-Eigenschaft ab.
- Zeichen, die über ein [IME](/de/docs/Glossary/IME) eingegeben werden, werden nicht über `keyCode` oder `charCode` registriert.
- Für eine Liste der `charCode`-Werte, die bestimmten Tasten zugeordnet sind, führen Sie [Beispiel 7: Anzeigen von Eigenschaften des Ereignisobjekts](/de/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties) aus und betrachten Sie die resultierende HTML-Tabelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
