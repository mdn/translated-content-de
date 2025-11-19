---
title: "ValidityState: Eigenschaft tooLong"
short-title: tooLong
slug: Web/API/ValidityState/tooLong
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooLong`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements, nachdem er vom Nutzer bearbeitet wurde, die maximale Codeinheitenlänge überschreitet, die durch das `maxlength`-Attribut des Elements festgelegt wurde.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Vorgaben entspricht.

## Beispiele

### Textarea mit zu langer Zeichenzahl

Das folgende Beispiel überprüft die Gültigkeit eines [textarea-Elements](/de/docs/Web/HTML/Reference/Elements/textarea).
Ein Zwang wurde durch das [`maxlength`-Attribut](/de/docs/Web/HTML/Reference/Elements/input/text#maxlength) hinzugefügt, sodass das Textfeld maximal 10 Zeichen erwartet.
Wenn zu viele Zeichen in dem Textarea vorhanden sind (wie unten der Fall), schlägt die Element-Validierung fehl, und die Styles der {{cssxref(":invalid")}} CSS-Pseudo-Klasse werden angewendet.

Beim Bearbeiten des Textfelds lässt der Browser nicht zu, dass der Nutzer Zeichen hinzufügt, die die Validierung der maximalen Zeichenzahl überschreiten würden, sodass zunächst nur das Löschen von Zeichen erlaubt ist.
Zeilenumbrüche werden normalisiert und zählen als ein einzelnes Zeichen in der Berechnung der maximalen Länge.

```css
textarea:invalid {
  outline: red solid 3px;
}
```

```css hidden
body {
  margin: 0.5rem;
}
textarea {
  width: 75%;
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
<textarea name="story" id="userText" maxlength="10" rows="5">
It was a dark and


stormy night...
</textarea>
```

```js
const userInput = document.getElementById("userText");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.tooLong) {
    log("Too many characters in the textarea.");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_too_long_string_value", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenvalidierung in Formularen](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
