---
title: "HTMLIFrameElement: Eigenschaft contentDocument"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`contentDocument`** der Schnittstelle [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) gibt ein [`Document`](/de/docs/Web/API/Document) zurück (das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames), wenn der iframe und das übergeordnete Dokument des iframe denselben Ursprung haben ([Same Origin](/de/docs/Web/Security/Defenses/Same-origin_policy)). Andernfalls gibt sie `null` zurück.

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
