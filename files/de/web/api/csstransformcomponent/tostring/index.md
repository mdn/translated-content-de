---
title: "CSSTransformComponent: Methode toString()"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`toString()`** des Interfaces [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) ist ein {{Glossary("stringifier", "Stringifier")}}, der eine [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms)-Funktion zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String in Form einer CSS-[Transform-Funktion](/de/docs/Web/CSS/Reference/Values/transform-function).

Dabei wird der Wert von `is2D` verwendet, um entweder eine 2D- oder eine 3D-Transformation zurückzugeben.
Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` den Wert false hat, entspricht der zurückgegebene String der CSS-Transformationsfunktion {{cssxref("transform-function/rotate3d", "rotate3d()")}}.
Wenn der Wert true ist, entspricht der zurückgegebene String der zweidimensionalen Funktion {{cssxref("transform-function/rotate", "rotate()")}}.

## Beispiele

### Serialisieren von 2D- und 3D-Komponenten

```js
const translate2D = new CSSTranslate(CSS.px(10), CSS.px(20));
console.log(translate2D.toString()); // "translate(10px, 20px)"

const translate3D = new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30));
console.log(translate3D.toString()); // "translate3d(10px, 20px, 30px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D)
- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
