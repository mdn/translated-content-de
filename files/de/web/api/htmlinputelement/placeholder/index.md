---
title: "HTMLInputElement: placeholder-Eigenschaft"
short-title: placeholder
slug: Web/API/HTMLInputElement/placeholder
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`placeholder`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}}-Schnittstelle stellt einen Hinweis für den Benutzer dar, was in das Steuerelement eingegeben werden kann. Sie spiegelt das `placeholder`-Attribut des {{htmlelement("input")}}-Elements wider.

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
- {{DOMXref("HTMLInputElement.value")}}
- {{cssxref("::placeholder")}} Pseudo-Element
- {{CSSXref(":placeholder-shown")}} Pseudo-Klasse
