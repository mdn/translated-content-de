---
title: "HTMLSelectElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das {{htmlelement("select")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist ([`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) ist `false`), oder es seine Einschränkungen erfüllt.

Wenn das `<select>`-Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Ein String.

## Beispiel

```js
const select = document.getElementById("mySelect");
const errorMessage = select.validationMessage;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("select")}}
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate)
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity)
- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
- [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
