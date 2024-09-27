---
title: "HTMLInputElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt diese Eigenschaft die Position des Texteingabe-Cursors (Caret) innerhalb des `<input>`-Elements zurück.

> [!NOTE]
> Laut der [WHATWG Forms Spezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionStart`-Eigenschaft nur für Eingabetypen wie Text, Suche, URL, Telefon und Passwort. In modernen Browsern wird eine Ausnahme ausgelöst, wenn die `selectionStart`-Eigenschaft bei anderen Eingabetypen gesetzt wird. Zusätzlich gibt diese Eigenschaft `null` zurück, wenn sie auf nicht-textuelle Eingabeelemente angewendet wird.

Wenn `selectionStart` größer ist als `selectionEnd`, werden beide als der Wert von `selectionEnd` behandelt.

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

- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) Eigenschaft
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange) Methode
