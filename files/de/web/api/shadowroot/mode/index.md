---
title: "ShadowRoot: mode-Eigenschaft"
short-title: mode
slug: Web/API/ShadowRoot/mode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die **`mode`** schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) spezifiziert ihren Modus — entweder `open` oder `closed`.
Dies definiert, ob die internen Merkmale des Shadow-Roots von JavaScript zugänglich sind oder nicht.

Wenn der `mode` eines Shadow-Roots `"closed"` ist, sind die Implementierungsdetails des Shadow-Roots von JavaScript aus nicht zugänglich und unveränderbar – auf die gleiche Weise, wie die Implementierungsdetails beispielsweise des {{HTMLElement("video")}}-Elements von JavaScript aus nicht zugänglich und unveränderbar sind.

Der Eigenschaftswert wird mit der `options.mode`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder unter Verwendung des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

Ein String-Wert, der entweder einen der folgenden Werte haben kann:

- `open`
  - : Elemente des Shadow-Roots sind von JavaScript außerhalb des Roots zugänglich.
- `closed`
  - : Knoten innerhalb des geschlossenen Shadow-Baums können von JavaScript außerhalb des Roots nicht abgerufen werden.

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
