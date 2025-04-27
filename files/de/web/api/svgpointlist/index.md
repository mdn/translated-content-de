---
title: SVGPointList
slug: Web/API/SVGPointList
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("SVG")}}

Das **`SVGPointList`**-Interface repräsentiert eine Liste von [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekten.

Eine `SVGPointList` kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einem Auslösen einer Ausnahme führen.

## Instanz-Eigenschaften

- [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.
- [`SVGPointList.numberOfItems`](/de/docs/Web/API/SVGPointList/numberOfItems) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.

## Instanz-Methoden

- [`SVGPointList.clear()`](/de/docs/Web/API/SVGPointList/clear)
  - : Entfernt alle Elemente in der Liste.
- [`SVGPointList.initialize()`](/de/docs/Web/API/SVGPointList/initialize)
  - : Entfernt zuerst alle Elemente in der Liste und fügt dann einen einzelnen Wert zur Liste hinzu.
- [`SVGPointList.getItem()`](/de/docs/Web/API/SVGPointList/getItem)
  - : Holt ein Element aus der Liste an einer angegebenen Position.
- [`SVGPointList.insertItemBefore()`](/de/docs/Web/API/SVGPointList/insertItemBefore)
  - : Fügt ein Element an einer bestimmten Position in die Liste ein.
- [`SVGPointList.replaceItem()`](/de/docs/Web/API/SVGPointList/replaceItem)
  - : Ersetzt ein Element in der Liste durch ein neues Element.
- [`SVGPointList.removeItem()`](/de/docs/Web/API/SVGPointList/removeItem)
  - : Entfernt ein Element aus der Liste.
- [`SVGPointList.appendItem()`](/de/docs/Web/API/SVGPointList/appendItem)
  - : Fügt ein Element am Ende der Liste hinzu.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Die `points`-Eigenschaft gibt eine `SVGPointList` zurück.

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
const example = document.getElementById("example");
console.log(example.points); // An SVGPointList
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
