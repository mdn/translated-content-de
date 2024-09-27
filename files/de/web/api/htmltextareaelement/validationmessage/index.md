---
title: "HTMLTextAreaElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLTextAreaElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`**-Eigenschaft des schreibgeschützten [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt eine Zeichenfolge zurück, die eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das {{htmlelement("textarea")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenfolge, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist ([`HTMLTextAreaElement.willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) ist `false`) oder seine Einschränkungen erfüllt.

Wenn das `<textarea>`-Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des [`HTMLTextAreaElement.validity`](/de/docs/Web/API/HTMLTextAreaElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Eine Zeichenfolge.

## Beispiel

```js
const textarea = document.getElementById("myTextArea");
const errorMessage = textarea.validationMessage;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate)
- [`HTMLTextAreaElement.validity`](/de/docs/Web/API/HTMLTextAreaElement/validity)
- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- [`HTMLTextAreaElement.reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
- [`HTMLTextAreaElement.setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
