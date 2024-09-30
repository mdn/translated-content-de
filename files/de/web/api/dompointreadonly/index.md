---
title: DOMPointReadOnly
slug: Web/API/DOMPointReadOnly
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Geometry Interfaces")}} {{AvailableInWorkers}}

Die **`DOMPointReadOnly`**-Schnittstelle spezifiziert die Koordinaten- und Perspektivfelder, die von [`DOMPoint`](/de/docs/Web/API/DOMPoint) verwendet werden, um einen 2D- oder 3D-Punkt in einem Koordinatensystem zu definieren.

Es gibt zwei Möglichkeiten, eine neue Instanz von `DOMPointReadOnly` zu erstellen. Zunächst können Sie den Konstruktor verwenden und die Werte für jede Dimension und optional die Perspektive übergeben:

```js
/* 2D */
const point2D = new DOMPointReadOnly(50, 50);

/* 3D */
const point3D = new DOMPointReadOnly(50, 50, 25);

/* 3D with perspective */
const point3DPerspective = new DOMPointReadOnly(100, 100, 100, 1.0);
```

Die andere Möglichkeit besteht darin, die statische Methode [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static) zu verwenden:

```js
const point = DOMPointReadOnly.fromPoint({ x: 100, y: 100, z: 50, w: 1.0 });
```

## Konstruktor

- [`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly)
  - : Erstellt ein neues `DOMPointReadOnly`-Objekt mit den Werten seiner Koordinaten und Perspektive. Um einen Punkt mithilfe eines Objekts zu erstellen, können Sie stattdessen [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static) verwenden.

## Instanz-Eigenschaften

- [`DOMPointReadOnly.x`](/de/docs/Web/API/DOMPointReadOnly/x) {{ReadOnlyInline}}
  - : Die horizontale Koordinate des Punktes, `x`.
- [`DOMPointReadOnly.y`](/de/docs/Web/API/DOMPointReadOnly/y) {{ReadOnlyInline}}
  - : Die vertikale Koordinate des Punktes, `y`.
- [`DOMPointReadOnly.z`](/de/docs/Web/API/DOMPointReadOnly/z) {{ReadOnlyInline}}
  - : Die Tiefen-Koordinate des Punktes, `z`.
- [`DOMPointReadOnly.w`](/de/docs/Web/API/DOMPointReadOnly/w) {{ReadOnlyInline}}
  - : Der Perspektivwert des Punktes, `w`.

## Statische Methoden

- [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static)
  - : Eine statische Methode, die ein neues `DOMPointReadOnly`-Objekt erstellt, basierend auf den im angegebenen Objekt bereitgestellten Koordinaten.

## Instanz-Methoden

- [`matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform)
  - : Wendet eine als Objekt spezifizierte Matrixtransformation auf das `DOMPointReadOnly`-Objekt an.
- [`toJSON()`](/de/docs/Web/API/DOMPointReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMPointReadOnly`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
