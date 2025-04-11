---
title: "HTMLButtonElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt eine Zeichenfolge zurück, die eine lokalisierte Nachricht beschreibt, welche die Validierungseinschränkungen des {{htmlelement("button")}}-Steuerungselements, die nicht erfüllt sind (falls vorhanden), darstellt. Dies ist eine leere Zeichenfolge, wenn das Steuerungselement kein Kandidat für die Einschränkungsvalidierung ist (der `<button>` [`type`](/de/docs/Web/HTML/Reference/Elements/button#type) ist `button` oder `reset`), oder wenn es seine Einschränkungen erfüllt.

Wenn der `<button>` ein Kandidat für die Einschränkungsvalidierung ist (der `type` ist auf `submit` gesetzt oder hat diesen als Standardwert und [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) ist `true`) und die Einschränkungen nicht erfüllt sind (es gibt einen nicht-null [`ValidityState.customError`](/de/docs/Web/API/ValidityState/customError)), ist der Wert die Fehlermeldung, die dem Benutzer während der Elementvalidierung angezeigt würde.

## Wert

Eine Zeichenfolge.

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
- [Lernen: Validierung von Formularen auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
