---
title: "HTMLOutputElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces gibt eine Zeichenfolge zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungsbeschränkungen beschreibt, die das {{htmlelement("output")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenfolge, da `<output>`-Elemente keine Kandidaten für die Einschränkungsvalidierung sind ([`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) ist `false`).

## Wert

Die leere Zeichenfolge, `""`;

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
