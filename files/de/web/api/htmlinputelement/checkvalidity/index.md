---
title: "HTMLInputElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das Element die darauf angewendeten [Constraint-Validierungs](/de/docs/Web/HTML/Guides/Constraint_validation)regeln erfüllt. Wenn der Wert `false` ist, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid` Ereignisses keine Wirkung.

> [!NOTE]
> Ein HTML {{htmlelement("input")}} Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) wird als ungültig angesehen, passt zur CSS {{cssxref(":invalid")}} Pseudoklasse und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode, um die [`HTMLInputElement.validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) auf die leere Zeichenkette zu setzen, um den [`validity`](/de/docs/Web/API/HTMLInputElement/validity) Zustand als gültig festzulegen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

### HTML

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen hinzu: eine zur Überprüfung des Formulars und die andere, um es zu senden.

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

Wenn der Wert `false` ist, weil er fehlt, unter 21, über 65 oder anderweitig ungültig ist, wird das ungültige Ereignis der Konsole protokolliert. Um den Fehler dem Benutzer zu melden, verwenden Sie stattdessen [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
