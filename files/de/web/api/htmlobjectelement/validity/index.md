---
title: "HTMLObjectElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLObjectElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Schnittstelle gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt. Obwohl {{HTMLElement("object")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Gültigkeitsnachricht festgelegt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<object>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt wurde; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity) `true` zurück, während die `validity`-Eigenschaft des `validityState` `false` ist.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
