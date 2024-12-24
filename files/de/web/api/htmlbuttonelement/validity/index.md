---
title: "HTMLButtonElement: `validity`-Eigenschaft"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
l10n:
  sourceCommit: 879db96bee7cd8301bbc38d326d9b905ae4493d1
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Validitätszustände darstellt, in denen sich dieses Element befindet.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<button>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand ist die `validity`-Eigenschaft des `validityState` `false`, während [`checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity) `true` zurückgibt, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) des Buttons nicht `"submit"` ist, da solche Buttons keine Kandidaten für die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) sind.

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
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
