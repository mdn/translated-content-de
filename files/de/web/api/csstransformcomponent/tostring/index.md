---
title: "CSSTransformComponent: toString() Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`**-Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Schnittstelle ist ein {{Glossary("stringifier", "Stringifier")}}, der eine [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms)-Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/Reference/Values/transform-function).

Dabei wird der Wert von `is2D` verwendet, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, wird der zurückgegebene String in Form der CSS-Transformationsfunktion {{cssxref("transform-function/rotate3d", "rotate3d()")}} sein. Wenn `is2D` wahr ist, wird der zurückgegebene String in Form der zweidimensionalen Funktion {{cssxref("transform-function/rotate", "rotate()")}} sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
