---
title: "HTMLFieldSetElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLFieldSetElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`**-Methode der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle legt die benutzerdefinierte Fehlermeldung für das {{htmlelement("fieldset")}}-Element fest. Verwenden Sie den leeren String, um anzuzeigen, dass das Element keinen benutzerdefinierten Gültigkeitsfehler hat.

Das `<fieldset>`-Element ist kein Kandidat für die Constraint-Validierung. Die [`reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)-Methode wird die benutzerdefinierte Fehlermeldung nicht dem Benutzer anzeigen, setzt jedoch die [`customError`](/de/docs/Web/API/ValidityState/customError)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts des Elements auf `true` und die [`valid`](/de/docs/Web/API/ValidityState/valid)-Eigenschaft auf `false`.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Ein leerer String entfernt alle benutzerdefinierten Gültigkeitsfehler.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
