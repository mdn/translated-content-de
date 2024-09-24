---
title: SVGPointList
slug: Web/API/SVGPointList
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGPointList`**-Schnittstelle stellt eine Liste von {{domxref("SVGPoint")}}-Objekten dar.

Ein `SVGPointList` kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- {{domxref("SVGPointList.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.
- {{domxref("SVGPointList.numberOfItems")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.

## Instanz-Methoden

- {{domxref("SVGPointList.clear()")}}
  - : Entfernt alle Elemente in der Liste.
- {{domxref("SVGPointList.initialize()")}}
  - : Entfernt zunächst alle Elemente in der Liste, dann wird ein einzelner Wert zur Liste hinzugefügt.
- {{domxref("SVGPointList.getItem()")}}
  - : Holt ein Element aus der Liste an einer bestimmten Position.
- {{domxref("SVGPointList.insertItemBefore()")}}
  - : Fügt ein Element an einer bestimmten Position in die Liste ein.
- {{domxref("SVGPointList.replaceItem()")}}
  - : Ersetzt ein Element in der Liste durch ein neues Element.
- {{domxref("SVGPointList.removeItem()")}}
  - : Entfernt ein Element aus der Liste.
- {{domxref("SVGPointList.appendItem()")}}
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
let example = document.getElementById("example");
console.log(example.points); // an SVGPointList
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
