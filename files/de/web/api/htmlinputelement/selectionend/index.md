---
title: "HTMLInputElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: e970f0765da11f7a6461cdb6693c40a39ecb6934
---

{{ApiRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle ist eine Zahl, die den Endindex des ausgewählten Textes darstellt. Das heißt, es repräsentiert den Index des Zeichens, das **unmittelbar nach** der Auswahl kommt. Ebenso gibt dies, wenn keine Auswahl getroffen wurde, den Versatz des Zeichens zurück, das unmittelbar auf die aktuelle Textcursorposition folgt.

> [!NOTE]
> Laut der [WHATWG Formen Spezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionEnd`-Eigenschaft nur für Eingaben der Typen Text, Suche, URL, Telefon und Passwort. In modernen Browsern wird eine Ausnahme ausgelöst, wenn die `selectionEnd`-Eigenschaft für die übrigen Eingabetypen festgelegt wird. Zusätzlich gibt diese Eigenschaft `null` zurück, wenn auf die `selectionEnd`-Eigenschaft von Nicht-Text-Eingabe-Elementen zugegriffen wird.

Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als Wert von `selectionEnd` behandelt.

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

- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)-Eigenschaft
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)-Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)-Methode
