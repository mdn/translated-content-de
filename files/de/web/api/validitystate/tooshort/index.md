---
title: "ValidityState: tooShort Eigenschaft"
short-title: tooShort
slug: Web/API/ValidityState/tooShort
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooShort`** Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState) Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("output")}}, {{HTMLElement("fieldset")}} oder {{HTMLElement("textarea")}}, nachdem er vom Benutzer bearbeitet wurde, kürzer ist als die minimale Codeeinheitlänge, die durch das `minlength` Attribut des Elements festgelegt wurde.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Bedingungen entspricht.

## Beispiele

### Eingabe mit zu kurzem Zeichenfolgenwert

Das folgende Beispiel überprüft die Gültigkeit eines [Text-Eingabeelements](/de/docs/Web/HTML/Reference/Elements/input/text).
Ein Zwang wurde mit dem [`minlength` Attribut](/de/docs/Web/HTML/Reference/Elements/input/text#minlength) hinzugefügt, sodass die Eingabe eine Zeichenkette mit mindestens 4 Zeichen erwartet.
Wenn der Benutzer eine zu kurze Zeichenkette eingibt, schlägt die Validierung der Bedingung fehl und die Stile, die der {{cssxref(":invalid")}} CSS-Pseudoklasse entsprechen, werden angewendet.

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
<input type="text" id="userText" minlength="4" />
```

```js
const userInput = document.getElementById("userText");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.tooShort) {
    log("Not enough characters entered.");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_too_short_string_value", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Beschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Anleitung: Formular-Datenüberprüfung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
