---
title: "DOMPointReadOnly: DOMPointReadOnly() Konstruktor"
short-title: DOMPointReadOnly()
slug: Web/API/DOMPointReadOnly/DOMPointReadOnly
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Der **`DOMPointReadOnly()`**-Konstruktor gibt ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt zurück, das einen Punkt in einem 2D- oder 3D-Raum darstellt, optional mit Perspektive, dessen Werte nicht durch Skriptcode verändert werden können.

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
> Jeder dieser Werte ist ein sogenannter _unbeschränkter_ Wert. Zusätzlich zu jedem endlichen Gleitkommawert können Sie spezielle Werte wie ±{{jsxref("Infinity")}} und {{jsxref("NaN")}} verwenden.

### Rückgabewert

Ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt, das die angegebene Position im Raum darstellt.

## Beispiele

Der folgende Code zeigt das Erstellen von sowohl 2D- als auch 3D-Punkten.

```js
const point2D = new DOMPointReadOnly(50, 25);
const point3D = new DOMPointReadOnly(50, 0, 10);
const perspectivePoint3D = new DOMPointReadOnly(50, 50, 25, 0.5);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
