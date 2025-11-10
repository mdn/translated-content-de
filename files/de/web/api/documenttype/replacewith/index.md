---
title: "DocumentType: replaceWith() Methode"
short-title: replaceWith()
slug: Web/API/DocumentType/replaceWith
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die **`DocumentType.replaceWith()`** Methode ersetzt den Dokumenttyp durch eine Gruppe gegebener Knoten.

## Syntax

```js-nolint
replaceWith(node1)
replaceWith(node1, node2)
replaceWith(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Gruppe von Knoten, durch die der [`DocumentType`](/de/docs/Web/API/DocumentType) ersetzt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Verwendung von `replaceWith()`

```js
let svgDt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);

document.doctype.replaceWith(svgDt);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
