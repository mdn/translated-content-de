---
title: "DocumentType: systemId Eigenschaft"
short-title: systemId
slug: Web/API/DocumentType/systemId
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`systemId`**-Eigenschaft von [`DocumentType`](/de/docs/Web/API/DocumentType) liefert die URL der zugehörigen DTD zurück.

Für synthetische `DocumentType` spiegelt diese Eigenschaft den Wert wider, der als Parameter an [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) übergeben wird.

Bei HTML-Dokumenten setzen Browser sie immer auf `html`, unabhängig vom tatsächlichen `doctype` im Quellcode. Bei SVG-Dokumenten kann sie zum Beispiel `"http://www.w3.org/2000/svg"` sein.

## Wert

Ein String.

## Beispiele

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "",
  "http://www.w3.org/2000/svg",
);

console.log(docType.systemId); // Displays "http://www.w3.org/2000/svg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
