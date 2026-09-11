---
title: SVGStringList
slug: Web/API/SVGStringList
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGStringList`** definiert eine Liste von Zeichenketten.

Ein `SVGStringList`-Objekt kann als schreibgeschützt festgelegt werden. Das bedeutet, dass Versuche, das Objekt zu ändern, dazu führen, dass eine Ausnahme ausgelöst wird.

Ein `SVGStringList`-Objekt ist indexierbar und kann wie ein Array mittels [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) aufgerufen werden. Das Lesen eines Index entspricht dem Aufruf von [`getItem()`](/de/docs/Web/API/SVGStringList/getItem). Das Zuweisen zu einem Index entspricht dem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGStringList/replaceItem), einschließlich der von dieser Methode ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/SVGStringList/length)
  - : Die Anzahl der Elemente in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGStringList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.

## Instanzmethoden

- [`appendItem()`](/de/docs/Web/API/SVGStringList/appendItem)
  - : Fügt am Ende der Liste ein neues Element ein.
- [`clear()`](/de/docs/Web/API/SVGStringList/clear)
  - : Entfernt alle vorhandenen Elemente aus der Liste, sodass eine leere Liste entsteht.
- [`initialize()`](/de/docs/Web/API/SVGStringList/initialize)
  - : Entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste erneut, sodass sie das einzelne durch den Parameter angegebene Element enthält.
- [`getItem()`](/de/docs/Web/API/SVGStringList/getItem)
  - : Gibt das angegebene Element aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGStringList/insertItemBefore)
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGStringList/removeItem)
  - : Entfernt ein vorhandenes Element aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGStringList/replaceItem)
  - : Ersetzt ein vorhandenes Element in der Liste durch ein neues Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
