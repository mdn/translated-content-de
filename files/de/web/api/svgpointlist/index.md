---
title: SVGPointList
slug: Web/API/SVGPointList
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Die **`SVGPointList`**-Schnittstelle repräsentiert eine Liste von [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekten.

Eine `SVGPointList` kann als schreibgeschützt gekennzeichnet sein, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.
- [`SVGPointList.numberOfItems`](/de/docs/Web/API/SVGPointList/numberOfItems) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.

## Instanz-Methoden

- [`SVGPointList.clear()`](/de/docs/Web/API/SVGPointList/clear)
  - : Entfernt alle Elemente in der Liste.
- [`SVGPointList.initialize()`](/de/docs/Web/API/SVGPointList/initialize)
  - : Entfernt zuerst alle Elemente in der Liste und fügt dann einen einzigen Wert zur Liste hinzu.
- [`SVGPointList.getItem()`](/de/docs/Web/API/SVGPointList/getItem)
  - : Ruft ein Element aus der Liste an einer angegebenen Position ab.
- [`SVGPointList.insertItemBefore()`](/de/docs/Web/API/SVGPointList/insertItemBefore)
  - : Fügt ein Element an einer angegebenen Position in die Liste ein.
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
