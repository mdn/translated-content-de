---
title: "HTMLInputElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle führt dieselben Gültigkeitsprüfungs-Schritte wie die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)-Methode durch. Zusätzlich zeigt der Browser, sofern das [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis nicht abgebrochen wurde, das Problem dem Benutzer an.

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

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen ein: Eine, um das Formular zu überprüfen, und eine andere, um es abzusenden.

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

Wenn die "reportValidity()"-Schaltfläche aktiviert wird, nutzen wir die `reportValidity()` Methode, um zu überprüfen, ob der Wert des Eingabefelds seine Einschränkungen erfüllt. Wir protokollieren den Rückgabewert. Wenn `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

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

Wenn `false`, und der Wert fehlt, unter 21 liegt, über 65 liegt oder anderweitig ungültig ist, erscheint eine Fehlermeldung, ein ungültiges Ereignis wird ausgelöst, und wir protokollieren dieses ungültige Ereignis in der Konsole.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung einen `false` Rückgabewert verursachen kann, obwohl der Wert ansonsten gültig ist.

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

Wir erweitern das JavaScript aus dem grundlegenden Beispiel oben und fügen eine Funktion hinzu, die die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode verwendet, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()`-Funktion setzt die Fehlermeldung nur dann auf einen leeren String, wenn der Eingabewert gültig ist UND die Variable `enableValidation` `true` ist, wobei `enableValidation` `false` bleibt, bis die "Fix issues"-Schaltfläche aktiviert wurde.

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

Wenn Sie die "reportValidity()"-Schaltfläche aktivieren, bevor Sie ein Alter eingeben, gibt die `reportValidity()` Methode `false` zurück, da sie nicht die `required`-Einschränkungsvalidierung erfüllt. Diese Methode löst ein `invalid`-Ereignis am Eingabefeld aus und meldet das Problem dem Benutzer, indem die benutzerdefinierte Fehlermeldung "Please set an age (required)" angezeigt wird. Solange eine benutzerdefinierte Fehlermeldung gesetzt ist, führt das Aktivieren der "reportValidity()"-Schaltfläche weiterhin zu einer Fehlermeldung, auch wenn Sie ein gültiges Alter auswählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf einen leeren String setzen, was durch Klicken auf die "Fix issues"-Schaltfläche erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
