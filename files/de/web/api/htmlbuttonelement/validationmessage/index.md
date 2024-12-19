---
title: "HTMLButtonElement: Eigenschaft validationMessage"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`** schreibgeschützte Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle gibt eine Zeichenkette zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungsbeschränkungen beschreibt, die das {{htmlelement("button")}}-Steuerelement nicht erfüllt (falls vorhanden). Diese ist eine leere Zeichenkette, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (der `<button>`-[`type`](/de/docs/Web/HTML/Element/button#type) ist `button` oder `reset`) oder wenn es seine Einschränkungen erfüllt.

Wenn der `<button>` ein Kandidat für die Einschränkungsvalidierung ist (der `type` ist gesetzt oder standardmäßig `submit` und [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) ist `true`) und die Einschränkungen nicht erfüllt sind (es gibt einen nicht-null [`ValidityState.customError`](/de/docs/Web/API/ValidityState/customError)), dann ist der Wert die Fehlermeldung, die dem Benutzer während der Elementvalidierung angezeigt werden würde.

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
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
