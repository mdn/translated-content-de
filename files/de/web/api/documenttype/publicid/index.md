---
title: "DocumentType: Eigenschaft publicId"
short-title: publicId
slug: Web/API/DocumentType/publicId
l10n:
  sourceCommit: 692043ddc974d75e7b5249369b98151a446c8797
---

{{APIRef("DOM")}}

Die schreibgeschützte **`publicId`**-Eigenschaft des [`DocumentType`](/de/docs/Web/API/DocumentType) gibt einen formalen Bezeichner des Dokuments zurück.

Für synthetische `DocumentType` spiegelt diese Eigenschaft den im Parameter an [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) angegebenen Wert wider.

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
