---
title: "SVGPathElement: getPathSegmentAtLength()-Methode"
short-title: getPathSegmentAtLength()
slug: Web/API/SVGPathElement/getPathSegmentAtLength
l10n:
  sourceCommit: fb9772a0d8736488b647ce192f9c6465e1e2cf3a
---

{{APIRef("SVG")}}

Die **`getPathSegmentAtLength()`**-Methode der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle gibt das Pfadsegment an einer bestimmten Entfernung entlang des Pfades zurück.

## Syntax

```js-nolint
getPathSegmentAtLength(distance)
```

### Parameter

- `distance`

  - : Eine Zahl, die die Entfernung entlang des Pfades angibt.

### Rückgabewert

Ein Pfadsegmentobjekt. Wenn kein gültiges Segment existiert, wird null zurückgegeben.

Das Segmentobjekt hat die folgenden Eigenschaften:

- `type`
  - : Ein [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).
- `values`
  - : Ein Array oder Wert, der die Parameter für den entsprechenden Befehl enthält.

## Beispiele

### Pfadsegment erhalten

Betrachten Sie das folgende `<path>`-Element, das ein Quadrat zeichnet:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

Die `getPathSegmentAtLength()`-Methode wird ein Objekt zurückgeben, das das `v64`-Segment repräsentiert, das 65px entlang des Pfades liegt:

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
