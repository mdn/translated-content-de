---
title: "HTMLButtonElement: Validitätseigenschaft"
short-title: Validität
slug: Web/API/HTMLButtonElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validity`** des {{domxref("HTMLButtonElement")}}-Interfaces gibt ein {{domxref("ValidityState")}}-Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.

## Wert

Ein {{domxref("ValidityState")}}-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<button>` sich in einem ungültigen Zustand befindet, wenn ein {{domxref("ValidityState/customError", "customError")}} gesetzt ist; in diesem Zustand ist die `validityState`-Eigenschaft `false`, während {{domxref("HTMLFieldSetElement/checkValidity", "checkValidity()")}} `true` zurückgibt, wenn der {{domxref("HTMLButtonElement/type", "type")}} des Buttons nicht `"submit"` ist, da solche Buttons keine Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

```js
const button = document.getElementById("myButton");
button.setCustomValidity("This button is invalid.");
const validityState = button.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(button.checkValidity()); // false, wenn der Button vom Typ "submit" ist, sonst true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
