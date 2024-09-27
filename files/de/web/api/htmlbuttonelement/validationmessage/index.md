---
title: "HTMLButtonElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt einen Zeichenfolgenwert zurück, der eine lokalisierte Nachricht darstellt. Diese beschreibt die Validierungsbedingungen, die das {{htmlelement("button")}}-Steuerelement nicht erfüllt (falls vorhanden). Es ist eine leere Zeichenfolge, wenn das Steuerelement kein Kandidat für die Validierung der Bedingungen ist (der `<button>`-[`type`](/de/docs/Web/HTML/Element/button#type) ist `button` oder `reset`) oder wenn es seine Bedingungen erfüllt.

Wenn der `<button>` ein Kandidat für die Validierung der Bedingungen ist (der `type` ist gesetzt oder standardmäßig `submit` und [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) ist `true`) und die Bedingungen nicht erfüllt sind (es gibt einen nicht-null [`ValidityState.customError`](/de/docs/Web/API/ValidityState/customError)), ist der Wert die Fehlermeldung, die dem Benutzer während der Elementvalidierung angezeigt würde.

## Wert

Ein Zeichenfolgenwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("button")}}
- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate)
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity)
- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
- [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Validierung von Einschränkungen](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
