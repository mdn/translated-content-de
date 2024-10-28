---
title: "DocumentType: systemId-Eigenschaft"
short-title: systemId
slug: Web/API/DocumentType/systemId
l10n:
  sourceCommit: 692043ddc974d75e7b5249369b98151a446c8797
---

{{APIRef("DOM")}}

Die schreibgeschützte **`systemId`**-Eigenschaft des [`DocumentType`](/de/docs/Web/API/DocumentType) gibt die URL der zugehörigen DTD zurück.

Bei synthetischen `DocumentType`-Objekten spiegelt diese Eigenschaft den im Parameter an [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) übergebenen Wert wider.

## Wert

Ein Zeichenkette.

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
