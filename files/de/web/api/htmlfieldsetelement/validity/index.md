---
title: "HTMLFieldSetElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`validity`**-Eigenschaft der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle, die nur lesbar ist, gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Zustände der Gültigkeit dieses Elements darstellt. Obwohl {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit ihrer nachgeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<fieldset>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) `true` zurück, während die `validityState`-Eigenschaft `false` ist.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit ihrer nachgeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation)
