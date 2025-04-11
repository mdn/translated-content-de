---
title: "HTMLFieldSetElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLFieldSetElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`**-Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces, die nur gelesen werden kann, gibt eine Zeichenkette zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungsbeschränkungen beschreibt, die das {{htmlelement("fieldset")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenkette, da `<fieldset>`-Elemente keine Kandidaten für die Beschränkungsvalidierung sind ([`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate) ist `false`).

## Wert

Die leere Zeichenkette, `""`;

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("fieldset")}}
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)
- [`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate)
- [`HTMLFieldSetElement.validity`](/de/docs/Web/API/HTMLFieldSetElement/validity)
- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
- [`HTMLFieldSetElement.setCustomValidity()`](/de/docs/Web/API/HTMLFieldSetElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
