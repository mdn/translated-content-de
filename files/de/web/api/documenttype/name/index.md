---
title: "DocumentType: name-Eigenschaft"
short-title: name
slug: Web/API/DocumentType/name
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`name`**-Eigenschaft des [`DocumentType`](/de/docs/Web/API/DocumentType) gibt den Typ des Dokuments zurück.

Für synthetische `DocumentType` spiegelt diese Eigenschaft den im Parameter an [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) angegebenen Wert wider.

Für HTML-Dokumente setzen Browser sie immer auf `html`, unabhängig von dem tatsächlichen `doctype` im Quellcode.

## Wert

Ein String.

## Beispiele

```js
const docType = document.implementation.createDocumentType("html", "", "");

console.log(docType.name); // Displays `html`
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
