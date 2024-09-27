---
title: "HTMLOutputElement: setCustomValidity()-Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`**-Methode der Schnittstelle [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("output")}}-Element. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Validierungsfehler hat.

Das `<output>`-Element ist kein Kandidat für die Validierung von Einschränkungen. Die Methode [`reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity) wird nicht dazu führen, dass die benutzerdefinierte Fehlermeldung dem Benutzer angezeigt wird, setzt jedoch die [`customError`](/de/docs/Web/API/ValidityState/customError)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts des Elements auf `true` und die [`valid`](/de/docs/Web/API/ValidityState/valid)-Eigenschaft auf `false`.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, welcher die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Validierungsfehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel setzen wir eine benutzerdefinierte Fehlermeldung, wenn der [`value`](/de/docs/Web/API/HTMLOutputElement/value) des `<output>`-Elements keine von Null verschiedene Zahl ist. Ist es eine Zahl, setzen wir die benutzerdefinierte Fehlermeldung auf einen leeren String:

```js
const cart = document.getElementById("cart-form");
const total = cart.elements("total");
if (parseFloat(total.value)) {
  errorOutput.setCustomValidity("");
} else {
  errorOutput.setCustomValidity("There is an error");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("output")}}
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity)
- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)
- [Form validation](/de/docs/Web/HTML/Constraint_validation).
- [Learn: Client-side form validation](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
