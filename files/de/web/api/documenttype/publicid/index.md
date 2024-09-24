---
title: "DocumentType: Eigenschaft publicId"
short-title: publicId
slug: Web/API/DocumentType/publicId
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`publicId`**-Eigenschaft des {{domxref("DocumentType")}} gibt einen formalen Bezeichner des Dokuments zurück.

Für synthetische `DocumentType` spiegelt diese Eigenschaft den im Parameter übergebenen Wert an {{domxref("DOMImplementation.createDocumentType()")}} wider.

Bei HTML-Dokumenten setzen Browser diesen Wert immer auf `html`, unabhängig davon, welches tatsächliche `doctype` im Quellcode angegeben ist. Bei SVG-Dokumenten kann es beispielsweise `"-//W3C//DTD SVG 1.1//EN"` sein.

## Wert

Ein String.

## Beispiele

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/2000/svg",
);

console.log(docType.publicId); // Gibt "-//W3C//DTD SVG 1.1//EN" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
