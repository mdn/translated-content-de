---
title: "ShadowRoot: clonable-Eigenschaft"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die **`clonable`** schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interface gibt `true` zurück, wenn das Shadow-Root klonbar ist, und `false`, andernfalls.

Wenn der Wert `true` ist, wird ein Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wurde, eine Kopie des Shadow-Roots enthalten.

Standardmäßig ist der Wert `false`.
Er kann auf `true` gesetzt werden, indem die `clonable`-Option der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) verwendet oder das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>`-Elements gesetzt wird, das verwendet wird, um ein Shadow-Root deklarativ anzuhängen.

## Wert

`true`, wenn das Shadow-Root klonbar ist, und `false`, andernfalls.

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
