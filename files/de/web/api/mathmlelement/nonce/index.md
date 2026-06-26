---
title: "MathMLElement: nonce-Eigenschaft"
short-title: nonce
slug: Web/API/MathMLElement/nonce
l10n:
  sourceCommit: bfec9e17373a24d6c70cc52fad82719b811e7985
---

{{APIRef("MathML")}}

Die **`nonce`**-Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle gibt den {{Glossary("Nonce", "nonce")}} zurück, der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.

## Wert

Ein String; der kryptografische nonce, oder ein leerer String, wenn kein nonce gesetzt ist.

## Beispiele

### Abrufen eines nonce-Werts

```js
const math = document.querySelector("math");
console.log(math.nonce);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce) eine ähnliche Eigenschaft für HTML-Elemente.
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce) eine ähnliche Eigenschaft für SVG-Elemente.
- [`nonce` globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
