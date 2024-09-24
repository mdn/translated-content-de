---
title: "HTMLInputElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle ist eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl vorhanden ist, gibt diese Eigenschaft den Offset des Zeichens unmittelbar nach der aktuellen Cursorposition im Texteingabefeld zurück.

> [!NOTE]
> Laut der [WHATWG Forms-Spezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionEnd`-Eigenschaft nur für Eingaben der Typen text, search, URL, tel und password. In modernen Browsern wird eine Ausnahme ausgelöst, wenn die `selectionEnd`-Eigenschaft für andere Eingabetypen gesetzt wird. Außerdem gibt diese Eigenschaft `null` zurück, wenn sie auf nicht-textuelle Eingabeelemente angewendet wird.

Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als Wert von `selectionEnd` behandelt.

## Wert

Eine nicht-negative Zahl.

## Beispiele

### HTML

```html
<!-- Verwendung von selectionEnd bei nicht-textuellem Eingabeelement -->
<label for="color">selectionStart-Eigenschaft bei Typ=color</label>
<input id="color" type="color" />

<!-- Verwendung von selectionEnd bei einem Texteingabeelement -->
<fieldset>
  <legend>selectionEnd-Eigenschaft bei Typ=text</legend>
  <label for="pin">PIN eingeben</label>
  <input type="text" id="pin" value="unmögliche PIN: 102-12-145" />
  <button id="pin-btn" type="button">PIN-Korrektur</button>
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

// Öffnen Sie die Browserkonsole, um das Ergebnis zu überprüfen
console.log(colorEnd.selectionEnd); // Ausgabe : null
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.selectionEnd")}}-Eigenschaft
- {{domxref("HTMLInputElement.selectionStart")}}-Eigenschaft
- {{domxref("HTMLInputElement.setSelectionRange")}}-Methode
