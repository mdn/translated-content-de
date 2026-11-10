---
title: "ValidityState: tooLong-Eigenschaft"
short-title: tooLong
slug: Web/API/ValidityState/tooLong
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`tooLong`** der Schnittstelle [`ValidityState`](/de/docs/Web/API/ValidityState) gibt an, ob der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements, nachdem er vom Benutzer bearbeitet wurde, die durch das Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) festgelegte maximale Länge in Codeeinheiten überschreitet.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Wert die Beschränkungen nicht erfüllt.

## Beispiele

### Textarea mit zu vielen Zeichen

Das folgende Beispiel prüft die Gültigkeit eines [textarea-Elements](/de/docs/Web/HTML/Reference/Elements/textarea).
Mit dem [Attribut `maxlength`](/de/docs/Web/HTML/Reference/Elements/input/text#maxlength) wurde die Länge auf maximal 10 Zeichen beschränkt.
Wenn das Textarea-Element zu viele Zeichen enthält (wie unten), besteht es die Validierung nicht, und die Formatierungen für die CSS-Pseudoklasse {{cssxref(":invalid")}} werden angewendet.

Beim Bearbeiten des Textarea-Elements lässt der Browser keine weiteren Zeichen zu, die die maximale Zeichenzahl überschreiten würden. Daher können zunächst nur Zeichen gelöscht werden.
Zeilenumbruchzeichen werden normalisiert und zählen bei der Berechnung der maximalen Länge als ein einzelnes Zeichen.

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

{{EmbedLiveSample("textarea_with_too_long_character_count", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Validierung anhand von Beschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
