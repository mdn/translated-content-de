---
title: "DocumentType: systemId-Eigenschaft"
short-title: systemId
slug: Web/API/DocumentType/systemId
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`systemId`**-Eigenschaft des [`DocumentType`](/de/docs/Web/API/DocumentType) gibt die URL des zugehörigen DTD zurück.

Für synthetische `DocumentType`-Objekte spiegelt diese Eigenschaft den im Parameter von [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) angegebenen Wert wider.

Bei HTML-Dokumenten setzen Browser diesen Wert immer auf `html`, unabhängig davon, was tatsächlich im `doctype` des Quellcodes steht. Bei SVG-Dokumenten kann es beispielsweise `"http://www.w3.org/2000/svg"` sein.

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
