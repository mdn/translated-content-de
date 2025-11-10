---
title: "ShadowRoot: serializable-Eigenschaft"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`serializable`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt `true` zurück, wenn der Shadow-Root serialisierbar ist.

Wenn gesetzt, kann der Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt serialisiert werden.

Die `serializable`-Eigenschaft eines Shadow-Roots wird beim Erstellen des Shadow-Roots festgelegt, entweder deklarativ durch Hinzufügen des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs auf einem `<template>`-Element (zusammen mit einem erlaubten [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Wert) oder durch Setzen des [`options.serializable`](/de/docs/Web/API/Element/attachShadow#serializable)-Parameters auf `true`, wenn [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) verwendet wird.

## Wert

`true`, wenn der Shadow-Root serialisierbar ist; andernfalls `false`.

## Beispiele

```js
const customElem = document.querySelector("my-shadow-dom-element");
const shadow = customElem.shadowRoot;

// …

// Is it serializable?
const hostElem = shadow.serializable;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
