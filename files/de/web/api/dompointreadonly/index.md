---
title: DOMPointReadOnly
slug: Web/API/DOMPointReadOnly
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das Interface **`DOMPointReadOnly`** definiert die Koordinaten- und Perspektivfelder, mit denen [`DOMPoint`](/de/docs/Web/API/DOMPoint) einen 2D- oder 3D-Punkt in einem Koordinatensystem beschreibt.

Es gibt zwei Möglichkeiten, eine neue `DOMPointReadOnly`-Instanz zu erstellen. Erstens können Sie den Konstruktor verwenden und ihm die Werte für jede Dimension sowie optional für die Perspektive übergeben:

```js
/* 2D */
const point2D = new DOMPointReadOnly(50, 50);

/* 3D */
const point3D = new DOMPointReadOnly(50, 50, 25);

/* 3D with perspective */
const point3DPerspective = new DOMPointReadOnly(100, 100, 100, 1.0);
```

Alternativ können Sie die statische Methode [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static) verwenden:

```js
const point = DOMPointReadOnly.fromPoint({ x: 100, y: 100, z: 50, w: 1.0 });
```

## Konstruktor

- [`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly)
  - : Erstellt ein neues `DOMPointReadOnly`-Objekt aus den Werten seiner Koordinaten und seiner Perspektive. Um einen Punkt mithilfe eines Objekts zu erstellen, können Sie stattdessen [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static) verwenden.

## Instanzeigenschaften

- [`DOMPointReadOnly.x`](/de/docs/Web/API/DOMPointReadOnly/x) {{ReadOnlyInline}}
  - : Die horizontale Koordinate des Punkts, `x`.
- [`DOMPointReadOnly.y`](/de/docs/Web/API/DOMPointReadOnly/y) {{ReadOnlyInline}}
  - : Die vertikale Koordinate des Punkts, `y`.
- [`DOMPointReadOnly.z`](/de/docs/Web/API/DOMPointReadOnly/z) {{ReadOnlyInline}}
  - : Die Tiefenkoordinate des Punkts, `z`.
- [`DOMPointReadOnly.w`](/de/docs/Web/API/DOMPointReadOnly/w) {{ReadOnlyInline}}
  - : Der Perspektivwert des Punkts, `w`.

## Statische Methoden

- [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static)
  - : Eine statische Methode, die ein neues `DOMPointReadOnly`-Objekt aus den im angegebenen Objekt enthaltenen Koordinaten erstellt.

## Instanzmethoden

- [`matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform)
  - : Wendet eine als Objekt angegebene Matrixtransformation auf das `DOMPointReadOnly`-Objekt an.
- [`toJSON()`](/de/docs/Web/API/DOMPointReadOnly/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMPointReadOnly`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
