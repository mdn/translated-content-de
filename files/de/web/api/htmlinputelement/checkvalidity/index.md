---
title: "HTMLInputElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element alle angewendeten [Eingabebeschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllt. Wenn `false`, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standard-Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Wirkung.

> [!NOTE]
> Ein HTML {{htmlelement("input")}}-Element mit einem nicht-null-`validationMessage` wird als ungültig betrachtet, passt zur CSS-Pseudoklasse {{cssxref(":invalid")}} und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode, um die [`HTMLInputElement.validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLInputElement/validity)-Zustand auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`.

## Beispiele

### HTML

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen ein: eine zum Überprüfen des Formulars und eine zum Absenden.

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

Wenn `false`, wird, falls der Wert fehlt, unter 21, über 65 oder anderweitig ungültig ist, das `invalid`-Ereignis in der Konsole protokolliert. Um dem Benutzer den Fehler zu melden, verwenden Sie stattdessen [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingabebeschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
