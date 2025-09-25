---
title: "CSSTransformComponent: toString() Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: 1a5c9bf577facb17a2b34d1c27cfe6b3655787cd
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`** Methode des [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) Interfaces ist ein {{Glossary("stringifier", "Stringifier")}}, der eine [CSS-Transformations](/de/docs/Web/CSS/CSS_transforms)funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

Dies verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) repräsentiert und `is2D` falsch ist, dann wird der zurückgegebene String in Form der CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d) sein. Wenn `is2D` wahr ist, wird der zurückgegebene String in Form der zweidimensionalen [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) Funktion sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
