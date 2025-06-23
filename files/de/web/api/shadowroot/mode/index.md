---
title: "ShadowRoot: mode-Eigenschaft"
short-title: mode
slug: Web/API/ShadowRoot/mode
l10n:
  sourceCommit: ff02a2cb7f5c5cf2ddb623c3f52bbc1ed92ac4b3
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`mode`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gibt den Modus an – entweder `open` oder `closed`. Dies definiert, ob die internen Merkmale des Shadow Roots von JavaScript aus zugänglich sind oder nicht.

Wenn der `mode` eines Shadow Roots `"closed"` ist, sind die Implementierungsinternas des Shadow Roots von JavaScript aus nicht zugänglich und unveränderlich – genauso wie die Implementierungsinternas des z. B. {{HTMLElement("video")}}-Elements von JavaScript aus nicht zugänglich und unveränderlich sind.

Der Eigenschaftswert wird mithilfe der `mode`-Eigenschaft des Objekts festgelegt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder mithilfe des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements, wenn ein Shadow Root deklarativ erstellt wird.

## Wert

Ein String-Wert, der entweder der folgende sein kann:

- `open`
  - : Elemente des Shadow Roots sind von JavaScript außerhalb des Roots zugänglich.
- `closed`
  - : Knoten innerhalb des geschlossenen Shadow Trees können von JavaScript außerhalb des Roots nicht angesprochen werden.

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
