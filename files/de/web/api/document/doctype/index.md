---
title: "Document: doctype-Eigenschaft"
short-title: doctype
slug: Web/API/Document/doctype
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("DOM")}}

Die **`doctype`**-Schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ist ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt, das die [Document Type Declaration (DTD)](/de/docs/Glossary/Doctype) darstellt, die mit dem aktuellen Dokument verknüpft ist.

## Wert

Ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt.

## Beispiele

```js
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
```

## Anmerkungen

Die Eigenschaft gibt `null` zurück, wenn kein DTD mit dem aktuellen Dokument verknüpft ist.

DOM Level 2 unterstützt nicht das Bearbeiten der Dokumenttyp-Deklaration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
