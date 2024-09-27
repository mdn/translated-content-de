---
title: "HTMLSelectElement: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validationMessage`**-Eigenschaft der Schnittstelle [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) gibt ein lokalisierter Nachrichtentext zurück, der die Validierungseinschränkungen beschreibt, die das {{htmlelement("select")}}-Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Validierung ist ([`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) ist `false`), oder es seine Einschränkungen erfüllt.

Wenn das `<select>`-Element ein Kandidat für die Validierung ist (`willValidate` ist `true`) und die Einschränkungen nicht erfüllt werden (die `valid`-Eigenschaft des [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Objekts ist `false`), ist der Wert die Fehlermeldung, die dem Benutzer während der Validierung angezeigt würde.

## Wert

Ein String.

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
- [Lernen: Formularvalidierung auf der Client-Seite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
