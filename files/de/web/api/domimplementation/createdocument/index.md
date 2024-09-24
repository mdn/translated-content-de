---
title: "DOMImplementation: createDocument()-Methode"
short-title: createDocument()
slug: Web/API/DOMImplementation/createDocument
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{ApiRef("DOM")}}

Die **`DOMImplementation.createDocument()`**-Methode erstellt und gibt ein {{domxref("XMLDocument")}} zurück.

## Syntax

```js-nolint
createDocument(namespaceURI, qualifiedName)
createDocument(namespaceURI, qualifiedName, documentType)
```

### Parameter

- `namespaceURI`
  - : Ein String, der die Namespace-URI des zu erstellenden Dokuments enthält, oder `null`, wenn das Dokument zu keinem gehört.
- `qualifiedName`
  - : Ein String, der den qualifizierten Namen enthält, das heißt ein optionales Präfix und Doppelpunkt plus den lokalen Namen des Wurzelelements des zu erstellenden Dokuments. Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie der leere String (`""`) behandelt.
- `documentType` {{optional_inline}}
  - : Ist der {{domxref("DocumentType")}} des zu erstellenden Dokuments. Er standardmäßig `null`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

- Das {{domxref("DOMImplementation")}}-Interface, zu dem es gehört.
