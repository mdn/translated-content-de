---
title: "SVGPointList: Methode removeItem()"
short-title: removeItem()
slug: Web/API/SVGPointList/removeItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`removeItem()`**-Methode des [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Interfaces entfernt einen [`point`](/de/docs/Web/API/SVGPoint) aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Der Index des zu entfernenden Elements.

### Rückgabewert

Das entfernte [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der übergebene Index größer ist als die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt eine SVG, die ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Das Element an Index `2` wird entfernt.

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
let example = document.getElementById("example");
console.log(example.points.removeItem(2));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
