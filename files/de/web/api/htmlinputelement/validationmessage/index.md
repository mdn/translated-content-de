---
title: "HTMLInputElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`** Lese-only-Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces gibt eine Zeichenkette zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungseinschränkungen beschreibt, die das {{htmlelement("input")}}-Steuerelement nicht erfüllt (falls vorhanden).

Wenn das `<input>`-Element kein Kandidat für die Einschränkungsvalidierung ist ({{domxref("HTMLInputElement.willValidate")}} ist `false`), oder es seine Einschränkungen erfüllt, ist der Wert die leere Zeichenkette (`""`).

Wenn das Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des {{domxref("HTMLInputElement.validity")}}-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Eine Zeichenkette.

## Beispiel

```js
const input = document.getElementById("myInput");
const errorMessage = input.validationMessage;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.willValidate")}}
- {{domxref("HTMLInputElement.validity")}}
- {{domxref("HTMLInputElement.checkValidity()")}}
- {{domxref("HTMLInputElement.reportValidity()")}}
- {{domxref("HTMLInputElement.setCustomValidity()")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
