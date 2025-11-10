---
title: DOMRectList
slug: Web/API/DOMRectList
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{APIRef("Geometry Interfaces")}}

Das **`DOMRectList`**-Interface repräsentiert eine Sammlung von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten, die typischerweise verwendet werden, um die mit einem bestimmten Element verbundenen Rechtecke zu halten, wie die Begrenzungsboxen, die von Methoden wie [`getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurückgegeben werden. Es bietet Zugriff auf jedes Rechteck in der Liste über seinen Index, zusammen mit einer `length`-Eigenschaft, die die Gesamtanzahl der Rechtecke in der Liste angibt.

> [!NOTE] > `DOMRectList` existiert für die Kompatibilität mit älteren Webinhalten und es wird nicht empfohlen, es bei der Erstellung neuer APIs zu verwenden.

## Instanzeigenschaften

- [`DOMRectList.length`](/de/docs/Web/API/DOMRectList/length) {{ReadOnlyInline}}
  - : Eine schreibgeschützte Eigenschaft, die die Gesamtanzahl der [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekte in der `DOMRectList` zurückgibt.

## Instanzmethoden

- [`DOMRectList.item`](/de/docs/Web/API/DOMRectList/item)
  - : Gibt das [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt am angegebenen Index zurück. Wenn der `index` außerhalb des Bereichs liegt, wird `null` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
