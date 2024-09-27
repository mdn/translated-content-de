---
title: "HTMLInputElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle führt dieselben Gültigkeitsüberprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) Methode. Zusätzlich zeigt der Browser das Problem dem Benutzer an, wenn das [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

### Grundlegende Verwendung

#### HTML

Wir integrieren ein Formular, das ein erforderliches Zahlenfeld und zwei Schaltflächen enthält: eine, um das Formular zu überprüfen, und eine, um es abzusenden.

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

Wenn die "reportValidity()"-Schaltfläche aktiviert wird, verwenden wir die `reportValidity()` Methode, um zu überprüfen, ob der Wert des Eingabefelds den Anforderungen entspricht. Wir protokollieren den Rückgabewert. Wenn `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

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

Wenn `false`, erscheint eine Fehlermeldung, wird ein ungültiges Ereignis ausgelöst, und wir protokollieren dieses ungültige Ereignis in der Konsole, wenn der Wert fehlt, unter 21, über 65 oder anderweitig ungültig ist.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung einen `false` Rückgabewert verursachen kann, auch wenn der Wert anderweitig gültig ist.

#### HTML

Wir fügen dem HTML des vorherigen Beispiels eine "Fix me"-Schaltfläche hinzu.

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

Wir erweitern das JavaScript aus dem obigen Grundbeispiel, indem wir eine Funktion hinzufügen, die die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode verwendet, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()` Funktion setzt die Fehlermeldung nur dann auf einen leeren String, wenn die Eingabe gültig ist UND die `enableValidation`-Variable `true` ist, wobei `enableValidation` `false` ist, bis die "fix issues"-Schaltfläche aktiviert wurde.

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

Wenn Sie die "reportValidity()"-Schaltfläche aktivieren, bevor Sie ein Alter eingeben, gibt die `reportValidity()` Methode `false` zurück, da sie die `required`-Einschränkungsvalidierung nicht erfüllt. Diese Methode löst ein `invalid`-Ereignis am Eingabeelement aus und berichtet das Problem dem Benutzer, indem die benutzerdefinierte Fehlermeldung "Please set an age (required)" angezeigt wird. Solange eine benutzerdefinierte Fehlermeldung eingestellt ist, wird beim Aktivieren der "reportValidity()"-Schaltfläche weiterhin ein Fehler angezeigt, selbst wenn Sie ein gültiges Alter wählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf einen leeren String setzen, was durch Klicken auf die "Fix issues"-Schaltfläche erfolgt.

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
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
