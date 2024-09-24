---
title: "HTMLFieldSetElement: Methode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLFieldSetElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode der {{DOMxRef("HTMLFieldSetElement")}} Schnittstelle setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("fieldset")}}-Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Validitätsfehler hat.

Das `<fieldset>`-Element ist kein Kandidat für die Einschränkungsvalidierung. Die Methode {{DOMxRef("HTMLFieldSetElement.reportValidity()", "reportValidity()")}} wird nicht dazu führen, dass die benutzerdefinierte Fehlermeldung dem Benutzer angezeigt wird, setzt jedoch die {{DOMxRef("ValidityState.customError", "customError")}} Eigenschaft des {{DOMxRef("ValidityState")}}-Objekts des Elements auf `true` und die {{DOMxRef("ValidityState.valid", "valid")}} Eigenschaft auf `false`.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Validitätsfehler.

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
- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFieldSetElement.validity")}}
- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
- [Formularvalidierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Formularvalidierung auf der Client-Seite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
