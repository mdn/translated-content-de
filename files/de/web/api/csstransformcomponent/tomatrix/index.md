---
title: "CSSTransformComponent: toMatrix()-Methode"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`toMatrix()`**-Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Schnittstelle gibt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.

Alle Transformationsfunktionen können mathematisch als 4x4-Transformationsmatrix dargestellt werden.

> [!NOTE]
> Die `is2D`-Eigenschaft beeinflusst, welche Transformation und damit welcher Matrizen-Typ zurückgegeben wird.
> CSS-2D- und 3D-Transformationen unterscheiden sich aus Kompatibilitätsgründen.
> Eine kurze Erklärung zu 2D- vs. 3D-Transformationen finden Sie in [Using CSS transforms](/de/docs/Web/CSS/Guides/Transforms/Using).

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
  - : Wird ausgelöst, wenn Längen, die bei der Erzeugung der Matrix verwendet werden, nicht mit px kompatible Einheiten sind (wie relative Längen oder Prozentsätze).

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
