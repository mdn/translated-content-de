---
title: "HTMLButtonElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der Schnittstelle [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) gibt eine Zeichenkette zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungsbeschränkungen beschreibt, die das {{htmlelement("button")}}-Steuerelement nicht erfüllt (falls vorhanden). Diese ist die leere Zeichenkette, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist (der `<button>`-[`type`](/de/docs/Web/HTML/Element/button#type) ist `button` oder `reset`), oder wenn es seine Beschränkungen erfüllt.

Wenn der `<button>` ein Kandidat für die Beschränkungsvalidierung ist (der `type` ist gesetzt oder standardmäßig auf `submit` und [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) ist `true`) und die Beschränkungen nicht erfüllt sind (es gibt einen nicht-null [`ValidityState.customError`](/de/docs/Web/API/ValidityState/customError)), ist der Wert die Fehlermeldung, die dem Benutzer während der Elementvalidierung angezeigt würde.

## Wert

Eine Zeichenkette.

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
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
