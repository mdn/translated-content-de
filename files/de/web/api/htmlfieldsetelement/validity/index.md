---
title: "HTMLFieldSetElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Eingabepflichtprüfung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand trotzdem ungültig sein, wenn eine benutzerdefinierte Gültigkeitsnachricht gesetzt wurde.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente angewendet, basierend auf der Gültigkeit ihrer untergeordneten Formularelemente, nicht auf das `fieldset` selbst.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<fieldset>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) `true` zurück, während die `validity`-Eigenschaft von `validityState` `false` ist.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente angewendet, basierend auf der Gültigkeit ihrer untergeordneten Formularelemente, nicht auf das `fieldset` selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingabepflichtprüfung](/de/docs/Web/HTML/Constraint_validation)
