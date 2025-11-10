---
title: "HTMLInputElement: placeholder-Eigenschaft"
short-title: placeholder
slug: Web/API/HTMLInputElement/placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`placeholder`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces stellt einen Hinweis für den Benutzer dar, was in das Steuerelement eingegeben werden kann. Sie spiegelt das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des {{htmlelement("input")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("phone");
console.log(input.placeholder);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- {{cssxref("::placeholder")}} Pseudoelement
- {{CSSXref(":placeholder-shown")}} Pseudoklasse
