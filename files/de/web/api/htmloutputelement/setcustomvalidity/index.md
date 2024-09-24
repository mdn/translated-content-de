---
title: "HTMLOutputElement: Methode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode des {{DOMxRef("HTMLOutputElement")}} Schnittstelle setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("output")}} Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keine_ benutzerdefinierte Fehlermeldung hat.

Das `<output>` Element ist kein Kandidat für die Überprüfung von Eingabebeschränkungen. Die {{DOMxRef("HTMLOutputElement.reportValidity()", "reportValidity()")}} Methode führt nicht dazu, dass die benutzerdefinierte Fehlermeldung dem Benutzer angezeigt wird. Sie setzt jedoch die {{DOMxRef("ValidityState.customError", "customError")}} Eigenschaft des {{DOMxRef("ValidityState")}} Objekts des Elements auf `true` und die {{DOMxRef("ValidityState.valid", "valid")}} Eigenschaft auf `false`.

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

In diesem Beispiel, wenn der {{domxref("HTMLOutputElement.value", "value")}} des `<output>` kein von null unterschiedener Wert ist, setzen wir eine benutzerdefinierte Fehlermeldung. Wenn es eine Zahl ist, setzen wir den benutzerdefinierten Fehler auf einen leeren String:

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
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLOutputElement.validity")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{domxref("HTMLOutputElement.reportValidity()")}}
- [Formularvalidierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Anleitung: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
