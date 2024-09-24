---
title: "HTMLFieldSetElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLFieldSetElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der {{domxref("HTMLFieldSetElement")}}-Schnittstelle gibt eine Zeichenkette zurück, die eine lokalisierte Nachricht beschreibt, die die Validierungseinschränkungen angibt, die das {{htmlelement("fieldset")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenkette, da `<fieldset>`-Elemente keine Kandidaten für die Einschränkungsvalidierung sind ({{domxref("HTMLFieldSetElement.willValidate")}} ist `false`).

## Wert

Die leere Zeichenkette, `""`;

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("fieldset")}}
- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFieldSetElement.willValidate")}}
- {{domxref("HTMLFieldSetElement.validity")}}
- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
- {{domxref("HTMLFieldSetElement.setCustomValidity()")}}
- [Lernen: Formularvalidierung auf der Client-Seite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
