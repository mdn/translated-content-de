---
title: "CSSTransformComponent: toString()-Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`**-Methode des [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Interfaces ist ein [Stringifier](/de/docs/Glossary/stringifier), der eine [CSS Transforms](/de/docs/Web/CSS/CSS_transforms)-Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette in Form einer CSS-[Transform-Funktion](/de/docs/Web/CSS/transform-function).

Diese verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente zum Beispiel [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, wird die zurückgegebene Zeichenkette in der Form der CSS-Transformation [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate3d) sein. Wenn `is2D` true ist, wird die Zeichenkette in der Form der zweidimensionalen [`rotate()`](/de/docs/Web/CSS/transform-function/rotate)-Funktion sein.

## Beispiele

In Arbeit

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
