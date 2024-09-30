---
title: "HTMLOutputElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces legt die benutzerdefinierte Fehlermeldung für das {{htmlelement("output")}}-Element fest. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Fehler aufweist.

Das `<output>`-Element ist kein Kandidat für die Eingabekontrolle. Die [`reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)-Methode wird nicht dazu führen, dass die benutzerdefinierte Fehlermeldung dem Benutzer angezeigt wird, setzt jedoch die [`customError`](/de/docs/Web/API/ValidityState/customError)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts des Elements auf `true` und die [`valid`](/de/docs/Web/API/ValidityState/valid)-Eigenschaft auf `false`.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Fehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel setzen wir eine benutzerdefinierte Fehlermeldung, wenn der [`value`](/de/docs/Web/API/HTMLOutputElement/value) des `<output>` kein Nicht-Null-Zahl ist. Wenn es eine Zahl ist, setzen wir den benutzerdefinierten Fehler auf einen leeren String:

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
- [Formularvalidierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingabekontrolle](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
