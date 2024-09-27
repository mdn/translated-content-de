---
title: "HTMLFieldSetElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt zurück, das die Validitätszustände repräsentiert, in denen sich dieses Element befindet. Obwohl {{HTMLElement("fieldset")}} Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Validitätszustand dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<fieldset>` Elemente basierend auf der Gültigkeit ihrer untergeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<fieldset>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) `true` zurück, während die `validity`-Eigenschaft des `validityState` `false` ist.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<fieldset>` Elemente basierend auf der Gültigkeit ihrer untergeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
