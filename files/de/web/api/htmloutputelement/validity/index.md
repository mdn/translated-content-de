---
title: "HTMLOutputElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`**-Eigenschaft des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurückgibt, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("output")}}-Elemente nie Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Gültigkeitsmeldung festgelegt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<output>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity) `true` zurück, während die `validity`-Eigenschaft des `validityState` `false` ist.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
