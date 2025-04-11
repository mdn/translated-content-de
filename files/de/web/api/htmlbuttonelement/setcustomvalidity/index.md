---
title: "HTMLButtonElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Interfaces setzt die benutzerdefinierte Validierungsmeldung für das {{htmlelement("button")}}-Element. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Validierungsfehler hat.

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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
