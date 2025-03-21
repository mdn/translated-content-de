---
title: "HTMLInputElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt einen Boolean-Wert zurück, der anzeigt, ob das Element allen darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) entspricht. Ist der Wert `false`, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standardbrowserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkungen.

> [!NOTE]
> Ein HTML-{{htmlelement("input")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) wird als ungültig angesehen, entspricht der CSS {{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity), um die [`HTMLInputElement.validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLInputElement/validity)-Zustand als gültig festzulegen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

### HTML

Wir enthalten ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen: eine zur Überprüfung des Formulars und eine andere zum Absenden.

```html
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="check">checkValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

### JavaScript

```js
const output = document.querySelector("#log");
const checkButton = document.querySelector("#check");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("Invalid event fired.");
});

checkButton.addEventListener("click", () => {
  const checkVal = ageInput.checkValidity();
  output.innerHTML = `checkValidity returned: ${checkVal}`;
});
```

### Ergebnisse

{{EmbedLiveSample("Examples", "100%", 220)}}

Wenn `false`, wird das invalid-Ereignis in die Konsole protokolliert, wenn der Wert fehlt, unter 21, über 65 liegt oder anderweitig ungültig ist. Um den Fehler dem Benutzer zu melden, verwenden Sie stattdessen [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr: Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
