---
title: DOMRect
slug: Web/API/DOMRect
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein **`DOMRect`** beschreibt die Größe und Position eines Rechtecks.

Die Art der Box, die durch das `DOMRect` dargestellt wird, wird durch die Methode oder Eigenschaft festgelegt, die es zurückgibt. Zum Beispiel gibt [`Range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect) das Rechteck an, das den Inhalt des Bereichs mit solchen Objekten umschließt.

Es erbt von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

{{InheritanceDiagram}}

## Konstruktor

- [`DOMRect()`](/de/docs/Web/API/DOMRect/DOMRect)
  - : Erstellt ein neues `DOMRect`-Objekt.

## Instanz-Eigenschaften

_`DOMRect` erbt Eigenschaften von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly). Der Unterschied besteht darin, dass sie nicht mehr schreibgeschützt sind._

- [`DOMRectReadOnly.x`](/de/docs/Web/API/DOMRectReadOnly/x)
  - : Die x-Koordinate des Ursprungs des `DOMRect` (typischerweise die obere linke Ecke des Rechtecks).
- [`DOMRectReadOnly.y`](/de/docs/Web/API/DOMRectReadOnly/y)
  - : Die y-Koordinate des Ursprungs des `DOMRect` (typischerweise die obere linke Ecke des Rechtecks).
- [`DOMRectReadOnly.width`](/de/docs/Web/API/DOMRectReadOnly/width)
  - : Die Breite des `DOMRect`.
- [`DOMRectReadOnly.height`](/de/docs/Web/API/DOMRectReadOnly/height)
  - : Die Höhe des `DOMRect`.
- [`DOMRectReadOnly.top`](/de/docs/Web/API/DOMRectReadOnly/top)
  - : Gibt den oberen Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `y`, oder `y + height`, wenn `height` negativ ist).
- [`DOMRectReadOnly.right`](/de/docs/Web/API/DOMRectReadOnly/right)
  - : Gibt den rechten Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `x + width`, oder `x`, wenn `width` negativ ist).
- [`DOMRectReadOnly.bottom`](/de/docs/Web/API/DOMRectReadOnly/bottom)
  - : Gibt den unteren Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `y + height`, oder `y`, wenn `height` negativ ist).
- [`DOMRectReadOnly.left`](/de/docs/Web/API/DOMRectReadOnly/left)
  - : Gibt den linken Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `x`, oder `x + width`, wenn `width` negativ ist).

## Statische Methoden

_`DOMRect` kann auch statische Methoden von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), erben._

- [`DOMRect.fromRect()`](/de/docs/Web/API/DOMRect/fromRect_static)
  - : Erstellt ein neues `DOMRect`-Objekt mit einem bestimmten Ort und Abmessungen.

## Instanz-Methoden

_`DOMRect` kann Methoden von seinem Elternteil, [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), erben._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
