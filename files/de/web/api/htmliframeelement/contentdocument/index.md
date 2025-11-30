---
title: "HTMLIFrameElement: contentDocument-Eigenschaft"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Wenn das `iframe` und das übergeordnete Dokument des `iframe` [Same Origin](/de/docs/Web/Security/Defenses/Same-origin_policy) sind, wird ein [`Document`](/de/docs/Web/API/Document) zurückgegeben (das ist das aktive Dokument im eingebetteten Browsing-Kontext des Inline-Frames), andernfalls wird `null` zurückgegeben.

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
