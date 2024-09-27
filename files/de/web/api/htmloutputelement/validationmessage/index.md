---
title: "HTMLOutputElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`** schreibgeschützte Eigenschaft der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle gibt einen String zurück, der eine lokalisierte Nachricht darstellt, welche die Validierungsbeschränkungen beschreibt, die das {{htmlelement("output")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, da `<output>`-Elemente keine Kandidaten für die Einschränkungsvalidierung sind ([`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) ist `false`).

## Wert

Der leere String, `""`;

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
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
