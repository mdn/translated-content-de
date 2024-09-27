---
title: "HTMLIFrameElement: contentDocument-Eigenschaft"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Wenn das `iframe`-Element und das übergeordnete Dokument des `iframe` [Same Origin](/de/docs/Web/Security/Same-origin_policy) sind, wird ein [`Document`](/de/docs/Web/API/Document) zurückgegeben (das heißt, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames), andernfalls wird `null` zurückgegeben.

## Beispiel für contentDocument

```js
const iframeDocument = document.querySelector("iframe").contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// This would turn the iframe blue.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
