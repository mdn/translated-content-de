---
title: "Dokument: doctype-Eigenschaft"
short-title: doctype
slug: Web/API/Document/doctype
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`doctype`**-Eigenschaft des {{domxref("Document")}}-Interfaces ist ein {{domxref("DocumentType")}}-Objekt, das die mit dem aktuellen Dokument verbundene {{glossary("Doctype", "Dokumenttyperklärung (DTD)")}} darstellt.

## Wert

Ein {{domxref("DocumentType")}}-Objekt.

## Beispiele

```js
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
```

## Hinweise

Die Eigenschaft gibt `null` zurück, wenn kein DTD mit dem aktuellen Dokument verbunden ist.

DOM Level 2 unterstützt keine Bearbeitung der Dokumenttyperklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
