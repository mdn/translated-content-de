---
title: "ValidityState: tooShort-Eigenschaft"
short-title: tooShort
slug: Web/API/ValidityState/tooShort
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooShort`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Wert eines {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("output")}}, {{HTMLElement("fieldset")}} oder {{HTMLElement("textarea")}}, nachdem er vom Benutzer bearbeitet wurde, kürzer ist als die durch das `minlength`-Attribut des Elements festgelegte minimale Code-Einheitenlänge.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Beschränkungen entspricht.

## Beispiele

### Eingabe mit zu kurzem Zeichenfolgenwert

Im folgenden Beispiel wird die Gültigkeit eines [Text-Eingabeelements](/de/docs/Web/HTML/Element/input/text) überprüft.
Eine Einschränkung wurde mit dem [`minlength`-Attribut](/de/docs/Web/HTML/Element/input/text#minlength) hinzugefügt, sodass die Eingabe eine Zeichenfolge mit mindestens 4 Zeichen erwartet.
Wenn der Benutzer eine zu kurze Zeichenfolge eingibt, schlägt die Beschränkungsprüfung des Elements fehl und die Stile, die der {{cssxref(":invalid")}} CSS-Pseudoklasse entsprechen, werden angewendet.

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

- [Leitfaden: Validierung von Einschränkungen](/de/docs/Web/HTML/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
