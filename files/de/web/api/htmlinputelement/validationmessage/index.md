---
title: "HTMLInputElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die einen Zeichenfolgenwert zurückgibt, der eine lokalisierte Nachricht beschreibt, welche die Überprüfungsanforderungen des {{htmlelement("input")}}-Elements nicht erfüllt (falls vorhanden).

Wenn das `<input>`-Element kein Kandidat für die Eingabebeschränkungsüberprüfung ist ([`HTMLInputElement.willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`) oder seine Einschränkungen erfüllt, ist der Wert die leere Zeichenfolge (`""`).

Wenn das Element ein Kandidat für die Eingabebeschränkungsüberprüfung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt sind (die `valid`-Eigenschaft des [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Überprüfung angezeigt würde.

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
- [Lernen: Überprüfung von Formularen auf der Clientseite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkende Validierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
