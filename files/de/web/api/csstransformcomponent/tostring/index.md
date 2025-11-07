---
title: "CSSTransformComponent: toString()-Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`**-Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Schnittstelle ist ein {{Glossary("stringifier", "Stringifizierer")}}, der eine [CSS-Transforms](/de/docs/Web/CSS/CSS_transforms)-Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS-[Transform-Funktion](/de/docs/Web/CSS/Reference/Values/transform-function).

Dieser nutzt den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, wird der zurückgegebene String in Form der CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d)-Funktion sein. Wenn `is2D` true ist, wird der zurückgegebene String in Form der zweidimensionalen [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate)-Funktion sein.

## Beispiele

Noch zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
