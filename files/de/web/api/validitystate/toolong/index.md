---
title: "ValidityState: tooLong-Eigenschaft"
short-title: tooLong
slug: Web/API/ValidityState/tooLong
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`tooLong`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements, nachdem er vom Benutzer bearbeitet wurde, die durch das [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribut des Elements festgelegte maximale Code-Unit-Länge überschreitet.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Textarea mit zu vielen Zeichen

Das folgende Beispiel überprüft die Gültigkeit eines [Textarea-Elements](/de/docs/Web/HTML/Element/textarea).
Eine Einschränkung wurde mit dem [`maxlength`-Attribut](/de/docs/Web/HTML/Element/input/text#maxlength) hinzugefügt, sodass die Textarea maximal 10 Zeichen erwartet.
Wenn sich zu viele Zeichen in der Textarea befinden (was unten der Fall ist), schlägt die Einschränkungsgültigkeitsprüfung des Elements fehl und die Stile, die {{cssxref(":invalid")}}-CSS-Pseudoklasse entsprechen, werden angewendet.

Beim Bearbeiten der Textarea erlaubt der Browser dem Benutzer nicht, Zeichen hinzuzufügen, die die Einschränkungsgültigkeitsprüfung der maximalen Zeichenanzahl nicht bestehen würden, sodass zunächst nur das Löschen von Zeichen erlaubt ist.
Zeilenumbruchzeichen werden normalisiert und zählen bei der Berechnung der maximalen Länge als ein einziges Zeichen.

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
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
