---
title: "HTMLFieldSetElement: Gültigkeitseigenschaft"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("fieldset")}}-Elemente nie Kandidaten für [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind, kann der Gültigkeitszustand trotzdem ungültig sein, wenn eine benutzerdefinierte Fehlermeldung gesetzt wurde.

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit ihrer untergeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<fieldset>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) `true` zurück, während die `validity`-Eigenschaft des `validityState` `false` ist.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit ihrer untergeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
