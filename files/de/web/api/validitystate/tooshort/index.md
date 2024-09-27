---
title: "ValidityState: tooShort Eigenschaft"
short-title: tooShort
slug: Web/API/ValidityState/tooShort
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooShort`** Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState) Schnittstelle zeigt an, ob der Wert eines {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("output")}}, {{HTMLElement("fieldset")}} oder {{HTMLElement("textarea")}}, nachdem er vom Benutzer bearbeitet wurde, kleiner ist als die durch das `minlength` Attribut des Elements festgelegte minimale Codeeinheiten-Länge.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Anforderungen entspricht.

## Beispiele

### Eingabe mit zu kurzem Zeichenfolgenwert

Das folgende Beispiel überprüft die Gültigkeit eines [Text-Eingabeelements](/de/docs/Web/HTML/Element/input/text).
Eine Einschränkung wurde unter Verwendung des [`minlength` Attributs](/de/docs/Web/HTML/Element/input/text#minlength) hinzugefügt, sodass die Eingabe eine Zeichenfolge mit mindestens 4 Zeichen erwartet.
Wenn der Benutzer eine zu kurze Zeichenfolge eingibt, schlägt die Validierung der Einschränkung fehl und die zugehörigen Stile, die der {{cssxref(":invalid")}} CSS-Pseudoklasse entsprechen, werden angewendet.

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

- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation)
