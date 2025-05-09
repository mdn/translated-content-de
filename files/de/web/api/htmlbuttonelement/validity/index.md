---
title: "HTMLButtonElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validity`** des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<button>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand ist die `validityState`-Eigenschaft `false`, während [`checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity) `true` zurückgibt, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) des Buttons nicht `"submit"` ist, da solche Buttons keine Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
