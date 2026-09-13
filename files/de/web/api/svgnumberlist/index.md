---
title: SVGNumberList
slug: Web/API/SVGNumberList
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGNumberList`** definiert eine Liste von Zahlen.

Ein `SVGNumberList`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, dazu führen, dass eine Ausnahme ausgelöst wird.

Ein `SVGNumberList`-Objekt ist indexierbar und kann wie ein Array mithilfe der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) aufgerufen werden. Das Lesen eines Index entspricht dem Aufruf von [`getItem()`](/de/docs/Web/API/SVGNumberList/getItem). Das Zuweisen zu einem Index entspricht dem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGNumberList/replaceItem), einschließlich der dadurch ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/SVGNumberList/length)
  - : Die Anzahl der Elemente in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.

## Instanzmethoden

- [`appendItem()`](/de/docs/Web/API/SVGNumberList/appendItem)
  - : Fügt ein neues Element am Ende der Liste ein.
- [`clear()`](/de/docs/Web/API/SVGNumberList/clear)
  - : Entfernt alle vorhandenen Elemente aus der Liste, sodass das Ergebnis eine leere Liste ist.
- [`initialize()`](/de/docs/Web/API/SVGNumberList/initialize)
  - : Entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, sodass sie das einzelne durch den Parameter angegebene Element enthält.
- [`getItem()`](/de/docs/Web/API/SVGNumberList/getItem)
  - : Gibt das angegebene Element aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGNumberList/insertItemBefore)
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGNumberList/removeItem)
  - : Entfernt ein vorhandenes Element aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGNumberList/replaceItem)
  - : Ersetzt ein vorhandenes Element in der Liste durch ein neues Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
