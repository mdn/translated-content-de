---
title: "SVGPointList: Methode replaceItem()"
short-title: replaceItem()
slug: Web/API/SVGPointList/replaceItem
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die Methode **`replaceItem()`** des Interfaces [`SVGPointList`](/de/docs/Web/API/SVGPointList) ersetzt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) in der Liste.

Die Zuweisung zu einem Index der Liste hat denselben Effekt wie der Aufruf dieser Methode, mit Ausnahme, dass kein Rückgabewert vorhanden ist.

## Syntax

```js-nolint
replaceItem(obj, index)
```

### Parameter

- `obj`
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das die Koordinaten des einzufügenden Punkts enthält.
- `index`
  - : Der Index des zu ersetzenden Elements.

### Rückgabewert

Das neue [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der übergebene Index größer ist als die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neuer [`DOMPoint`](/de/docs/Web/API/DOMPoint) wird erstellt und ersetzt dann den Punkt am Index `1` (das zweite Element in der Liste).

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
const example = document.getElementById("example");
const point = document.getElementById("svg").createSVGPoint();
point.y = 10;
point.x = 10;
console.log(example.points.replaceItem(point, 1));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
