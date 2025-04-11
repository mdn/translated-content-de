---
title: "HTMLTextAreaElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLTextAreaElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt einen Zeichenfolgenwert zurück, der eine lokalisierte Nachricht darstellt und die Validierungsbeschränkungen beschreibt, die das {{htmlelement("textarea")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenfolge, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist ([`HTMLTextAreaElement.willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) ist `false`) oder seine Beschränkungen erfüllt.

Wenn das `<textarea>`-Element ein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `true`) und die Beschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des [`HTMLTextAreaElement.validity`](/de/docs/Web/API/HTMLTextAreaElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
