---
title: "HTMLFieldSetElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLFieldSetElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Validierungsbedingungen beschreibt, die das {{htmlelement("fieldset")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, da `<fieldset>`-Elemente keine Kandidaten für die Einschränkungsvalidierung sind ([`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate) ist `false`).

## Wert

Der leere String, `""`;

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
