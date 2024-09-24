---
title: DOMPointReadOnly
slug: Web/API/DOMPointReadOnly
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Geometry Interfaces")}} {{AvailableInWorkers}}

Das **`DOMPointReadOnly`**-Interface gibt die Koordinaten- und Perspektivenfelder an, die von {{domxref("DOMPoint")}} verwendet werden, um einen 2D- oder 3D-Punkt in einem Koordinatensystem zu definieren.

Es gibt zwei Möglichkeiten, eine neue Instanz von `DOMPointReadOnly` zu erstellen. Zuerst können Sie dessen Konstruktor verwenden und die Werte der Parameter für jede Dimension und optional die Perspektive übergeben:

```js
/* 2D */
const point2D = new DOMPointReadOnly(50, 50);

/* 3D */
const point3D = new DOMPointReadOnly(50, 50, 25);

/* 3D mit Perspektive */
const point3DPerspective = new DOMPointReadOnly(100, 100, 100, 1.0);
```

Die andere Möglichkeit ist die Benutzung der statischen Methode {{domxref("DOMPointReadOnly.fromPoint_static", "DOMPointReadOnly.fromPoint()")}}:

```js
const point = DOMPointReadOnly.fromPoint({ x: 100, y: 100, z: 50, w: 1.0 });
```

## Konstruktor

- {{domxref("DOMPointReadOnly.DOMPointReadOnly","DOMPointReadOnly()")}}
  - : Erstellt ein neues `DOMPointReadOnly`-Objekt mit den angegebenen Werten für Koordinaten und Perspektive. Um einen Punkt mit einem Objekt zu erstellen, können Sie stattdessen {{domxref("DOMPointReadOnly.fromPoint_static", "DOMPointReadOnly.fromPoint()")}} verwenden.

## Instanz-Eigenschaften

- {{domxref("DOMPointReadOnly.x")}} {{ReadOnlyInline}}
  - : Die horizontale Koordinate des Punktes, `x`.
- {{domxref("DOMPointReadOnly.y")}} {{ReadOnlyInline}}
  - : Die vertikale Koordinate des Punktes, `y`.
- {{domxref("DOMPointReadOnly.z")}} {{ReadOnlyInline}}
  - : Die Tiefenkoordinate des Punktes, `z`.
- {{domxref("DOMPointReadOnly.w")}} {{ReadOnlyInline}}
  - : Der Perspektivenwert des Punktes, `w`.

## Statische Methoden

- {{domxref("DOMPointReadOnly.fromPoint_static", "DOMPointReadOnly.fromPoint()")}}
  - : Eine statische Methode, die ein neues `DOMPointReadOnly`-Objekt mit den im angegebenen Objekt bereitgestellten Koordinaten erstellt.

## Instanz-Methoden

- {{domxref("DOMPointReadOnly.matrixTransform", "matrixTransform()")}}
  - : Wendet eine als Objekt angegebene Matrixtransformation auf das `DOMPointReadOnly`-Objekt an.
- {{domxref("DOMPointReadOnly.toJSON()", "toJSON()")}}
  - : Gibt eine JSON-Darstellung des `DOMPointReadOnly`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
