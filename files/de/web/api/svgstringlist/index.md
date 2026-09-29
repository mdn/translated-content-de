---
title: SVGStringList
slug: Web/API/SVGStringList
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Das **`SVGStringList`**-Interface definiert eine Liste von Zeichenfolgen.

Ein `SVGStringList`-Objekt kann als schreibgeschützt festgelegt werden. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

Auf ein `SVGStringList`-Objekt kann über Indizes wie auf ein Array mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugegriffen werden. Das Lesen eines Index entspricht dem Aufruf von [`getItem()`](/de/docs/Web/API/SVGStringList/getItem). Die Zuweisung an einen Index entspricht dem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGStringList/replaceItem), einschließlich der dabei ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/SVGStringList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGStringList/numberOfItems) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.

## Instanzmethoden

- [`appendItem()`](/de/docs/Web/API/SVGStringList/appendItem)
  - : Fügt am Ende der Liste einen neuen Eintrag hinzu.
- [`clear()`](/de/docs/Web/API/SVGStringList/clear)
  - : Entfernt alle vorhandenen Einträge aus der Liste, sodass sie leer ist.
- [`initialize()`](/de/docs/Web/API/SVGStringList/initialize)
  - : Entfernt alle vorhandenen Einträge aus der Liste und initialisiert sie mit dem einzelnen Eintrag, der durch den Parameter angegeben wird.
- [`getItem()`](/de/docs/Web/API/SVGStringList/getItem)
  - : Gibt den angegebenen Eintrag aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGStringList/insertItemBefore)
  - : Fügt an der angegebenen Position einen neuen Eintrag in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGStringList/removeItem)
  - : Entfernt einen vorhandenen Eintrag aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGStringList/replaceItem)
  - : Ersetzt einen vorhandenen Eintrag in der Liste durch einen neuen Eintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
