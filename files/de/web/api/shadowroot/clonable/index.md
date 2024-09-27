---
title: "ShadowRoot: clonable-Eigenschaft"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`clonable`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt `true` zurück, wenn der Shadow-Root klonbar ist, und `false` andernfalls.

Wenn der Wert `true` ist, enthält ein mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklonter Shadow-Host eine Kopie des Shadow-Roots.

Standardmäßig ist der Wert `false`.
Er kann auf `true` gesetzt werden, indem die Option `clonable` der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) oder durch Setzen des Attributes [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable) im `<template>`-Element gesetzt wird, das verwendet wird, um einen Shadow-Root deklarativ anzufügen.

## Wert

`true` wenn der Shadow-Root klonbar ist, und `false` andernfalls.

## Beispiele

```js
const host = document.createElement("div");
const shadowRoot = host.attachShadow({
  mode: "open",
  clonable: true,
});

shadowRoot.clonable;
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
