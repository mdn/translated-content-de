---
title: "SVGPathElement: getPathData() Methode"
short-title: getPathData()
slug: Web/API/SVGPathElement/getPathData
l10n:
  sourceCommit: 1eab2ca7fd2a7a1cf9e7aab058854c33326c8c40
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`SVGPathElement.getPathData()`** Methode gibt die Sequenz von Pfadsegmenten zurück, die den Pfaddaten entspricht und optional die Werte und Segmenttypen normalisiert.

## Syntax

```js-nolint
getPathData()
getPathData(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt zur Steuerung von Aspekten des Abrufprozesses der Pfaddaten. Dieses Objekt kann folgende Eigenschaften enthalten:

    - `normalize` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die zurückgegebene Sequenz von Pfadsegmenten in den Basissatz der [absoluten Befehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) (`'M'`, `'L'`, `'C'` und `'Z'`) umgewandelt wird, wobei die Werte entsprechend angepasst werden.

### Rückgabewert

Ein Array von Pfadsegmenten, das den Pfaddaten entspricht. Wenn keine gültigen Pfaddaten vorhanden sind, wird eine leere Sequenz zurückgegeben.

Jedes Pfadsegment ist ein Objekt mit den folgenden Eigenschaften:

- `type`
  - : Ein [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).
    Wenn [`options.normalize`](#normalize) wahr ist, wird dies einer der absoluten Befehle sein: `'M'`, `'L'`, `'C'` und `'Z'`.
- `values`
  - : Ein Array oder Wert, der die Parameter für den entsprechenden Befehl enthält.

## Beispiele

### Pfaddaten abrufen

Betrachten Sie das folgende `<path>` Element, das ein Quadrat zeichnet:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

Die `getPathData()` Methode wird ein Array mit den rohen Pfaddaten zurückgeben, genau so, wie es im `d` Attribut gesetzt ist. Mit der `normalize: true` Option eingestellt, wird es Pfaddaten zurückgeben, die auf den Basissatz der Pfadbefehl normalisiert sind:

```js
const path = document.querySelector("path");

console.log(path.getPathData());

// Output: raw path data:
// [
//   { type: "M", values: [0, 0] },
//   { type: "h", values: [64] },
//   { type: "v", values: [64] },
//   { type: "h", values: [-64] },
//   { type: "Z", values: [] }
// ]

console.log(path.getPathData({ normalize: true }));

// Output: normalized path data:
// [
//   { type: "M", values: [0, 0] },
//   { type: "L", values: [64, 0] },
//   { type: "L", values: [64, 64] },
//   { type: "L", values: [0, 64] },
//   { type: "Z", values: [] }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
