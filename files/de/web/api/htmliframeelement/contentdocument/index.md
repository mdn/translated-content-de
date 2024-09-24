---
title: "HTMLIFrameElement: contentDocument-Eigenschaft"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Wenn das iframe und das übergeordnete Dokument des iframes [Same Origin](/de/docs/Web/Security/Same-origin_policy) sind, wird ein [`Document`](/de/docs/Web/API/Document) zurückgegeben (also das aktive Dokument im eingebetteten Browsing-Kontext des Inline-Frames), andernfalls wird `null` zurückgegeben.

## Beispiel für contentDocument

```js
const iframeDocument = document.querySelector("iframe").contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// Dies würde das iframe blau färben.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
