---
title: "ValidityState: customError-Eigenschaft"
short-title: customError
slug: Web/API/ValidityState/customError
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`customError`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt `true` zurück, wenn ein Element die in der benutzerdefinierten Gültigkeitsprüfung durch die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) des Elements festgelegte Validierung nicht erfüllt.

## Wert

Ein boolescher Wert, der `true` ist, wenn eine benutzerdefinierte Fehlermeldung auf einen nicht-leeren String gesetzt wurde.

## Beispiele

### Erkennen eines benutzerdefinierten Fehlers

In diesem Beispiel setzt [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) eine benutzerdefinierte Fehlermeldung, wenn ein Formular mit Benutzereingaben gesendet wird, die als ungültig angesehen werden. Der Button "Eingabe validieren" ruft [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity) auf, welches eine Validierungsmeldung unter dem Element anzeigt, wenn ein Benutzer Werte eingibt, die nicht den [Einschränkungen des Formulars](/de/docs/Web/HTML/Constraint_validation#constraint_validation_process) entsprechen.

Wenn Sie den Text "good" oder "fine" eingeben und versuchen, die Eingabe zu validieren, wird das Feld als ungültig markiert, bis die benutzerdefinierte Fehlermeldung gelöscht wird (auf einen leeren String gesetzt wird). Zum Vergleich gibt es ein [`minlength`](/de/docs/Web/HTML/Attributes/minlength)-Attribut im Eingabeelement, das uns ermöglicht, den [`tooShort`-Gültigkeitszustand](/de/docs/Web/API/ValidityState/tooShort) zu demonstrieren, wenn der Benutzer weniger als zwei Zeichen eingibt. Wenn der Wert im Formularelement ungültig ist, auch wenn kein benutzerdefinierter Fehler vorliegt, wird die Eingabe mit einem roten Rahmen dargestellt.

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
  if (input.value == "good" || input.value == "fine") {
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
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
