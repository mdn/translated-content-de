---
title: "HTMLObjectElement: Gültigkeits-Eigenschaft"
short-title: Gültigkeit
slug: Web/API/HTMLObjectElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft der {{domxref("HTMLObjectElement")}}-Schnittstelle gibt ein {{domxref("ValidityState")}}-Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("object")}}-Elemente niemals Kandidaten für die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

## Wert

Ein {{domxref("ValidityState")}}-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<object>` in einem ungültigen Zustand ist, wenn ein {{domxref("ValidityState/customError", "customError")}} festgelegt ist; in diesem Zustand gibt {{domxref("HTMLObjectElement/checkValidity", "checkValidity()")}} `true` zurück, während die `validityState`-Eigenschaft `validity` `false` ist.

```js
const objectElem = document.getElementById("myObjectElm");
objectElem.setCustomValidity("This object element is invalid.");
const validityState = objectElem.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(objectElem.checkValidity()); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLObjectElement.checkValidity()")}}
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
