---
title: "ShadowRoot: serializable Eigenschaft"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Shadow DOM")}}

Die **`serializable`** schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interfaces gibt `true` zurück, wenn der Shadow-Root serialisierbar ist.

Wenn gesetzt, kann der Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.

Die serializable Eigenschaft eines Shadow-Roots wird beim Erstellen des Shadow-Roots spezifiziert, entweder deklarativ durch Hinzufügen des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable) Attributs zu einem `<template>` Element (zusammen mit einem erlaubten [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) Wert) oder durch Setzen des [`options.serializable`](/de/docs/Web/API/Element/attachShadow#serializable) Parameters auf `true`, wenn [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) verwendet wird.

## Wert

`true`, wenn der Shadow-Root serialisierbar ist; andernfalls `false`.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Is it serializable?
let hostElem = shadow.serializable;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
