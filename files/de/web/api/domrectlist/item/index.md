---
title: "DOMRectList: Methode item()"
short-title: item()
slug: Web/API/DOMRectList/item
l10n:
  sourceCommit: f8554061e8e76aaa3f08ba1b5f9b939d436f5ded
---

{{APIRef("Geometry Interfaces")}}

Die Methode [`DOMRectList`](/de/docs/Web/API/DOMRectList) `item()` gibt den [`DOMRect`](/de/docs/Web/API/DOMRect) am angegebenen Index innerhalb der Liste zurück oder `null`, wenn der Index außerhalb des gültigen Bereichs liegt.

## Syntax

```js-nolint
rectList.item(index)
```

### Parameter

- index
  - : Ein nullbasierter Ganzzahlwert, der die Position des `DOMRect` in der `DOMRectList` angibt, die abgerufen werden soll.

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
