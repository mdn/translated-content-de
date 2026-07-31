---
title: "CSSTransformComponent: toString() Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`toString()`** Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) Schnittstelle ist ein {{Glossary("stringifier", "stringifier")}}, der eine [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms) Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in der Form einer CSS [transform function](/de/docs/Web/CSS/Reference/Values/transform-function).

Dieser verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Beispielsweise, wenn die Komponente [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, dann wird der zurückgegebene String in der Form der CSS-Transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}} Funktion sein. Ist `is2D` wahr, wird der zurückgegebene String in der Form der zweidimensionalen {{cssxref("transform-function/rotate", "rotate()")}} Funktion sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
