---
title: "HTMLFieldSetElement: Eigenschaft validity"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des {{domxref("HTMLFieldSetElement")}} Interfaces gibt ein {{domxref("ValidityState")}} Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("fieldset")}} Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand immer noch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>` Elemente basierend auf der Gültigkeit der darin enthaltenen Formularsteuerelemente angewendet, nicht auf das Fieldset selbst.

## Wert

Ein {{domxref("ValidityState")}} Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<fieldset>` sich in einem ungültigen Zustand befindet, wenn ein {{domxref("ValidityState/customError", "customError")}} gesetzt ist; in diesem Zustand gibt {{domxref("HTMLFieldSetElement/checkValidity", "checkValidity()")}} `true` zurück, während die `validity` Eigenschaft des `validityState` `false` ist.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>` Elemente basierend auf der Gültigkeit der darin enthaltenen Formularsteuerelemente angewendet, nicht auf das Fieldset selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernmaterial: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
