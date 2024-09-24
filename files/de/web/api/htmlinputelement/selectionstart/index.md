---
title: "HTMLInputElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle ist eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt sie die Position des Texteingabecursors (Caret) innerhalb des `<input>`-Elements zurück.

> [!NOTE]
> Gemäß der [WHATWG-Formularspezifikation](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) gilt die `selectionStart`-Eigenschaft nur für Eingabefelder der Typen text, search, URL, tel und password. In modernen Browsern wird eine Ausnahme ausgelöst, wenn die `selectionStart`-Eigenschaft bei den restlichen Eingabetypen gesetzt wird. Zusätzlich gibt diese Eigenschaft `null` zurück, wenn auf die `selectionStart`-Eigenschaft bei Nicht-Text-Eingabeelementen zugegriffen wird.

Wenn `selectionStart` größer ist als `selectionEnd`, werden beide als Wert von `selectionEnd` behandelt.

## Wert

Eine nicht negative Zahl.

## Beispiele

### HTML

```html
<!-- Verwenden von selectionStart bei einem Nicht-Text-Eingabeelement -->
<label for="color">selectionStart-Eigenschaft bei type=color</label>
<input id="color" type="color" />

<!-- Verwenden von selectionStart bei einem Text-Eingabeelement -->
<fieldset>
  <legend>selectionStart-Eigenschaft bei type=text</legend>
  <label for="statement">Wählen Sie das Wort 'mdn' aus dem Text aus: </label>
  <input
    type="text"
    id="statement"
    value="The mdn is a documentation repository." />
  <button id="statement-btn">mdn-Text auswählen</button>
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

// Öffnen Sie die Konsolenausgabe im Browser, um das Ergebnis zu überprüfen
console.log(colorStart.selectionStart); // Ausgabe: null
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.selectionStart")}}-Eigenschaft
- {{domxref("HTMLInputElement.selectionEnd")}}-Eigenschaft
- {{domxref("HTMLInputElement.setSelectionRange")}}-Methode
