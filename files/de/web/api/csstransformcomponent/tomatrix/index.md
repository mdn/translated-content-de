---
title: "CSSTransformComponent: Methode toMatrix()"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`toMatrix()`**-Methode der Schnittstelle [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) gibt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.

Alle Transformations-Funktionen können mathematisch als 4x4-Transformationsmatrix dargestellt werden.

> [!NOTE]
> Die `is2D`-Eigenschaft beeinflusst, welche Transformation und somit welche Art von Matrix zurückgegeben wird. CSS 2D- und 3D-Transformationen unterscheiden sich aus historischen Gründen. Eine kurze Erklärung zu 2D- gegen 3D-Transformationen finden Sie unter [Using CSS transforms](/de/docs/Web/CSS/Guides/Transforms/Using).

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
  - : Wird ausgelöst, wenn Längen, die an der Erstellung der Matrix beteiligt sind, keine mit px kompatiblen Einheiten haben (wie relative Längen oder Prozentsätze).

## Beispiele

Noch auszuführen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
