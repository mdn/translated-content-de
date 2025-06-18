---
title: "DOMImplementation: createDocumentType() Methode"
short-title: createDocumentType()
slug: Web/API/DOMImplementation/createDocumentType
l10n:
  sourceCommit: 42f24862980f224148fc233823ebf30342898419
---

{{ ApiRef("DOM")}}

Die **`DOMImplementation.createDocumentType()`**-Methode gibt ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt zurück, das entweder bei der Dokumenterstellung mit [`DOMImplementation.createDocument`](/de/docs/Web/API/DOMImplementation/createDocument) verwendet oder über Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild) in das Dokument eingefügt werden kann.

## Syntax

```js-nolint
createDocumentType(name, publicId, systemId)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Doctypes, wie `html`, enthält. Entspricht der [`DocumentType.name`](/de/docs/Web/API/DocumentType/name)-Eigenschaft.
- `publicId`
  - : Ein String, der die `PUBLIC`-Kennung enthält. Entspricht der [`DocumentType.publicId`](/de/docs/Web/API/DocumentType/publicId)-Eigenschaft.
- `systemId`
  - : Ein String, der die `SYSTEM`-Kennungen enthält. Entspricht der [`DocumentType.systemId`](/de/docs/Web/API/DocumentType/systemId)-Eigenschaft.

### Rückgabewert

Ein [`DocumentType`](/de/docs/Web/API/DocumentType).

## Beispiele

```js
const dt = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);
const d = document.implementation.createDocument(
  "http://www.w3.org/2000/svg",
  "svg:svg",
  dt,
);
console.log(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle, zu der es gehört.
