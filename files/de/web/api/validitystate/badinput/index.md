---
title: "ValidityState: badInput-Eigenschaft"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`badInput`** der Schnittstelle [ValidityState](/de/docs/Web/API/ValidityState) gibt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann. Das ist beispielsweise der Fall, wenn der Inhalt eines Eingabeelements für Zahlen eine Zeichenfolge ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Eingabe nicht dem erwarteten Typ entspricht.

## Beispiele

### Ungültige Eingabe erkennen

Das folgende Beispiel prüft die Gültigkeit eines [Eingabeelements für Zahlen](/de/docs/Web/HTML/Reference/Elements/input/number).
Wenn der Benutzer Text statt einer Zahl eingibt, besteht das Element die Constraint-Validierung nicht, und die Formatierungen für [`input:invalid`](/de/docs/Web/CSS/Reference/Selectors/:invalid) werden angewendet.
Das [`<pre>`](/de/docs/Web/HTML/Reference/Elements/pre)-Element oberhalb des Eingabefelds zeigt die Validierungsmeldung an, wenn `badInput` für das Element `true` ergibt:

```css
input:invalid {
  outline: red solid 3px;
}
```

```css hidden
body {
  margin: 0.5rem;
}
pre {
  padding: 1rem;
  height: 2rem;
  background-color: lightgrey;
  outline: 1px solid grey;
}
```

```html
<pre id="log">Validation logged here...</pre>
<input type="number" id="age" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.badInput) {
    log(`Bad input detected: ${userInput.validationMessage}`);
  }
});
```

{{EmbedLiveSample("detecting_bad_input", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ValidityState-Eigenschaften [valid](/de/docs/Web/API/ValidityState/valid) und [customError](/de/docs/Web/API/ValidityState/customError).
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Tutorial: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
