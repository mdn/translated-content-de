---
title: "HTMLSelectElement: ValidationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die **`validationMessage`** schreibgeschützte Eigenschaft der Schnittstelle [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) gibt einen Zeichenfolgenwert zurück, der eine lokalisierte Nachricht darstellt und die Validierungseinschränkungen beschreibt, die das {{htmlelement("select")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenfolge, wenn das Steuerelement nicht für die Einschränkungsvalidierung in Frage kommt ([`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) ist `false`) oder es seine Einschränkungen erfüllt.

Wenn das `<select>`-Element für die Einschränkungsvalidierung in Frage kommt (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt werden (die `valid`-Eigenschaft des [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Eine Zeichenfolge.

## Beispiel

```js
const select = document.getElementById("mySelect");
const errorMessage = select.validationMessage;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("select")}}
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate)
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity)
- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
- [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
