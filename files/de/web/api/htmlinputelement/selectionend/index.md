---
title: "HTMLInputElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: 5e28cf03014f1942a39dc0b5f52ee0249e3de859
---

{{ApiRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist eine Zahl, die den Endindex des ausgewählten Textes darstellt. Das heißt, sie stellt den Index des Zeichens dar, das **unmittelbar nach** der Auswahl folgt. Ebenso gibt sie, wenn keine Auswahl vorhanden ist, den Offset des Zeichens zurück, das unmittelbar nach der aktuellen Textcursorposition folgt.

> [!NOTE]
> Gemäß der [WHATWG-Formspezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionEnd`-Eigenschaft nur für Eingaben der Typen text, search, URL, tel und password. In modernen Browsern wird eine Ausnahme ausgelöst, wenn die `selectionEnd`-Eigenschaft bei anderen Eingabetypen gesetzt wird. Zusätzlich gibt diese Eigenschaft `null` zurück, wenn die `selectionEnd`-Eigenschaft auf Nicht-Text-Eingabeelementen aufgerufen wird.

Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` behandelt.

## Wert

Eine nicht-negative Zahl.

## Beispiele

### HTML

```html
<!-- using selectionEnd on non text input element -->
<label for="color">selectionStart property on type=color</label>
<input id="color" type="color" />

<!-- using selectionEnd on text input element -->
<fieldset>
  <legend>selectionEnd property on type=text</legend>
  <label for="pin">Input PIN</label>
  <input type="text" id="pin" value="impossible PIN: 102-12-145" />
  <button id="pin-btn" type="button">PIN correction</button>
</fieldset>
```

### JavaScript

```js
const colorEnd = document.getElementById("color");
const text = document.querySelector("#pin");
const pinBtn = document.querySelector("#pin-btn");
const validPinChecker = /^\d{3}-\d{2}-\d{3}/g;
const selectionEnd = text.value.length;
const selectedText = text.value.substring(text.selectionStart, selectionEnd);

pinBtn.addEventListener("click", () => {
  const correctedText = selectedText.replace(validPinChecker, "");
  text.value = correctedText;
});

// open browser console to verify output
console.log(colorEnd.selectionEnd); // Output : null
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
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)-Eigenschaft
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)-Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)-Methode
