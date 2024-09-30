---
title: "DOMImplementation: createDocumentType() Methode"
short-title: createDocumentType()
slug: Web/API/DOMImplementation/createDocumentType
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ ApiRef("DOM")}}

Die **`DOMImplementation.createDocumentType()`** Methode gibt ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt zurück, das entweder mit [`DOMImplementation.createDocument`](/de/docs/Web/API/DOMImplementation/createDocument) bei der Dokumenterstellung verwendet werden kann oder über Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild) in das Dokument eingefügt werden kann.

## Syntax

```js-nolint
createDocumentType(qualifiedNameStr, publicId, systemId)
```

### Parameter

- `qualifiedNameStr`
  - : Ein String, der den qualifizierten Namen enthält, wie `svg:svg`.
- `publicId`
  - : Ein String, der die `PUBLIC`-Kennung enthält.
- `systemId`
  - : Ein String, der die `SYSTEM`-Kennungen enthält.

### Rückgabewert

Ein [`DocumentType`](/de/docs/Web/API/DocumentType).

## Beispiele

```js
const dt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);
const d = document.implementation.createDocument(
  "http://www.w3.org/2000/svg",
  "svg:svg",
  dt,
);
alert(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interface, zu dem es gehört.
