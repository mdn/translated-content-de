---
title: "HTMLButtonElement: validity Eigenschaft"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** Schreibgeschützte Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt zurück, das die Gültigkeitszustände repräsentiert, in denen sich dieses Element befindet.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<button>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand ist die `validity`-Eigenschaft von `validityState` `false`, während [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) `true` zurückgibt, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) der Schaltfläche nicht `"submit"` ist, da solche Schaltflächen keine Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

```js
const button = document.getElementById("myButton");
button.setCustomValidity("This button is invalid.");
const validityState = button.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(button.checkValidity()); // false if the button is of the "submit" type, true otherwise
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr über: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
