---
title: "CSSTransformComponent: toString() Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`** Methode der [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) Schnittstelle ist ein {{Glossary("stringifier", "Stringifier")}}, der eine [CSS-Transformationsfunktion](/de/docs/Web/CSS/CSS_transforms) zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

Dies wird den Wert von `is2D` verwenden, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Zum Beispiel, wenn die Komponente [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, dann wird der zurückgegebene String in Form der CSS-Transformation [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate3d) Funktion sein. Wenn `is2D` wahr ist, wird der zurückgegebene String in Form der zweidimensionalen [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate) Funktion sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
