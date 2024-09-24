---
title: "HTMLInputElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des {{domxref("HTMLInputElement")}}-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element alle [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt, die darauf angewendet wurden. Wenn dies nicht der Fall ist, löst die Methode zusätzlich ein {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis auf dem Element aus. Da es kein standardmäßiges Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung.

> [!NOTE]
> Ein HTML-{{htmlelement("input")}}-Element mit einer nicht-null {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} gilt als ungültig und wird die CSS-{{cssxref(":invalid")}}-Pseudoklasse ansprechen und `checkValidity()` wird false zurückgeben. Verwenden Sie die Methode {{domxref("HTMLInputElement.setCustomValidity()")}}, um die {{domxref("HTMLInputElement.validationMessage")}} auf den leeren String zu setzen und damit den {{domxref("HTMLInputElement.validity", "validity")}}-Zustand als gültig zu definieren.

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

Wir fügen ein Formular mit einem erforderlichen Zahlenfeld und zwei Schaltflächen hinzu: eine zum Überprüfen des Formulars und die andere zum Absenden.

```html
<form action="#" method="post">
  <p>
    <label for="age">Ihr Alter (21 bis 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Absenden</button>
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

Wenn `false`, und der Wert fehlt, unter 21, über 65 oder anderweitig ungültig ist, wird das ungültige Ereignis in die Konsole protokolliert. Um den Fehler dem Benutzer zu melden, verwenden Sie stattdessen {{domxref("HTMLInputElement.reportValidity()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.reportValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/de/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
