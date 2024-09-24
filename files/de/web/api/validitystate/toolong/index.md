---
title: "ValidityState: tooLong-Eigenschaft"
short-title: zu lang
slug: Web/API/ValidityState/tooLong
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooLong`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Felds, nachdem er vom Benutzer bearbeitet wurde, die maximale Code-Einheitslänge überschreitet, die durch das [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribut des Elements festgelegt wurde.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Beschränkungen entspricht.

## Beispiele

### Textarea mit zu hoher Zeichenanzahl

Das folgende Beispiel überprüft die Gültigkeit eines [textarea-Elements](/de/docs/Web/HTML/Element/textarea).
Es wurde eine Beschränkung mit dem [`maxlength`-Attribut](/de/docs/Web/HTML/Element/input/text#maxlength) hinzugefügt, sodass die Textarea maximal 10 Zeichen erwartet.
Wenn zu viele Zeichen in der Textarea vorhanden sind (was unten zutrifft), schlägt die Beschränkungsvalidierung des Elements fehl, und die Stile, die zur {{cssxref(":invalid")}} CSS-Pseudoklasse passen, werden angewendet.

Beim Bearbeiten der Textarea erlaubt der Browser dem Benutzer nicht, Zeichen hinzuzufügen, die die Beschränkungsvalidierung der maximalen Zeichenanzahl verletzen würden, sodass zunächst nur das Löschen von Zeichen erlaubt ist.
Zeilenumbrüche werden normalisiert und zählen bei der Berechnung der maximalen Länge als ein einzelnes Zeichen.

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
<pre id="log">Validierung hier protokolliert...</pre>
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
    log("Zu viele Zeichen in der Textarea.");
  } else {
    log("Eingabe ist gültig…");
  }
});
```

{{EmbedLiveSample("input_with_too_long_string_value", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingabebeschränkungen validieren](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
