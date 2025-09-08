---
title: "ShadowRoot: mode-Eigenschaft"
short-title: mode
slug: Web/API/ShadowRoot/mode
l10n:
  sourceCommit: 4e2a9fb782fc314d8cc71dc93d8b31bdf4a4c3d6
---

{{APIRef("Shadow DOM")}}

Die **`mode`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ist eine schreibgeschützte Eigenschaft, die den Modus angibt — entweder `open` oder `closed`. Dies definiert, ob die internen Features des Shadow Roots von JavaScript aus zugänglich sind oder nicht.

Wenn der `mode` eines Shadow Roots auf `"closed"` gesetzt ist, sind die Implementierungsdetails des Shadow Roots von JavaScript aus unzugänglich und unveränderlich — ebenso wie die Implementierungsdetails von beispielsweise dem {{HTMLElement("video")}}-Element von JavaScript aus unzugänglich und unveränderlich sind.

Der Eigenschaftswert wird mit der `mode`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements, wenn ein Shadow Root deklarativ erstellt wird.

## Wert

Ein String-Wert, der einen der folgenden Werte haben kann:

- `open`
  - : Elemente des Shadow Roots sind von JavaScript außerhalb des Roots aus zugänglich.
- `closed`
  - : Knoten im geschlossenen Shadow-Baum können von JavaScript außerhalb des Roots nicht zugegriffen werden.

## Beispiele

```js
// We create a closed shadow root, that is not accessible
let element = document.createElement("div");
element.attachShadow({ mode: "closed" });
console.log(element.shadowRoot); // logs null as the shadow root is closed

// We create an open shadow root, that is accessible
let element2 = document.createElement("div");
element2.attachShadow({ mode: "open" });
console.log(`The shadow is ${element2.shadowRoot.mode}`); // logs "The shadow is open"
element2.shadowRoot.textContent = "Opened shadow"; // The shadow is open, we can access it from outside
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
