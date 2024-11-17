---
title: DOMRect
slug: Web/API/DOMRect
l10n:
  sourceCommit: dc82e604c805cd2eae887a371111e902c8c52241
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein **`DOMRect`** beschreibt die Größe und Position eines Rechtecks.

Die Art der Box, die durch das `DOMRect` dargestellt wird, wird durch die Methode oder Eigenschaft festgelegt, die sie zurückgegeben hat. Beispielsweise spezifiziert [`Range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect) das Rechteck, das den Inhalt des Bereichs mit solchen Objekten umschließt.

Es erbt von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

{{InheritanceDiagram}}

## Konstruktor

- [`DOMRect()`](/de/docs/Web/API/DOMRect/DOMRect)
  - : Erstellt ein neues `DOMRect`-Objekt.

## Instanz-Eigenschaften

_`DOMRect` erbt Eigenschaften von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly). Der Unterschied ist, dass diese nicht mehr schreibgeschützt sind._

- [`DOMRect.x`](/de/docs/Web/API/DOMRect/x)
  - : Die x-Koordinate des Ursprungs des `DOMRect` (typischerweise die linke obere Ecke des Rechtecks).
- [`DOMRect.y`](/de/docs/Web/API/DOMRect/y)
  - : Die y-Koordinate des Ursprungs des `DOMRect` (typischerweise die linke obere Ecke des Rechtecks).
- [`DOMRect.width`](/de/docs/Web/API/DOMRect/width)
  - : Die Breite des `DOMRect`.
- [`DOMRect.height`](/de/docs/Web/API/DOMRect/height)
  - : Die Höhe des `DOMRect`.
- [`DOMRectReadOnly.top`](/de/docs/Web/API/DOMRectReadOnly/top)
  - : Gibt den oberen Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `y` oder `y + height`, wenn `height` negativ ist).
- [`DOMRectReadOnly.right`](/de/docs/Web/API/DOMRectReadOnly/right)
  - : Gibt den rechten Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `x + width` oder `x`, wenn `width` negativ ist).
- [`DOMRectReadOnly.bottom`](/de/docs/Web/API/DOMRectReadOnly/bottom)
  - : Gibt den unteren Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `y + height` oder `y`, wenn `height` negativ ist).
- [`DOMRectReadOnly.left`](/de/docs/Web/API/DOMRectReadOnly/left)
  - : Gibt den linken Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `x` oder `x + width`, wenn `width` negativ ist).

## Statische Methoden

_`DOMRect` kann auch statische Methoden von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), erben._

- [`DOMRect.fromRect()`](/de/docs/Web/API/DOMRect/fromRect_static)
  - : Erstellt ein neues `DOMRect`-Objekt mit einer gegebenen Position und Abmessungen.

## Instanz-Methoden

_`DOMRect` kann Methoden von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), erben._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
