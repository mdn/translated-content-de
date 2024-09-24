---
title: "DocumentType: Methode replaceWith()"
short-title: replaceWith()
slug: Web/API/DocumentType/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`DocumentType.replaceWith()`**-Methode ersetzt den Dokumenttyp mit einer Reihe von angegebenen Knoten.

## Syntax

```js-nolint
replaceWith(node1)
replaceWith(node1, node2)
replaceWith(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Reihe von Knoten, mit denen der {{domxref("DocumentType")}} ersetzt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

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

- {{domxref("CharacterData.replaceWith()")}}
- {{domxref("Element.replaceWith()")}}
- {{domxref("CharacterData.replaceWith()")}}
