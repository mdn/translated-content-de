---
title: "HTMLFieldSetElement: setCustomValidity()-Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLFieldSetElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`**-Methode der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("fieldset")}}-Element. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Validierungsfehler hat.

Das `<fieldset>`-Element ist kein Kandidat für die Einschränkungsvalidierung. Die [`reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)-Methode wird nicht dazu führen, dass die benutzerdefinierte Fehlermeldung dem Benutzer angezeigt wird, aber sie setzt die [`customError`](/de/docs/Web/API/ValidityState/customError)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts des Elements auf `true` und die [`valid`](/de/docs/Web/API/ValidityState/valid)-Eigenschaft auf `false`.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Validierungsfehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const errorFieldSet = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorFieldSet.setCustomValidity("There is an error");
} else {
  errorFieldSet.setCustomValidity("");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("fieldset")}}
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)
- [`HTMLFieldSetElement.validity`](/de/docs/Web/API/HTMLFieldSetElement/validity)
- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
- [Formularvalidierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
