---
title: "DocumentType: replaceWith()-Methode"
short-title: replaceWith()
slug: Web/API/DocumentType/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`DocumentType.replaceWith()`**-Methode ersetzt den Dokumenttyp durch eine Menge gegebener Knoten.

## Syntax

```js-nolint
replaceWith(node1)
replaceWith(node1, node2)
replaceWith(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Menge von Knoten, mit der der [`DocumentType`](/de/docs/Web/API/DocumentType) ersetzt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Verwendung von `replaceWith()`

```js
let svg_dt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);

document.doctype.replaceWith(svg_dt);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
