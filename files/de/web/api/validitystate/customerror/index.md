---
title: "ValidityState: customError-Eigenschaft"
short-title: customError
slug: Web/API/ValidityState/customError
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`customError`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt `true` zurück, wenn ein Element die in der benutzerdefinierten Gültigkeit festgelegte Validierung, die durch die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode des Elements gesetzt wurde, nicht erfüllt.

## Wert

Ein booleanes Wert, das `true` ist, wenn eine benutzerdefinierte Fehlermeldung auf eine nicht leere Zeichenfolge gesetzt wurde.

## Beispiele

### Erkennen eines benutzerdefinierten Fehlers

In diesem Beispiel setzt [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) eine benutzerdefinierte Fehlermeldung, wenn eine Formularübermittlung Benutzereingaben enthält, die als ungültig angesehen werden. Der "Eingabe validieren"-Button ruft [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity) auf, das eine Validierungsmeldung unter dem Element anzeigt, wenn ein Benutzer Werte eingibt, die nicht den [Formularbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation#constraint_validation_process) entsprechen.

Wenn Sie die Texte "good" oder "fine" eingeben und versuchen, die Eingabe zu validieren, wird das Feld als ungültig markiert, bis die benutzerdefinierte Fehlermeldung gelöscht wird (auf eine leere Zeichenfolge gesetzt wird). Zum Vergleich gibt es ein [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Attribut auf dem Eingabeelement, das es uns ermöglicht, den [`tooShort`-Gültigkeitszustand](/de/docs/Web/API/ValidityState/tooShort) zu demonstrieren, wenn der Benutzer weniger als zwei Zeichen eingibt. Wenn der Wert im Formular-Steuerelement ungültig ist, hat die Eingabe selbst dann einen roten Umriss, wenn kein benutzerdefinierter Fehler vorhanden ist.

#### HTML

```html
<pre id="log">Validation failures logged here...</pre>
<input
  type="text"
  id="userInput"
  placeholder="How do you feel?"
  minlength="2" />
<button id="checkButton">Validate input</button>
```

#### CSS

```css
input:invalid {
  border: red solid 3px;
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

#### JavaScript

```js
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkButton");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

const check = (input) => {
  // Handle cases where input is too vague
  if (input.value === "good" || input.value === "fine") {
    input.setCustomValidity(`"${input.value}" is not a feeling.`);
  } else {
    // An empty string resets the custom validity state
    input.setCustomValidity("");
  }
};

userInput.addEventListener("input", () => {
  check(userInput);
});

const validateInput = () => {
  userInput.reportValidity();
  if (userInput.validity.customError) {
    // We can handle custom validity states here
    log("Custom validity error: " + userInput.validationMessage);
  } else {
    log(userInput.validationMessage);
  }
};

checkButton.addEventListener("click", validateInput);
```

#### Ergebnis

{{EmbedLiveSample("detecting_a_custom_error", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput), [valid](/de/docs/Web/API/ValidityState/valid) Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
