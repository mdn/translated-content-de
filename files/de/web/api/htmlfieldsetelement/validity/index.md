---
title: "HTMLFieldSetElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Gültigkeitsmeldung festgelegt wurde.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit der darin enthaltenen Formular-Steuerelemente angewendet, nicht auf das `fieldset` selbst.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<fieldset>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) `true` zurück, während die `valid`-Eigenschaft von `validityState` `false` ist.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit der darin enthaltenen Formular-Steuerelemente angewendet, nicht auf das `fieldset` selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
