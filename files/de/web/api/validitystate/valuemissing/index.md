---
title: "ValidityState: valueMissing Eigenschaft"
short-title: valueMissing
slug: Web/API/ValidityState/valueMissing
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`valueMissing`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState) Interfaces zeigt an, ob ein erforderliches [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Steuerelement, wie ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}, einen leeren Wert hat.

Wenn das `required`-Attribut gesetzt ist und keine {{HTMLElement("option")}} ausgewählt ist oder ein `<textarea>` oder ein benutzerbearbeitbares `<input>` leer ist, wird die `valueMissing`-Eigenschaft `true` sein. Die Eigenschaft ist nur `true`, wenn das Feld erforderlich ist und keinen Wert hat; ist das Feld nicht erforderlich oder ist das Feld erforderlich und hat einen Wert, ist der Wert `false`.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht gesetzt ist und das `required`-Attribut gesetzt ist.

### Fehlender erforderlicher Eingabewert

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Reference/Elements/input/number).
Beschränkungen wurden mit dem [`min`-Attribut](/de/docs/Web/HTML/Reference/Elements/input/number#min) hinzugefügt, das einen Mindestwert von `18` für die Eingabe setzt, sowie mit dem [`required`-Attribut](/de/docs/Web/HTML/Reference/Attributes/required), das leere Werte nicht zulässt.
Wenn der Benutzer einen Wert eingibt, der keine Zahl größer als 17 ist, schlägt die Validierung der Beschränkung fehl, und die Stile, die mit {{cssxref(":invalid")}} übereinstimmen, werden angewendet.

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
<input type="number" id="age" min="18" required />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.valid) {
    log("Input OK…");
  } else if (userInput.validity.valueMissing) {
    log("Required field cannot be empty.");
  } else {
    log("Bad input detected: " + userInput.validationMessage);
  }
});
```

{{EmbedLiveSample("missing_required_input_value", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput), [valid](/de/docs/Web/API/ValidityState/valid) Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
