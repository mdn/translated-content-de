---
title: "DOMPointReadOnly: DOMPointReadOnly() Konstruktor"
short-title: DOMPointReadOnly()
slug: Web/API/DOMPointReadOnly/DOMPointReadOnly
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMPointReadOnly()`**
Konstruktor gibt ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt zurück, das einen Punkt im 2D- oder 3D-Raum repräsentiert, optional mit Perspektive, dessen Werte durch Skriptcode nicht verändert werden können.

## Syntax

```js-nolint
new DOMPointReadOnly()
new DOMPointReadOnly(x)
new DOMPointReadOnly(x, y)
new DOMPointReadOnly(x, y, z)
new DOMPointReadOnly(x, y, z, w)
```

### Parameter

- `x` {{optional_inline}}
  - : Der Wert der horizontalen Koordinate, x, als Gleitkommazahl. Der Standardwert ist 0.
- `y` {{optional_inline}}
  - : Der Wert der vertikalen Koordinate, y, als Gleitkommazahl. Der Standardwert ist 0.
- `z` {{optional_inline}}
  - : Der Wert der Tiefenkoordinate, z, als Gleitkommazahl. Der Standardwert ist 0.
- `w` {{optional_inline}}
  - : Der Wert der Perspektive, w, als Gleitkommazahl. Der Standardwert ist 1.

> [!NOTE]
> Jeder dieser Werte wird als _unbeschränkt_ bezeichnet. Neben jedem endlichen Gleitkommawert können Sie spezielle Werte wie ±{{jsxref("Infinity")}} und {{jsxref("NaN")}} verwenden.

### Rückgabewert

Ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt, das die angegebene Position im Raum repräsentiert.

## Beispiele

Der folgende Code zeigt die Erstellung von 2D- und 3D-Punkten.

```js
const point2D = new DOMPointReadOnly(50, 25);
const point3D = new DOMPointReadOnly(50, 0, 10);
const perspectivePoint3D = new DOMPointReadOnly(50, 50, 25, 0.5);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
