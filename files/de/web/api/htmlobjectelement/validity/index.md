---
title: "HTMLObjectElement: Gültigkeitseigenschaft"
short-title: validity
slug: Web/API/HTMLObjectElement/validity
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Schnittstelle gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet. Obwohl {{HTMLElement("object")}}-Elemente niemals Kandidaten für [Rahmenvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind, kann der Gültigkeitsstatus dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<object>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity) `true` zurück, während die `validityState`-Eigenschaft `valid` auf `false` ist.

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
- [Leitfaden: Rahmenvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
