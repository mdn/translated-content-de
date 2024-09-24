---
title: "HTMLTextAreaElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLTextAreaElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft des {{domxref("HTMLTextAreaElement")}}-Interfaces gibt einen Zeichenfolgenwert zurück, der eine lokalisierte Nachricht darstellt, die die Validierungsanforderungen beschreibt, die das {{htmlelement("textarea")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist ({{domxref("HTMLTextAreaElement.willValidate")}} ist `false`) oder es seine Anforderungen erfüllt.

Wenn das `<textarea>`-Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Anforderungen nicht erfüllt sind (die `valid`-Eigenschaft des {{domxref("HTMLTextAreaElement.validity")}}-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Ein String.

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
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.willValidate")}}
- {{domxref("HTMLTextAreaElement.validity")}}
- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{domxref("HTMLTextAreaElement.setCustomValidity()")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
