---
title: "HTMLObjectElement: validity Eigenschaft"
short-title: validity
slug: Web/API/HTMLObjectElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Schnittstelle gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt zurück, das die Gültigkeitszustände dieses Elements repräsentiert. Obwohl {{HTMLElement("object")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<object>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity) `true` zurück, während die `validity`-Eigenschaft des `validityState` `false` ist.

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

- [`HTMLObjectElement.checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity)
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation)
