---
title: "HTMLOutputElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände dieses Elements repräsentiert. Obwohl {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<output>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity) `true` zurück, während die `validityState`-Eigenschaft `valid` `false` ist.

```js
const output = document.getElementById("myOutput");
output.setCustomValidity("This object element is invalid.");
const validityState = output.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(output.checkValidity()); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
