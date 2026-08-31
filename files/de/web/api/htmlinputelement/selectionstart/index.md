---
title: "HTMLInputElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: 5e28cf03014f1942a39dc0b5f52ee0249e3de859
---

{{ApiRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist eine Zahl, die den Anfangsindex des markierten Textes darstellt. Wenn nichts ausgewählt ist, gibt sie die Position des Texteinfüge-Cursors (Caret) im `<input>`-Element zurück.

> [!NOTE]
> Gemäß der [WHATWG-Formularspezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionStart`-Eigenschaft nur für Eingaben der Typen text, search, URL, tel und password. Bei anderen Eingabetypen gibt das Lesen von `selectionStart` `null` zurück, und das Setzen führt zu einem `InvalidStateError`.

Wenn `selectionStart` größer als `selectionEnd` ist, werden beide als der Wert von `selectionEnd` behandelt.

## Wert

Eine nicht-negative Zahl.

## Beispiele

### HTML

```html
<!-- use selectionStart on non text input element -->
<label for="color">selectionStart property on type=color</label>
<input id="color" type="color" />

<!-- use selectionStart on text input element -->
<fieldset>
  <legend>selectionStart property on type=text</legend>
  <label for="statement">Select 'mdn' word from the text : </label>
  <input
    type="text"
    id="statement"
    value="The mdn is a documentation repository." />
  <button id="statement-btn">Select mdn text</button>
</fieldset>
```

### JavaScript

```js
const inputElement = document.getElementById("statement");
const statementBtn = document.getElementById("statement-btn");
const colorStart = document.getElementById("color");

statementBtn.addEventListener("click", () => {
  inputElement.selectionStart = 4;
  inputElement.selectionEnd = 7;
  inputElement.focus();
});

// open browser console to verify output
console.log(colorStart.selectionStart); // Output : null
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)-Eigenschaft
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)-Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)-Methode
