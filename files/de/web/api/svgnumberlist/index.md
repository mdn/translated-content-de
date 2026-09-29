---
title: SVGNumberList
slug: Web/API/SVGNumberList
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGNumberList`** definiert eine Liste von Zahlen.

Ein `SVGNumberList`-Objekt kann als schreibgeschützt festgelegt werden. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

Auf ein `SVGNumberList`-Objekt kann über einen Index wie auf ein Array zugegriffen werden, indem die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwendet wird. Das Lesen eines Index entspricht dem Aufruf von [`getItem()`](/de/docs/Web/API/SVGNumberList/getItem). Die Zuweisung an einen Index entspricht dem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGNumberList/replaceItem), einschließlich der dabei ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/SVGNumberList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.

## Instanzmethoden

- [`appendItem()`](/de/docs/Web/API/SVGNumberList/appendItem)
  - : Fügt am Ende der Liste einen neuen Eintrag hinzu.
- [`clear()`](/de/docs/Web/API/SVGNumberList/clear)
  - : Entfernt alle vorhandenen Einträge aus der Liste, sodass sie leer ist.
- [`initialize()`](/de/docs/Web/API/SVGNumberList/initialize)
  - : Entfernt alle vorhandenen Einträge aus der Liste und initialisiert sie mit dem einzelnen Eintrag neu, der durch den Parameter angegeben wird.
- [`getItem()`](/de/docs/Web/API/SVGNumberList/getItem)
  - : Gibt den angegebenen Eintrag aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGNumberList/insertItemBefore)
  - : Fügt an der angegebenen Position einen neuen Eintrag in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGNumberList/removeItem)
  - : Entfernt einen vorhandenen Eintrag aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGNumberList/replaceItem)
  - : Ersetzt einen vorhandenen Eintrag in der Liste durch einen neuen Eintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
