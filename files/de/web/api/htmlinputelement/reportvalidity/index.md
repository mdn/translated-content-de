---
title: "HTMLInputElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces führt die gleichen Gültigkeitsprüfungs-Schritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)-Methode. Zusätzlich zeigt der Browser, falls das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis nicht abgebrochen wird, das Problem dem Benutzer an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls gibt er `false` zurück.

## Beispiele

### Grundlegende Verwendung

#### HTML

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen hinzu: eine zum Überprüfen des Formulars und eine zum Absenden.

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

Wenn die "reportValidity()"-Schaltfläche aktiviert wird, verwenden wir die `reportValidity()`-Methode, um zu überprüfen, ob der Wert des Eingabefelds seine Einschränkungen erfüllt. Wir protokollieren den Rückgabewert. Falls `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

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

Wenn `false` ist, erscheint eine Fehlermeldung, ein ungültiges Ereignis wird ausgelöst, und wir protokollieren dieses ungültige Ereignis in der Konsole, falls der Wert fehlt, unter 21 liegt, über 65 liegt oder anderweitig ungültig ist.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel demonstriert, wie eine benutzerdefinierte Fehlermeldung einen `false`-Rückgabewert verursachen kann, auch wenn der Wert ansonsten gültig ist.

#### HTML

Wir fügen der HTML aus dem vorherigen Beispiel eine "Fix me"-Schaltfläche hinzu.

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

Wir erweitern das JavaScript aus dem obigen Basisbeispiel und fügen eine Funktion hinzu, die die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode verwendet, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()`-Funktion setzt nur dann die Fehlermeldung auf einen leeren String, wenn die Eingabe gültig ist UND die Variable `enableValidation` `true` ist. `enableValidation` bleibt `false`, bis die "fix issues"-Schaltfläche aktiviert wurde.

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

const validateAge = () => {
  const validityState_object = ageInput.validity;
  if (validityState_object.valueMissing) {
    ageInput.setCustomValidity("Please set an age (required)");
  } else if (ageInput.rangeUnderflow) {
    ageInput.setCustomValidity("Your value is too low");
  } else if (ageInput.rangeOverflow) {
    ageInput.setCustomValidity("Your value is too high");
  } else if (enableValidation) {
    // sets to empty string if valid AND enableValidation has been set to true
    ageInput.setCustomValidity("");
  }
};
```

#### Ergebnisse

{{EmbedLiveSample("Custom error message", "100%", 120)}}

Wenn Sie die "reportValidity()"-Schaltfläche aktivieren, bevor Sie ein Alter eingeben, gibt die `reportValidity()`-Methode `false` zurück, da sie die `required`-Einschränkungsprüfung nicht besteht. Diese Methode löst ein `invalid`-Ereignis am Eingabefeld aus und meldet das Problem dem Benutzer, indem die benutzerdefinierte Fehlermeldung "Bitte ein Alter angeben (erforderlich)" angezeigt wird. Solange eine benutzerdefinierte Fehlermeldung festgelegt ist, wird beim Aktivieren der "reportValidity()"-Schaltfläche weiterhin ein Fehler angezeigt, selbst wenn Sie ein gültiges Alter auswählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf den leeren String setzen, was durch Klicken auf die Schaltfläche "Fix issues" erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
