---
title: "CSSTransformComponent: toString() Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`** Methode des [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) Interface ist ein {{Glossary("stringifier", "stringifier")}}, der eine [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms) Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in der Form einer CSS [transform function](/de/docs/Web/CSS/Reference/Values/transform-function).

Dieser verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, wird der zurückgegebene String in der Form der CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d) Funktion sein. Wenn `is2D` wahr ist, wird der zurückgegebene String in der Form der zweidimensionalen [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate) Funktion sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
