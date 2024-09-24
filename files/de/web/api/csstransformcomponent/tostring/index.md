---
title: "CSSTransformComponent: toString()-Methode"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSS Typed OM")}}

Die **`toString()`**-Methode der {{domxref("CSSTransformComponent")}}-Schnittstelle ist ein {{Glossary("stringifier")}}, der eine [CSS-Transformation](/de/docs/Web/CSS/CSS_transforms)-Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

Diese Funktion verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise {{domxref("CSSRotate")}} darstellt und `is2D` falsch ist, wird der zurückgegebene String in Form der CSS-Transformation [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate3d)-Funktion sein. Ist `is2D` wahr, wird der String in Form der zweidimensionalen [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate)-Funktion sein.

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
