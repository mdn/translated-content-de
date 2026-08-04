---
title: "CSSTransformComponent: toString() Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`toString()`** Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) Schnittstelle ist ein {{Glossary("stringifier", "Stringifier")}}, der eine [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms) Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS [Transform-Funktion](/de/docs/Web/CSS/Reference/Values/transform-function).

Diese nutzt den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben.
Zum Beispiel, wenn die Komponente [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, wird der zurückgegebene String in der Form der CSS-Transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}} Funktion sein.
Wenn `is2D` wahr ist, wird der zurückgegebene String in der Form der zweidimensionalen {{cssxref("transform-function/rotate", "rotate()")}} Funktion sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
