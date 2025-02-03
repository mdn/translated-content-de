---
title: "DOMRectList: die Methode item()"
short-title: item()
slug: Web/API/DOMRectList/item
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}

Die [`DOMRectList`](/de/docs/Web/API/DOMRectList)-Methode
`item()` gibt das [`DOMRect`](/de/docs/Web/API/DOMRect) an dem angegebenen Index in der Liste zurück oder `null`, wenn der Index außerhalb des Bereichs liegt.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Ein nullbasierter Ganzzahlwert, der die Position des abzurufenden `DOMRect` in der `DOMRectList` darstellt.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt am angegebenen Index in der `DOMRectList`, oder null, wenn der Index größer oder gleich der Anzahl der Rechtecke in der Liste ist.

## Beispiel

```js
const rects = document.getElementById("rects").getClientRects();
console.log(rects.length); // Number of rectangles in the DOMRectList

if (rects.length > 0) {
  console.log(rects.item(0)); // Logs the first DOMRect object
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
