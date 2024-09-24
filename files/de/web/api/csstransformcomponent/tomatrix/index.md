---
title: "CSSTransformComponent: Methode toMatrix()"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("CSS Typed OM")}}

Die **`toMatrix()`**-Methode der {{domxref("CSSTransformComponent")}}-Schnittstelle gibt ein {{domxref('DOMMatrix')}}-Objekt zurück.

Alle Transformationsfunktionen können mathematisch als 4x4-Transformationsmatrix dargestellt werden.

> [!NOTE]
> Die Eigenschaft `is2D` beeinflusst, welche Transformation und damit welcher Typ von Matrix zurückgegeben wird. CSS 2D- und 3D-Transformationen unterscheiden sich aus historischen Gründen. Eine kurze Erklärung zu 2D- vs. 3D-Transformationen finden Sie unter [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms).

## Syntax

```js-nolint
toMatrix()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref('DOMMatrix')}}-Objekt

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn irgendeine Länge, die bei der Generierung der Matrix verwendet wird, nicht in Einheiten kompatibel mit px ist (wie relative Längen oder Prozentsätze).

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
