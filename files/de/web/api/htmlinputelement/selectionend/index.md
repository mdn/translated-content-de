---
title: "HTMLInputElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist eine Zahl, die das End-Index des ausgewählten Textes darstellt. Wenn keine Auswahl besteht, gibt sie den Offset des Zeichens unmittelbar nach der aktuellen Cursorposition im Texteingabefeld zurück.

> [!NOTE]
> Gemäß der [WHATWG-Formularspezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionEnd`-Eigenschaft nur für Eingaben der Typen Text, Suche, URL, Tel und Passwort. In modernen Browsern wird eine Ausnahme ausgelöst, wenn die `selectionEnd`-Eigenschaft bei anderen Eingabetypen gesetzt wird. Zusätzlich gibt diese Eigenschaft `null` zurück, wenn auf die `selectionEnd`-Eigenschaft von Nicht-Texteingabeelementen zugegriffen wird.

Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als der Wert von `selectionEnd` behandelt.

## Wert

Eine nicht negative Zahl.

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
const validPinChecker = /[^\d{3}-\d{2}-\d{3}]/g;
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

- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)-Eigenschaft
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)-Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)-Methode
