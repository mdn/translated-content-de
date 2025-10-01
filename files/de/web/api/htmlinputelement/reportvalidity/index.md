---
title: "HTMLInputElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces führt die gleichen Validierungsüberprüfungsschritte durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)-Methode. Zusätzlich zeigt der Browser dem Benutzer das Problem an, wenn das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

### Grundlegende Verwendung

#### HTML

Wir fügen ein Formular ein, das ein erforderliches Zahlenfeld und zwei Schaltflächen enthält: eine zum Überprüfen des Formulars und eine andere zum Absenden des Formulars.

```html
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="report">reportValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

#### JavaScript

Wenn die "reportValidity()"-Schaltfläche aktiviert wird, verwenden wir die `reportValidity()`-Methode, um zu überprüfen, ob der Wert des Eingabeelements seinen Einschränkungen entspricht. Wir loggen den Rückgabewert. Wenn `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("Invalid event fired.");
});

reportButton.addEventListener("click", () => {
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" returned: ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />Validation message: "${ageInput.validationMessage}"`;
  }
});
```

#### Ergebnisse

{{EmbedLiveSample("Basic usage", "100%", 120)}}

Wenn `false`, erscheint eine Fehlermeldung, ein ungültiges Ereignis wird ausgelöst, und wir protokollieren dieses ungültige Ereignis in der Konsole, falls der Wert fehlt, unter 21 liegt, über 65 liegt oder anderweitig ungültig ist.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung einen `false`-Rückgabewert hervorrufen kann, wenn der Wert ansonsten gültig ist.

#### HTML

Wir fügen dem HTML aus dem vorherigen Beispiel eine "Fix me"-Schaltfläche hinzu.

```html hidden
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="report">reportValidity()</button>
    <button type="button" id="fix">Fix issues</button>
  </p>
  <p id="log"></p>
</form>
```

#### JavaScript

Wir erweitern das JavaScript aus dem grundlegenden Beispiel, indem wir eine Funktion hinzufügen, die die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode verwendet, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()`-Funktion setzt die Fehlermeldung nur dann auf eine leere Zeichenfolge, wenn die Eingabe gültig ist UND die `enableValidation`-Variable `true` ist, wobei `enableValidation` `false` ist, bis die "fix issues"-Schaltfläche aktiviert wurde.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");
const fixButton = document.querySelector("#fix");
let enableValidation = false;

fixButton.addEventListener("click", (e) => {
  enableValidation = true;
  fixButton.innerHTML = "Error fixed";
  fixButton.disabled = true;
});

reportButton.addEventListener("click", () => {
  validateAge();
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" returned: ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />Validation message: "${ageInput.validationMessage}"`;
  }
});

function validateAge() {
  const validityState = ageInput.validity;
  if (validityState.valueMissing) {
    ageInput.setCustomValidity("Please set an age (required)");
  } else if (validityState.rangeUnderflow) {
    ageInput.setCustomValidity("Your value is too low");
  } else if (validityState.rangeOverflow) {
    ageInput.setCustomValidity("Your value is too high");
  } else if (enableValidation) {
    // sets to empty string if valid AND enableValidation has been set to true
    ageInput.setCustomValidity("");
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Custom error message", "100%", 120)}}

Wenn Sie die "reportValidity()"-Schaltfläche vor der Eingabe eines Alters aktivieren, gibt die `reportValidity()`-Methode `false` zurück, weil sie die `required`-Einschränkung nicht erfüllt. Diese Methode löst ein `invalid`-Ereignis auf dem Eingabefeld aus und meldet dem Benutzer das Problem, indem die benutzerdefinierte Fehlermeldung "Please set an age (required)" angezeigt wird. Solange eine benutzerdefinierte Fehlermeldung festgelegt ist, wird durch Aktivieren der "reportValidity()"-Schaltfläche weiterhin ein Fehler angezeigt, selbst wenn Sie ein gültiges Alter auswählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf die leere Zeichenfolge setzen, was durch Klicken auf die "Fix issues"-Schaltfläche erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
