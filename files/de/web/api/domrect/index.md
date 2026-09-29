---
title: DOMRect
slug: Web/API/DOMRect
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein **`DOMRect`** beschreibt die Größe und Position eines Rechtecks.

Welche Art von Begrenzungsrahmen das `DOMRect` darstellt, hängt von der Methode oder Eigenschaft ab, die es zurückgegeben hat. Beispielsweise beschreibt [`Range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect) mit einem solchen Objekt das Rechteck, das den Inhalt des Bereichs umschließt.

Es erbt von seiner übergeordneten Schnittstelle [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

{{InheritanceDiagram}}

## Konstruktor

- [`DOMRect()`](/de/docs/Web/API/DOMRect/DOMRect)
  - : Erstellt ein neues `DOMRect`-Objekt.

## Instanzeigenschaften

_`DOMRect` erbt Eigenschaften von seiner übergeordneten Schnittstelle [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly). Der Unterschied besteht darin, dass sie nicht mehr schreibgeschützt sind._

- [`DOMRect.x`](/de/docs/Web/API/DOMRect/x)
  - : Die x-Koordinate des Ursprungs des `DOMRect` (in der Regel die linke obere Ecke des Rechtecks).
- [`DOMRect.y`](/de/docs/Web/API/DOMRect/y)
  - : Die y-Koordinate des Ursprungs des `DOMRect` (in der Regel die linke obere Ecke des Rechtecks).
- [`DOMRect.width`](/de/docs/Web/API/DOMRect/width)
  - : Die Breite des `DOMRect`.
- [`DOMRect.height`](/de/docs/Web/API/DOMRect/height)
  - : Die Höhe des `DOMRect`.
- [`DOMRectReadOnly.top`](/de/docs/Web/API/DOMRectReadOnly/top) {{ReadOnlyInline}}
  - : Gibt den Wert der oberen Koordinate des `DOMRect` zurück (entspricht `y` oder, falls `height` negativ ist, `y + height`).
- [`DOMRectReadOnly.right`](/de/docs/Web/API/DOMRectReadOnly/right) {{ReadOnlyInline}}
  - : Gibt den Wert der rechten Koordinate des `DOMRect` zurück (entspricht `x + width` oder, falls `width` negativ ist, `x`).
- [`DOMRectReadOnly.bottom`](/de/docs/Web/API/DOMRectReadOnly/bottom) {{ReadOnlyInline}}
  - : Gibt den Wert der unteren Koordinate des `DOMRect` zurück (entspricht `y + height` oder, falls `height` negativ ist, `y`).
- [`DOMRectReadOnly.left`](/de/docs/Web/API/DOMRectReadOnly/left) {{ReadOnlyInline}}
  - : Gibt den Wert der linken Koordinate des `DOMRect` zurück (entspricht `x` oder, falls `width` negativ ist, `x + width`).

## Statische Methoden

_`DOMRect` kann auch statische Methoden von seiner übergeordneten Schnittstelle [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) erben._

- [`DOMRect.fromRect()`](/de/docs/Web/API/DOMRect/fromRect_static)
  - : Erstellt ein neues `DOMRect`-Objekt mit einer angegebenen Position und angegebenen Abmessungen.

## Instanzmethoden

_`DOMRect` kann Methoden von seiner übergeordneten Schnittstelle [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) erben._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
