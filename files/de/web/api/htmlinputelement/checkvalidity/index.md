---
title: "HTMLInputElement: Methode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML DOM")}}

Die Methode **`checkValidity()`** der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gibt einen booleschen Wert zurück, der angibt, ob das Element die für es geltenden Regeln der [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt. Wenn sie `false` zurückgibt, löst die Methode außerdem ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus. Da es für `checkValidity()` kein standardmäßiges Browserverhalten gibt, hat das Verhindern dieses `invalid`-Ereignisses keine Auswirkung.

> [!NOTE]
> Ein HTML-Element {{htmlelement("input")}} mit einer nicht leeren [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) gilt als ungültig, entspricht der CSS-Pseudoklasse {{cssxref(":invalid")}} und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity), um [`HTMLInputElement.validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) auf die leere Zeichenfolge zu setzen und damit den Zustand von [`validity`](/de/docs/Web/API/HTMLInputElement/validity) auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; andernfalls `false`.

## Beispiele

### HTML

Wir fügen ein erforderliches Zahlenfeld und eine Schaltfläche hinzu, mit der sich dessen Gültigkeit überprüfen lässt.

```html
<p>
  <label for="age">Your (21 to 65) </label>
  <input type="number" name="age" required id="age" min="21" max="65" />
</p>
<p>
  <button type="button" id="check">checkValidity()</button>
</p>
<pre id="log"></pre>
```

### JavaScript

Wenn die Schaltfläche aktiviert wird, protokollieren wir den Rückgabewert von `checkValidity()`. Außerdem lauschen wir auf das `invalid`-Ereignis und fügen der Ausgabe eine Meldung hinzu, wenn es ausgelöst wird.

```js
const output = document.querySelector("#log");
const checkButton = document.querySelector("#check");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  output.textContent += "Invalid event fired.\n";
});

checkButton.addEventListener("click", () => {
  const checkVal = ageInput.checkValidity();
  output.textContent = `checkValidity returned: ${checkVal}`;
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 220)}}

Wenn der Rückgabewert `false` ist, weil der Wert fehlt, unter 21 oder über 65 liegt oder aus einem anderen Grund ungültig ist, wird das `invalid`-Ereignis in der Ausgabe protokolliert. Um den Fehler den Nutzenden zu melden, verwenden Sie stattdessen [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}
