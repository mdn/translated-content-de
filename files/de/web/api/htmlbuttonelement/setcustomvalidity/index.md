---
title: "HTMLButtonElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`**-Methode der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("button")}}-Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler aufweist.

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
- [Formularvalidierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
