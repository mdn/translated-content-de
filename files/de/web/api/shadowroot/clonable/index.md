---
title: "ShadowRoot: clonable-Eigenschaft"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`clonable`**-Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle gibt `true` zurück, wenn der Shadow-Root klonbar ist, und `false` andernfalls.

Wenn der Wert `true` ist, enthält ein mit {{domxref("Node.cloneNode()")}} oder {{domxref("Document.importNode()")}} geklonter Shadow-Host eine Kopie des Shadow-Roots.

Standardmäßig ist der Wert `false`.
Er kann auf `true` gesetzt werden, indem die `clonable`-Option der {{domxref("Element.attachShadow()")}}-Methode verwendet wird oder durch Setzen des [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des `<template>`-Elements, das verwendet wird, um deklarativ einen Shadow-Root anzuhängen.

## Wert

`true`, wenn der Shadow-Root klonbar ist, und `false` andernfalls.

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

## Kompatibilität der Browser

{{Compat}}
