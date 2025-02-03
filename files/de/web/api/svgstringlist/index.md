---
title: SVGStringList
slug: Web/API/SVGStringList
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Das **`SVGStringList`**-Interface definiert eine Liste von Zeichenfolgen.

Ein `SVGStringList`-Objekt kann als schreibgeschützt festgelegt werden. Versuche, das Objekt zu ändern, führen dann zu einer Ausnahme.

Ein `SVGStringList`-Objekt ist indexierbar und kann wie ein Array angesprochen werden.

## Eigenschaften der Instanz

- [`length`](/de/docs/Web/API/SVGStringList/length)
  - : Die Anzahl der Elemente in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGStringList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.

## Methoden der Instanz

- [`appendItem()`](/de/docs/Web/API/SVGStringList/appendItem)
  - : Fügt ein neues Element am Ende der Liste ein.
- [`clear()`](/de/docs/Web/API/SVGStringList/clear)
  - : Löscht alle vorhandenen Elemente aus der Liste, sodass eine leere Liste entsteht.
- [`initialize()`](/de/docs/Web/API/SVGStringList/initialize)
  - : Löscht alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene einzelne Element zu halten.
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
