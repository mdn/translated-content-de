---
title: DOMRectList
slug: Web/API/DOMRectList
l10n:
  sourceCommit: f8554061e8e76aaa3f08ba1b5f9b939d436f5ded
---

{{APIRef("Geometry Interfaces")}}

Die **`DOMRectList`**-Schnittstelle repräsentiert eine Sammlung von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten, die typischerweise dazu verwendet wird, die Rechtecke zu halten, die mit einem bestimmten Element verbunden sind, wie Begrenzungsrahmen, die von Methoden wie [`getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurückgegeben werden. Sie ermöglicht den Zugriff auf jedes Rechteck in der Liste über seinen Index sowie eine `length`-Eigenschaft, die die Gesamtanzahl der Rechtecke in der Liste angibt.

> **Note**: `DOMRectList` existiert für die Kompatibilität mit älteren Webinhalten und wird nicht empfohlen, wenn neue APIs erstellt werden.

## Instanz-Eigenschaften

- [`DOMRectList.length`](/de/docs/Web/API/DOMRectList/length) {{ReadOnlyInline}}
  - : Eine schreibgeschützte Eigenschaft, die die Gesamtanzahl der [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekte in der `DOMRectList` zurückgibt.

## Instanz-Methoden

- [`DOMRectList.item`](/de/docs/Web/API/DOMRectList/item)
  - : Gibt das [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt am angegebenen Index zurück. Wenn der `index` außerhalb des Bereichs liegt, wird `null` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
