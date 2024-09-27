---
title: "ShadowRoot: serializable-Eigenschaft"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Shadow DOM")}}

Die **`serializable`** schreibgeschützte Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt `true` zurück, wenn die Shadow-Root serialisierbar ist.

Falls gesetzt, kann die Shadow-Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.

Die serializable-Eigenschaft einer Shadow-Root wird festgelegt, wenn die Shadow-Root erstellt wird, entweder deklarativ durch Hinzufügen des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributs auf einem `<template>`-Element (zusammen mit einem erlaubten [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Wert) oder durch Setzen des [`options.serializable`](/de/docs/Web/API/Element/attachShadow#serializable)-Parameters auf `true` bei der Nutzung von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).

## Wert

`true`, wenn die Shadow-Root serialisierbar ist; `false` andernfalls.

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
