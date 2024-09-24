---
title: "HTMLAnchorElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.href`**-Eigenschaft ist ein
{{Glossary("stringifier")}}, der einen Zeichenfolgenwert zurückgibt, der die gesamte URL enthält, und ermöglicht es, das href zu aktualisieren.

## Wert

Ein Zeichenkette.

## Beispiele

```js
// Ein <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> Element ist im Dokument
const anchor = document.getElementById("myAnchor");
anchor.href; // gibt 'https://developer.mozilla.org/en-US/HTMLAnchorElement' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("HTMLAnchorElement")}}-Schnittstelle, zu der es gehört.
