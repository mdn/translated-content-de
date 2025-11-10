---
title: "HTMLOutputElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`validity`**-Eigenschaft der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurückgibt. Dieses Objekt repräsentiert die Gültigkeitszustände, in denen sich dieses Element befindet. Obwohl {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Fehlermeldung festgelegt wurde.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<output>` sich in einem ungültigen Zustand befindet, wenn ein [`customError`](/de/docs/Web/API/ValidityState/customError) festgelegt ist; in diesem Zustand gibt [`checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity) `true` zurück, während die `validityState`-Eigenschaft `validity` auf `false` steht.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
