---
title: "HTMLInputElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt eine Zeichenfolge zurück, die eine lokalisierte Nachricht darstellt, welche die Validierungsbeschränkungen beschreibt, die das {{htmlelement("input")}}-Steuerelement nicht erfüllt (falls vorhanden).

Wenn das `<input>`-Element kein Kandidat für die Einschränkungsvalidierung ist ([`HTMLInputElement.willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`), oder es seine Beschränkungen erfüllt, ist der Wert die leere Zeichenfolge (`""`).

Falls das Element ein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `true`) und die Beschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Nutzer während der Validierung angezeigt werden würde.

## Wert

Eine Zeichenfolge.

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
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate)
- [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)
- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
