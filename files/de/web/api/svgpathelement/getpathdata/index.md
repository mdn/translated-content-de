---
title: "SVGPathElement: getPathData()-Methode"
short-title: getPathData()
slug: Web/API/SVGPathElement/getPathData
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`SVGPathElement.getPathData()`**-Methode gibt die Sequenz von Pfadsegmenten zurück, die den Pfaddaten entspricht, wobei die Werte und Segmenttypen optional normalisiert werden.

## Syntax

```js-nolint
getPathData()
getPathData(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Aspekte des Pfaddatenabrufprozesses steuert. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `normalize` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die zurückgegebene Sequenz von Pfadsegmenten in den Basissatz von [absoluten Befehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) (`'M'`, `'L'`, `'C'` und `'Z'`) umgewandelt werden soll, wobei die Werte entsprechend angepasst werden.

### Rückgabewert

Ein Array von Pfadsegmenten, die den Pfaddaten entsprechen. Wenn keine gültigen Pfaddaten existieren, wird eine leere Sequenz zurückgegeben.

Jedes Pfadsegment ist ein Objekt mit den folgenden Eigenschaften:

- `type`
  - : Ein [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).
    Wenn [`options.normalize`](#normalize) wahr ist, wird dies einer der absoluten Befehle: `'M'`, `'L'`, `'C'` und `'Z'` sein.
- `values`
  - : Ein Array oder Wert, der die Parameter für den entsprechenden Befehl enthält.

## Beispiele

### Pfaddaten abrufen

Betrachten Sie das folgende `<path>`-Element, das ein Quadrat zeichnet:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

Die `getPathData()`-Methode gibt ein Array mit den rohen Pfaddaten zurück, wie sie im `d`-Attribut gesetzt sind. Mit der Option `normalize: true` werden die Pfaddaten normalisiert auf den Basissatz von Pfadbefehlen zurückgegeben:

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
