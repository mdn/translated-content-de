---
title: "HTMLOutputElement: validationMessage Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces gibt eine Zeichenkette zurück, die eine lokalisierte Nachricht darstellt und die Validierungseinschränkungen beschreibt, die die {{htmlelement("output")}}-Steuerung nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenkette, da `<output>`-Elemente keine Kandidaten für die Einschränkungsvalidierung sind ([`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) ist `false`).

## Wert

Die leere Zeichenkette, `""`;

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("output")}}
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)
- [`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate)
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity)
- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)
- [`HTMLOutputElement.setCustomValidity()`](/de/docs/Web/API/HTMLOutputElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
