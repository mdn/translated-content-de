---
title: "DocumentType: Methode replaceWith()"
short-title: replaceWith()
slug: Web/API/DocumentType/replaceWith
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`replaceWith()`** der Schnittstelle [`DocumentType`](/de/docs/Web/API/DocumentType) ersetzt dieses `DocumentType` in der Liste der Kindknoten seines Elternknotens durch eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### `replaceWith()` verwenden

```js
const svgDt = document.implementation.createDocumentType(
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
