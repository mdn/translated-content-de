---
title: "ValidityState: tooLong-Eigenschaft"
short-title: tooLong
slug: Web/API/ValidityState/tooLong
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooLong`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}, nachdem er vom Benutzer bearbeitet wurde, die maximale Code-Einheit-Länge überschreitet, die durch das [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribut des Elements festgelegt wurde.

## Wert

Ein Boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Textarea mit zu vielen Zeichen

Das folgende Beispiel überprüft die Gültigkeit eines [textarea-Elements](/de/docs/Web/HTML/Element/textarea).
Eine Einschränkung wurde mit dem [`maxlength`-Attribut](/de/docs/Web/HTML/Element/input/text#maxlength) hinzugefügt, so dass das textarea maximal 10 Zeichen erwartet.
Wenn zu viele Zeichen im textarea vorhanden sind (wie unten der Fall), schlägt die Beschränkungsvalidierung des Elements fehl, und die Stile, die zur {{cssxref(":invalid")}} CSS-Pseudoklasse passen, werden angewendet.

Beim Bearbeiten des textarea erlaubt der Browser nicht, dass der Benutzer Zeichen hinzufügt, die die Beschränkungsvalidierung der maximalen Zeichenanzahl verfehlen würden, sodass anfangs nur das Löschen von Zeichen erlaubt ist.
Neue Zeilenzeichen werden normalisiert und zählen als ein einzelnes Zeichen in der Berechnung der maximalen Länge.

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

- [Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformular-Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
