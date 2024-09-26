---
title: "HTMLTemplateElement: content-Eigenschaft"
short-title: content
slug: Web/API/HTMLTemplateElement/content
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("Web Components")}}

Die **`HTMLTemplateElement.content`**-Eigenschaft gibt den Inhalt eines `<template>`-Elements zurück (ein {{domxref("DocumentFragment")}}).

## Wert

Ein {{domxref("DocumentFragment")}}.

## Beispiele

```js
const templateElement = document.querySelector("#foo");
const documentFragment = templateElement.content.cloneNode(true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTemplateElement")}}