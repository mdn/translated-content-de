---
title: "ShadowRoot: serialisierbare Eigenschaft"
short-title: serialisierbar
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Shadow DOM")}}

Die **`serializable`** schreibgeschützte Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle gibt `true` zurück, wenn der Shadow Root serialisierbar ist.

Wenn gesetzt, kann der Shadow Root serialisiert werden, indem die {{DOMxRef('Element.getHTML()')}} oder {{DOMxRef('ShadowRoot.getHTML()')}}-Methoden mit dem Parameter `options.serializableShadowRoots` auf `true` aufgerufen werden.

Die serialisierbare Eigenschaft eines Shadow Roots wird festgelegt, wenn der Shadow Root erstellt wird, entweder deklarativ durch Hinzufügen des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributs auf einem `<template>`-Element (zusammen mit einem zulässigen [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Wert), oder durch Setzen des [`options.serializable`](/de/docs/Web/API/Element/attachShadow#serializable)-Parameters auf `true` bei der Verwendung von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).

## Wert

`true`, wenn der Shadow Root serialisierbar ist; `false` andernfalls.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Ist er serialisierbar?
let hostElem = shadow.serializable;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
