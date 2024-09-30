---
title: "CSSTransformComponent: Methode toMatrix()"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("CSS Typed OM")}}

Die **`toMatrix()`**-Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Schnittstelle gibt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.

Alle Transformationsfunktionen können mathematisch als 4x4-Transformationsmatrix dargestellt werden.

> [!NOTE]
> Die `is2D`-Eigenschaft beeinflusst, welche Transformation und somit welche Art von Matrix zurückgegeben wird. CSS 2D- und 3D-Transformationen unterscheiden sich aus historischen Gründen. Eine kurze Erklärung von 2D- vs. 3D-Transformationen finden Sie unter [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms).

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
  - : Wird ausgelöst, wenn Längen, die bei der Erstellung der Matrix beteiligt sind, nicht kompatible Einheiten
    mit px sind (wie relative Längen oder Prozentsätze).

## Beispiele

In Arbeit

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
