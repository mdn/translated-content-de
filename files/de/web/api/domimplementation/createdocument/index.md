---
title: "DOMImplementation: createDocument()-Methode"
short-title: createDocument()
slug: Web/API/DOMImplementation/createDocument
l10n:
  sourceCommit: 9f4a82ea0e441b13c86acd0a75076b9f9c2d3701
---

{{ApiRef("DOM")}}

Die **`DOMImplementation.createDocument()`**-Methode erstellt und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

## Syntax

```js-nolint
createDocument(namespaceURI, qualifiedName)
createDocument(namespaceURI, qualifiedName, documentType)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace-URI des zu erstellenden Dokuments enthält, oder `null`, wenn das Dokument zu keinem Namespace gehört.
- `qualifiedName`
  - : Ein String, der den qualifizierten Namen enthält, also ein optionales Präfix und ein Doppelpunkt sowie den lokalen Namen des Root-Elements des zu erstellenden Dokuments. Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie ein leerer String (`""`) behandelt.
- `documentType` {{optional_inline}}
  - : Der [`DocumentType`](/de/docs/Web/API/DocumentType) des zu erstellenden Dokuments. Standardmäßig `null`.

### Rückgabewert

Das neu erstellte [`XMLDocument`](/de/docs/Web/API/XMLDocument).

## Beispiele

```js
const doc = document.implementation.createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null,
);
const body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [object HTMLBodyElement]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle, zu der sie gehört.
