---
title: "ValidityState: Eigenschaft `valueMissing`"
short-title: valueMissing
slug: Web/API/ValidityState/valueMissing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`valueMissing`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle zeigt an, ob ein Steuerungselement mit dem Attribut [`required`](/de/docs/Web/HTML/Attributes/required) wie z. B. ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} einen leeren Wert hat.

Wenn das `required`-Attribut gesetzt ist und keine {{HTMLElement("option")}} ausgewählt ist oder ein `<textarea>` oder ein benutzerbearbeitbares `<input>` leer ist, wird die `valueMissing`-Eigenschaft `true` sein. Die Eigenschaft ist nur `true`, wenn das Feld erforderlich ist und keinen Wert hat; wenn das Feld nicht erforderlich ist oder wenn das Feld erforderlich ist und einen Wert hat, ist der Wert `false`.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht festgelegt ist und das `required`-Attribut geltend ist.

### Fehlender erforderlicher Eingabewert

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Es wurden Einschränkungen mithilfe des [`min`-Attributs](/de/docs/Web/HTML/Element/input/number#min) hinzugefügt, das einen Mindestwert von `18` für die Eingabe festlegt, und das [`required`-Attribut](/de/docs/Web/HTML/Attributes/required), das leere Werte nicht zulässt.
Wenn der Benutzer einen Wert eingibt, der keine Zahl größer als 17 ist, schlägt die Einschränkungsvalidierung fehl und die Stile, die {{cssxref(":invalid")}} entsprechen, werden angewendet.

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

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput)-, [valid](/de/docs/Web/API/ValidityState/valid)-Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
