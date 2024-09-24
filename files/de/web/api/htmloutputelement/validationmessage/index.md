---
title: "HTMLOutputElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der {{domxref("HTMLOutputElement")}}-Schnittstelle gibt einen String zurück, der eine lokalisierte Nachricht beschreibt, welche die Validierungseinschränkungen, die das {{htmlelement("output")}}-Steuerelement nicht erfüllt (falls vorhanden), darstellt. Dies ist der leere String, da `<output>`-Elemente keine Kandidaten für die Einschränkungsvalidierung sind ({{domxref("HTMLOutputElement.willValidate")}} ist `false`).

## Wert

Der leere String, `""`;

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("output")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLOutputElement.willValidate")}}
- {{domxref("HTMLOutputElement.validity")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{domxref("HTMLOutputElement.reportValidity()")}}
- {{domxref("HTMLOutputElement.setCustomValidity()")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
