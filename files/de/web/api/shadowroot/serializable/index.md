---
title: "ShadowRoot: eigenschaft serializable"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft **`serializable`** des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt `true` zurück, wenn das Shadow-Root serialisierbar ist.

Wenn gesetzt, kann das Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert werden, wobei der Parameter `options.serializableShadowRoots` auf `true` gesetzt ist.

Die serializable Eigenschaft eines Shadow-Roots wird beim Erstellen des Shadow-Roots festgelegt, entweder deklarativ durch Hinzufügen des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs an ein `<template>`-Element (zusammen mit einem zulässigen [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Wert) oder durch Setzen des [`options.serializable`](/de/docs/Web/API/Element/attachShadow#serializable)-Parameters auf `true` bei der Verwendung von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).

## Wert

`true`, wenn das Shadow-Root serialisierbar ist; `false` ansonsten.

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
