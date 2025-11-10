---
title: "HTMLInputElement: validationMessage Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist schreibgeschützt und gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das {{htmlelement("input")}}-Element nicht erfüllt (falls vorhanden).

Wenn das `<input>`-Element kein Kandidat für die Einschränkungsvalidierung ist ([`HTMLInputElement.willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`) oder es seine Einschränkungen erfüllt, ist der Wert ein leerer String (`""`).

Wenn das Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Ein String.

## Beispiel

```js
const input = document.getElementById("myInput");
const errorMessage = input.validationMessage;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate)
- [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)
- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
