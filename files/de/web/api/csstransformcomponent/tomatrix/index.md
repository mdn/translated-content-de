---
title: "CSSTransformComponent: toMatrix() Methode"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Typed OM")}}

Die **`toMatrix()`**-Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Schnittstelle gibt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.

Alle Transformationsfunktionen können mathematisch als 4x4-Transformationsmatrix dargestellt werden.

> [!NOTE]
> Die `is2D`-Eigenschaft beeinflusst, welche Transformation und damit welchen Matrixtyp zurückgegeben wird. CSS 2D- und 3D-Transformationen unterscheiden sich aus Legacy-Gründen. Eine kurze Erklärung zu 2D- vs. 3D-Transformationen finden Sie unter [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using).

## Syntax

```js-nolint
toMatrix()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn Längen, die an der Erstellung der Matrix beteiligt sind, nicht mit Einheiten kompatibel sind, die px (wie relative Längen oder Prozentsätze) verwenden.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
