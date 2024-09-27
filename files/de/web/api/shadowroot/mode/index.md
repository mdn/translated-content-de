---
title: "ShadowRoot: mode-Eigenschaft"
short-title: mode
slug: Web/API/ShadowRoot/mode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Shadow DOM")}}

Die **`mode`** Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), die nur gelesen werden kann, gibt ihren Modus an — entweder `open` oder `closed`.
Dies definiert, ob die internen Merkmale des Shadow Roots von JavaScript aus zugänglich sind oder nicht.

Wenn der `mode` eines Shadow Roots `"closed"` ist, sind die internen Implementierungsdetails des Shadow Roots von JavaScript aus nicht zugänglich und unveränderlich — auf die gleiche Weise, wie die Implementierungsdetails des beispielsweise {{HTMLElement("video")}} Elements von JavaScript aus nicht zugänglich und unveränderlich sind.

Der Eigenschaftswert wird mithilfe der `options.mode` Eigenschaft des Objekts festgelegt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder mithilfe des [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) Attributs des [`<template>`](/de/docs/Web/HTML/Element/template) Elements, wenn ein Shadow Root deklarativ erstellt wird.

## Wert

Ein Zeichenfolgenwert, der einen der folgenden Werte haben kann:

- `open`
  - : Elemente des Shadow Roots sind von JavaScript außerhalb des Roots zugänglich.
- `closed`
  - : Knoten innerhalb des geschlossenen Shadow Trees können von JavaScript außerhalb des Roots nicht erreicht werden.

## Beispiele

```js
// We create a closed shadow root, that is not accessible
let element = document.createElement("div");
element.attachShadow({ mode: "closed" });
element.shadowRoot; // null as the shadow root is closed

// We create an open shadow root, that is accessible
let element2 = document.createElement("div");
element2.attachShadow({ mode: "open" });
console.log(`The shadow is ${element2.shadowRoot.mode}`); // logs "The shadow is open"
element2.shadowRoot.textContent("Opened shadow"); // The shadow is open, we can access it from outside
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
