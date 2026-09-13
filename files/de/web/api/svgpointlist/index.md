---
title: SVGPointList
slug: Web/API/SVGPointList
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die **`SVGPointList`**-Schnittstelle stellt eine Liste von [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekten dar.

Eine `SVGPointList` kann als schreibgeschützt festgelegt werden. Das bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

Ein `SVGPointList`-Objekt ist indexierbar und kann wie ein Array über die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) aufgerufen werden. Das Lesen eines Index entspricht dem Aufruf von [`getItem()`](/de/docs/Web/API/SVGPointList/getItem). Das Zuweisen zu einem Index entspricht dem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGPointList/replaceItem), einschließlich der dabei ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.
- [`SVGPointList.numberOfItems`](/de/docs/Web/API/SVGPointList/numberOfItems) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Punkte in der Liste zurück.

## Instanzmethoden

- [`SVGPointList.clear()`](/de/docs/Web/API/SVGPointList/clear)
  - : Entfernt alle Elemente aus der Liste.
- [`SVGPointList.initialize()`](/de/docs/Web/API/SVGPointList/initialize)
  - : Entfernt zunächst alle Elemente aus der Liste und fügt dann der Liste einen einzelnen Wert hinzu.
- [`SVGPointList.getItem()`](/de/docs/Web/API/SVGPointList/getItem)
  - : Ruft ein Element an einer angegebenen Position aus der Liste ab.
- [`SVGPointList.insertItemBefore()`](/de/docs/Web/API/SVGPointList/insertItemBefore)
  - : Fügt ein Element an einer angegebenen Position in die Liste ein.
- [`SVGPointList.replaceItem()`](/de/docs/Web/API/SVGPointList/replaceItem)
  - : Ersetzt ein Element in der Liste durch ein neues Element.
- [`SVGPointList.removeItem()`](/de/docs/Web/API/SVGPointList/removeItem)
  - : Entfernt ein Element aus der Liste.
- [`SVGPointList.appendItem()`](/de/docs/Web/API/SVGPointList/appendItem)
  - : Fügt ein Element am Ende der Liste hinzu.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Die Eigenschaft `points` gibt eine `SVGPointList` zurück.

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
