---
title: "HTMLButtonElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der {{domxref("HTMLButtonElement")}}-Schnittstelle gibt eine Zeichenfolge zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungseinschränkungen beschreibt, die das {{htmlelement("button")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenfolge, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (der [`type`](/de/docs/Web/HTML/Element/button#type) des `<button>` ist `button` oder `reset`) oder es seine Einschränkungen erfüllt.

Wenn das `<button>` ein Kandidat für die Einschränkungsvalidierung ist (der `type` ist auf `submit` gesetzt oder standardmäßig `submit` und {{domxref("HTMLButtonElement.willValidate")}} ist `true`) und die Einschränkungen nicht erfüllt sind (es gibt einen nicht-nullwertigen {{domxref("ValidityState.customError")}}), ist der Wert die Fehlermeldung, die dem Benutzer während der Elementvalidierung angezeigt würde.

## Wert

Eine Zeichenfolge.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("button")}}
- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLButtonElement.willValidate")}}
- {{domxref("HTMLButtonElement.validity")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{domxref("HTMLButtonElement.setCustomValidity()")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
