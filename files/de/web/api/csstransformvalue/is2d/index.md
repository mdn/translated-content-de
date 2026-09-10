---
title: "CSSTransformValue: Eigenschaft is2D"
short-title: is2D
slug: Web/API/CSSTransformValue/is2D
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`is2D`** des Interfaces [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) gibt zurück, ob die Transformation 2D oder 3D ist.

`is2D` ist nur dann `true`, wenn jede [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) in `CSSTransformValue` selbst 2D ist (siehe [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D)); andernfalls ist sie `false`.

## Wert

Ein boolescher Wert. `true`, wenn jedes Objekt im Wert 2D ist, andernfalls `false`.

## Beispiele

### Vergleich von 2D- und 3D-Transformationen

```js
const transform2D = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform2D.is2D); // true

const transform3D = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30)),
  new CSSScale(2, 3),
]);

console.log(transform3D.is2D); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D)
- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
