---
title: "KeyboardEvent: charCode-Eigenschaft"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`charCode`**-Eigenschaft (nur lesen) der
{{domxref("KeyboardEvent")}}-Schnittstelle gibt den Unicode-Wert einer während eines {{domxref("Element/keypress_event", "keypress")}}-Ereignisses gedrückten Zeichentaste zurück.

> [!WARNING]
> Verwenden Sie diese Eigenschaft nicht, da sie veraltet ist. Stattdessen erhalten Sie den
> Unicode-Wert des Zeichens unter Verwendung der {{domxref("KeyboardEvent.key", "key")}}
> Eigenschaft.

## Wert

Eine Zahl, die den Unicode-Wert der gedrückten Zeichentaste darstellt.

## Beispiele

### HTML

```html
<p>Geben Sie etwas in das Eingabefeld unten ein, um einen <code>charCode</code> zu protokollieren.</p>
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

- Bei einem {{domxref("Element/keypress_event", "keypress")}}-Ereignis wird der Unicode-Wert der gedrückten Taste
  entweder in der {{ domxref("KeyboardEvent.keyCode", "keyCode") }} oder der `charCode`
  Eigenschaft gespeichert, aber nie in beiden. Wenn die gedrückte Taste ein Zeichen erzeugt (z.B. 'a'),
  wird `charCode` auf den Code dieses Zeichens gesetzt; `charCode`
  berücksichtigt die Groß- und Kleinschreibung (mit anderen Worten, `charCode` bezieht ein,
  ob die

  <kbd>Shift</kbd>

  Taste gedrückt gehalten wird). Andernfalls wird der Code der gedrückten Taste
  in `keyCode` gespeichert.

- Wenn eine oder mehrere Modifikatortasten gedrückt werden, gibt es einige komplexe Regeln für
  `charCode`. Siehe [Gecko Keypress Event](/de/docs/Gecko_Keypress_Event)
  für Details.
- `charCode` wird niemals in den {{domxref("Element/keydown_event", "keydown")}} und
  {{domxref("Element/keyup_event", "keyup")}} Ereignissen gesetzt. In diesen Fällen wird stattdessen `keyCode` gesetzt.
- Um den Code der Taste zu erhalten, unabhängig davon, ob er in
  `keyCode` oder `charCode` gespeichert wurde, fragen Sie die {{domxref("UIEvent/which", "which")}}-Eigenschaft ab.
- Durch ein {{glossary("IME")}} eingegebene Zeichen registrieren sich nicht über `keyCode` oder
  `charCode`.
- Für eine Liste der `charCode`-Werte, die mit bestimmten Tasten verknüpft sind, führen Sie
  [Beispiel 7: Anzeigen von Event-Objekteigenschaften](/de/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties) aus und sehen Sie sich die resultierende HTML-Tabelle an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
