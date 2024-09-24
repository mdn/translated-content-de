---
title: "HTMLInputElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des {{domxref("HTMLInputElement")}}-Interfaces führt dieselben Schritte zur Überprüfung der Gültigkeit aus wie die {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}-Methode. Zusätzlich zeigt der Browser das Problem dem Benutzer an, wenn das {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis nicht abgebrochen wird.

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

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen ein: eine, um das Formular zu überprüfen, und eine andere, um es zu senden.

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

Wenn die "reportValidity()"-Schaltfläche aktiviert wird, nutzen wir die `reportValidity()`-Methode, um zu überprüfen, ob der Wert der Eingabe den Vorgaben entspricht. Wir protokollieren den Rückgabewert. Wenn `false`, zeigen wir auch die Validierungsnachricht an und erfassen das `invalid`-Ereignis.

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

Wenn `false`, erscheint eine Fehlermeldung, ein ungültiges Ereignis wird ausgelöst, und wir protokollieren dieses Ereignis in der Konsole, wenn der Wert fehlt, unter 21 liegt, über 65 liegt oder anderweitig ungültig ist.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung einen `false`-Rückgabewert verursachen kann, auch wenn der Wert ansonsten gültig ist.

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

Wir erweitern das JavaScript aus dem grundlegenden Beispiel oben, indem wir eine Funktion hinzufügen, die die {{domxref("HTMLInputElement.setCustomValidity()")}}-Methode verwendet, um benutzerdefinierte Fehlermeldungen bereitzustellen. Die `validateAge()`-Funktion setzt die Fehlermeldung nur dann auf einen leeren String, wenn die Eingabe gültig ist UND die Variable `enableValidation` `true` ist, wobei `enableValidation` `false` bleibt, bis die "Fix issues"-Schaltfläche aktiviert wurde.

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
    // setzt auf leeren String, wenn gültig UND enableValidation auf true gesetzt wurde
    ageInput.setCustomValidity("");
  }
};
```

#### Ergebnisse

{{EmbedLiveSample("Benutzerdefinierte Fehlermeldung", "100%", 120)}}

Wenn Sie die "reportValidity()"-Schaltfläche aktivieren, bevor Sie ein Alter eingeben, gibt die `reportValidity()`-Methode `false` zurück, da sie die `required`-Einschränkungsvalidierung nicht erfüllt. Diese Methode löst ein `invalid`-Ereignis am Eingabefeld aus und meldet das Problem dem Benutzer, indem es die benutzerdefinierte Fehlermeldung "Please set an age (required)" anzeigt. Solange eine benutzerdefinierte Fehlermeldung eingestellt ist, zeigt das Aktivieren der "reportValidity()"-Schaltfläche weiterhin einen Fehler an, selbst wenn Sie ein gültiges Alter wählen. Um die Validierung zu aktivieren, müssen wir die benutzerdefinierte Fehlermeldung auf einen leeren String setzen, was durch Klicken auf die "Fix issues"-Schaltfläche erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Erlernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Anleitung: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
