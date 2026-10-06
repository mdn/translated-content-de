---
title: "HTMLButtonElement: Methode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
l10n:
  sourceCommit: 77255c9651ee56d559b577c74cec1c3f4178d2bf
---

{{ APIRef("HTML DOM") }}

Die Methode **`setCustomValidity()`** der Schnittstelle [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) legt die benutzerdefinierte Validitätsmeldung für das Element {{htmlelement("button")}} fest. Verwenden Sie eine leere Zeichenfolge, um anzugeben, dass das Element _keinen_ benutzerdefinierten Validitätsfehler aufweist.

Einige {{HTMLElement("button")}}-Elemente unterliegen nicht der Constraint Validation (siehe [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate)). Bei diesen Buttons bewirkt die Methode [`reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity) nicht, dass die benutzerdefinierte Fehlermeldung angezeigt wird. Sie setzt jedoch die Eigenschaft [`customError`](/de/docs/Web/API/ValidityState/customError) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts des Elements auf `true` und die Eigenschaft [`valid`](/de/docs/Web/API/ValidityState/valid) auf `false`. Mit [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) können Sie prüfen, ob ein Button an der Constraint Validation teilnimmt.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Die Zeichenfolge mit der Fehlermeldung. Eine leere Zeichenfolge entfernt alle benutzerdefinierten Validitätsfehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const errorButton = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorButton.setCustomValidity("There is an error");
} else {
  errorButton.setCustomValidity("");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("button")}}
- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity)
- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
- [Formularvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation).
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}
