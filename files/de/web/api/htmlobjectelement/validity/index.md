---
title: "HTMLObjectElement: validity Eigenschaft"
short-title: validity
slug: Web/API/HTMLObjectElement/validity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`validity`** Eigenschaft der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Schnittstelle ist schreibgeschützt und gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt zurück, das die Gültigkeitszustände dieses Elements repräsentiert. Auch wenn {{HTMLElement("object")}} Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Gültigkeitsnachricht gesetzt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt.

## Beispiele

Das folgende Beispiel demonstriert, dass ein `<object>` in einem ungültigen Zustand ist, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) gesetzt wurde; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity) `true` zurück, während die `validity` Eigenschaft des `validityState` `false` ist.

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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
