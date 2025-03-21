---
title: "HTMLInputElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: d8d89df9fc9908787e9d0c6eb1ea091f8867e32f
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interfaces führt die gleichen Gültigkeitsprüfungs-Schritte wie die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) Methode aus. Zusätzlich zeigt der Browser das Problem dem Benutzer an, wenn das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis nicht abgebrochen wird.

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

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Buttons hinzu: einer, um das Formular zu überprüfen und der andere, um es abzusenden.

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

Wenn der "reportValidity()"-Button aktiviert wird, verwenden wir die `reportValidity()` Methode, um zu prüfen, ob der Wert des Inputs seine Beschränkungen erfüllt. Wir protokollieren den Rückgabewert. Wenn `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

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

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung einen `false` Rückgabewert verursachen kann, wenn der Wert ansonsten gültig ist.

#### HTML

Wir fügen einen "Fix me"-Button zum HTML des vorherigen Beispiels hinzu.

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

Wir erweitern das JavaScript aus dem grundlegenden Beispiel oben, indem wir eine Funktion hinzufügen, die die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode verwendet, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()` Funktion setzt die Fehlermeldung nur dann auf eine leere Zeichenfolge, wenn das Eingabefeld gültig ist UND die Variable `enableValidation` `true` ist, wobei `enableValidation` `false` bleibt, bis der "Fix issues"-Button aktiviert wurde.

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

Wenn Sie den "reportValidity()"-Button aktivieren, bevor Sie ein Alter eingeben, gibt die `reportValidity()` Methode `false` zurück, da sie die `required`-Einschränkungsvalidierung nicht erfüllt. Diese Methode löst ein `invalid`-Ereignis auf der Eingabe aus und berichtet das Problem dem Benutzer, wobei die benutzerdefinierte Fehlermeldung "Please set an age (required)" angezeigt wird. Solange eine benutzerdefinierte Fehlermeldung gesetzt ist, wird durch Aktivieren des "reportValidity()"-Buttons weiterhin ein Fehler angezeigt, auch wenn Sie ein gültiges Alter auswählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf die leere Zeichenfolge setzen, was durch Klicken auf den "Fix issues"-Button geschieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
