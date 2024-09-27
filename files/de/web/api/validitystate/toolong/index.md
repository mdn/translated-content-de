---
title: "ValidityState: tooLong-Eigenschaft"
short-title: tooLong
slug: Web/API/ValidityState/tooLong
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooLong`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements nach der Bearbeitung durch den Benutzer die maximale Codeeinheitenlänge überschreitet, die durch das [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribut des Elements festgelegt ist.

## Wert

Ein boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Textarea mit zu vielen Zeichen

Das folgende Beispiel überprüft die Gültigkeit eines [textarea-Elements](/de/docs/Web/HTML/Element/textarea).
Es wurde eine Einschränkung mit dem [`maxlength`-Attribut](/de/docs/Web/HTML/Element/input/text#maxlength) hinzugefügt, sodass das textarea eine maximale Anzahl von 10 Zeichen erwartet.
Wenn zu viele Zeichen im textarea sind (was im folgenden Beispiel der Fall ist), schlägt die Einschränkungsvalidierung des Elements fehl, und die zugehörigen Stile der CSS-Pseudoklasse {{cssxref(":invalid")}} werden angewandt.

Beim Bearbeiten des textarea erlaubt der Browser dem Benutzer nicht, Zeichen hinzuzufügen, die die maximale Zeichenzahl überschreiten würden, daher ist anfangs nur das Löschen von Zeichen möglich.
Zeilenumbrüche werden normalisiert und zählen als einzelnes Zeichen bei der Berechnung der maximalen Länge.

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

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenvalidierung von Formularen](/de/docs/Learn/Forms/Form_validation)
