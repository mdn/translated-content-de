---
title: "HTMLOutputElement: Gültigkeitseigenschaft"
short-title: Gültigkeit
slug: Web/API/HTMLOutputElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft der {{domxref("HTMLOutputElement")}}-Schnittstelle gibt ein {{domxref("ValidityState")}}-Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet. Obwohl {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Anforderungsgültigkeitsprüfung](/de/docs/Web/HTML/Constraint_validation) sind, kann der Gültigkeitszustand dennoch ungültig sein, wenn eine benutzerdefinierte Gültigkeitsmeldung festgelegt wurde.

## Wert

Ein {{domxref("ValidityState")}}-Objekt.

## Beispiele

Das folgende Beispiel zeigt, dass ein `<output>` in einem ungültigen Zustand ist, wenn ein {{domxref("ValidityState/customError", "customError")}} festgelegt ist; in diesem Zustand gibt {{domxref("HTMLOutputElement/checkValidity", "checkValidity()")}} `true` zurück, während die `validity`-Eigenschaft von `validityState` `false` ist.

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

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Anforderungsgültigkeitsprüfung](/de/docs/Web/HTML/Constraint_validation)
