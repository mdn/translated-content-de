---
title: "HTMLOutputElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) Schnittstelle setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("output")}} Element. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler hat.

Das `<output>` Element ist kein Kandidat für die Einschränkungsvalidierung. Die [`reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity) Methode wird nicht dazu führen, dass die benutzerdefinierte Fehlermeldung dem Benutzer angezeigt wird, setzt jedoch die [`customError`](/de/docs/Web/API/ValidityState/customError) Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState) Objekts des Elements auf `true` und die [`valid`](/de/docs/Web/API/ValidityState/valid) Eigenschaft auf `false`.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Gültigkeitsfehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel setzen wir eine benutzerdefinierte Fehlermeldung, wenn der [`value`](/de/docs/Web/API/HTMLOutputElement/value) des `<output>` Elements keine ungleich null Zahl ist. Wenn es sich um eine Zahl handelt, setzen wir den benutzerdefinierten Fehler auf einen leeren String:

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
- [Formularvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
