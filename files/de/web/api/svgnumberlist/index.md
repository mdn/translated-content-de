---
title: SVGNumberList
slug: Web/API/SVGNumberList
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`SVGNumberList`**-Schnittstelle definiert eine Liste von Zahlen.

Ein `SVGNumberList`-Objekt kann als schreibgeschützt gekennzeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

Ein `SVGNumberList`-Objekt ist indizierbar und kann wie ein Array angesprochen werden.

## Instanz-Eigenschaften

- [`length`](/de/docs/Web/API/SVGNumberList/length)
  - : Die Anzahl der Elemente in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.

## Instanz-Methoden

- [`appendItem()`](/de/docs/Web/API/SVGNumberList/appendItem)
  - : Fügt ein neues Element am Ende der Liste ein.
- [`clear()`](/de/docs/Web/API/SVGNumberList/clear)
  - : Löscht alle vorhandenen Elemente aus der Liste, sodass das Ergebnis eine leere Liste ist.
- [`initialize()`](/de/docs/Web/API/SVGNumberList/initialize)
  - : Löscht alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene einzelne Element zu halten.
- [`getItem()`](/de/docs/Web/API/SVGNumberList/getItem)
  - : Gibt das angegebene Element aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGNumberList/insertItemBefore)
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGNumberList/removeItem)
  - : Entfernt ein bestehendes Element aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGNumberList/replaceItem)
  - : Ersetzt ein bestehendes Element in der Liste durch ein neues Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
