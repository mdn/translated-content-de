---
title: "DOMImplementation: Methode createDocumentType()"
short-title: createDocumentType()
slug: Web/API/DOMImplementation/createDocumentType
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ ApiRef("DOM")}}

Die **`DOMImplementation.createDocumentType()`**-Methode gibt ein {{domxref("DocumentType")}}-Objekt zurück, das entweder mit {{domxref("DOMImplementation.createDocument")}} bei der Dokumentenerstellung verwendet werden kann oder über Methoden wie {{domxref("Node.insertBefore()")}} oder {{domxref("Node.replaceChild()")}} in das Dokument eingefügt werden kann.

## Syntax

```js-nolint
createDocumentType(qualifiedNameStr, publicId, systemId)
```

### Parameter

- `qualifiedNameStr`
  - : Ein String, der den qualifizierten Namen enthält, wie `svg:svg`.
- `publicId`
  - : Ein String, der den `PUBLIC`-Bezeichner enthält.
- `systemId`
  - : Ein String, der die `SYSTEM`-Bezeichner enthält.

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

- Das {{domxref("DOMImplementation")}}-Interface, zu dem es gehört.
