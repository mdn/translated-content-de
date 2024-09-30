---
title: "DocumentType: publicId-Eigenschaft"
short-title: publicId
slug: Web/API/DocumentType/publicId
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`publicId`**-Eigenschaft des [`DocumentType`](/de/docs/Web/API/DocumentType) liefert einen formalen Bezeichner des Dokuments zurück.

Bei synthetischen `DocumentType` spiegelt diese Eigenschaft den im Parameter von [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) angegebenen Wert wider.

Bei HTML-Dokumenten setzen Browser diesen immer auf `html`, unabhängig davon, welches tatsächliche `doctype` im Quellcode vorhanden ist. Bei SVG-Dokumenten kann es beispielsweise `"-//W3C//DTD SVG 1.1//EN"` sein.

## Wert

Ein String.

## Beispiele

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/2000/svg",
);

console.log(docType.publicId); // Displays "-//W3C//DTD SVG 1.1//EN"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
