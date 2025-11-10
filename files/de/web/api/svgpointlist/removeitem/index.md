---
title: "SVGPointList: Methode removeItem()"
short-title: removeItem()
slug: Web/API/SVGPointList/removeItem
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Die **`removeItem()`**-Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Schnittstelle entfernt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Der Index des zu entfernenden Elements.

### Rückgabewert

Das entfernte [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der übergebene Index größer ist als die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Das Element an Index `2` wird entfernt.

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
console.log(example.points.removeItem(2));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
