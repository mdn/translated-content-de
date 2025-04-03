---
title: "SVGPathElement: getPathSegmentAtLength() Methode"
short-title: getPathSegmentAtLength()
slug: Web/API/SVGPathElement/getPathSegmentAtLength
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`getPathSegmentAtLength()`** Methode des [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Interfaces gibt das Pfadsegment in einer angegebenen Entfernung entlang des Pfades zurück.

## Syntax

```js-nolint
getPathSegmentAtLength(distance)
```

### Parameter

- `distance`

  - : Eine Zahl, die die Entfernung entlang des Pfades angibt.

### Rückgabewert

Ein Pfadsegmentobjekt. Wenn kein gültiges Segment existiert, wird null zurückgegeben.

Das Segmentsobjekt hat die folgenden Eigenschaften:

- `type`
  - : Ein [Pfad-Befehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).
- `values`
  - : Ein Array oder Wert, der die Parameter für den entsprechenden Befehl enthält.

## Beispiele

### Pfadsegment abrufen

Betrachten Sie das folgende `<path>`-Element, das ein Quadrat zeichnet:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

Die `getPathSegmentAtLength()` Methode wird ein Objekt zurückgeben, das das `v64` Segment darstellt, welches 65px entlang des Pfades liegt:

```js
const path = document.querySelector("path");

console.log(path.getPathSegmentAtLength(65));

// Output: path segment
// {
//   type: "v",
//   values: [64]
// }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
