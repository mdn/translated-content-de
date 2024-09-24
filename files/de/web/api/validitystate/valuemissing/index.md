---
title: "ValidityState: Eigenschaft valueMissing"
short-title: valueMissing
slug: Web/API/ValidityState/valueMissing
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`valueMissing`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob ein mit [`required`](/de/docs/Web/HTML/Attributes/required) gekennzeichnetes Steuerelement, wie ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}, einen leeren Wert hat.

Wenn das Attribut `required` gesetzt ist und keine {{HTMLElement("option")}} ausgewählt ist oder ein `<textarea>` oder ein vom Benutzer editierbares `<input>` leer ist, wird die Eigenschaft `valueMissing` den Wert `true` haben. Die Eigenschaft ist nur `true`, wenn das Feld erforderlich ist und keinen Wert hat; wenn das Feld nicht erforderlich ist oder wenn das Feld erforderlich ist und einen Wert hat, ist der Wert `false`.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht gesetzt ist und das `required`-Attribut gesetzt ist.

### Fehlender erforderlicher Eingabewert

Das folgende Beispiel überprüft die Gültigkeit eines [Zahlen-Eingabefelds](/de/docs/Web/HTML/Element/input/number).
Beschränkungen wurden unter Verwendung des [`min`-Attributs](/de/docs/Web/HTML/Element/input/number#min) hinzugefügt, das einen Minimalwert von `18` für die Eingabe festlegt, und des [`required`-Attributs](/de/docs/Web/HTML/Attributes/required), das leere Werte verbietet.
Wenn der Benutzer einen Wert eingibt, der keine Zahl größer als 17 ist, schlägt die Einschränkungsvalidierung fehl, und die Stile, die mit {{cssxref(":invalid")}} übereinstimmen, werden angewendet.

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
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
