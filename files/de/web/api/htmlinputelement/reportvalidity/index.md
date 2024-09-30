---
title: "HTMLInputElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle führt die gleichen Gültigkeitsprüfschritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)-Methode. Zusätzlich zeigt der Browser das Problem dem Benutzer an, wenn das [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`.

## Beispiele

### Grundlegende Verwendung

#### HTML

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen hinzu: eine zur Überprüfung des Formulars und eine zur Übermittlung.

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

Wenn die Schaltfläche "reportValidity()" aktiviert wird, verwenden wir die `reportValidity()`-Methode, um zu prüfen, ob der Wert der Eingabe ihre Einschränkungen erfüllt. Wir protokollieren den Rückgabewert. Wenn `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

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

Wenn `false`, erscheint eine Fehlermeldung, wird ein `invalid`-Ereignis ausgelöst, und wir protokollieren dieses Ereignis in die Konsole, falls der Wert fehlt, unter 21 liegt, über 65 liegt oder anderweitig ungültig ist.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung einen `false`-Rückgabewert verursachen kann, selbst wenn der Wert ansonsten gültig ist.

#### HTML

Wir fügen der HTML-Beispiel aus dem vorherigen Beispiel einen "Fix me"-Button hinzu.

```html hidden
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="report">reportValidity()</button>
  </p>
</form>
```

```html
<button type="button" id="fix">Fix issues</button>
```

```html hidden
   </p>
<p id="log"></p>
</form>
```

#### JavaScript

Wir erweitern das JavaScript aus dem grundlegenden Beispiel und fügen eine Funktion hinzu, die die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode nutzt, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()`-Funktion setzt die Fehlermeldung nur dann auf einen leeren String, wenn die Eingabe gültig ist UND die `enableValidation`-Variable `true` ist, wobei `enableValidation` `false` bleibt, bis die Schaltfläche "Fix issues" aktiviert wurde.

```javascript
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

Wenn Sie die Schaltfläche "reportValidity()" aktivieren, bevor Sie ein Alter eingeben, gibt die `reportValidity()`-Methode `false` zurück, da die `required`-Einschränkungsvalidierung nicht erfüllt ist. Diese Methode löst ein `invalid`-Ereignis auf der Eingabe aus und meldet dem Benutzer das Problem, indem sie die benutzerdefinierte Fehlermeldung "Please set an age (required)" anzeigt. Solange eine benutzerdefinierte Fehlermeldung festgelegt ist, wird das Aktivieren der Schaltfläche "reportValidity()" weiterhin einen Fehler anzeigen, auch wenn Sie ein gültiges Alter auswählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf den leeren String setzen, was durch Klicken auf die Schaltfläche "Fix issues" getan wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
