---
title: "HTMLSelectElement: validationMessage Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`** Eigenschaft des {{domxref("HTMLSelectElement")}} Interface gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das {{htmlelement("select")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist ({{domxref("HTMLSelectElement.willValidate")}} ist `false`) oder seine Einschränkungen erfüllt.

Falls das `<select>`-Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt sind (die `valid` Eigenschaft des {{domxref("HTMLSelectElement.validity")}} Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Ein String.

## Beispiel

```js
const select = document.getElementById("mySelect");
const errorMessage = select.validationMessage;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLelement("select")}}
- {{domxref("HTMLSelectElement")}}
- {{domxref("HTMLSelectElement.willValidate")}}
- {{domxref("HTMLSelectElement.validity")}}
- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{domxref("HTMLSelectElement.reportValidity()")}}
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
