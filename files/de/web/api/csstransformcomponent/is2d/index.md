---
title: "CSSTransformComponent: is2D-Eigenschaft"
short-title: is2D
slug: Web/API/CSSTransformComponent/is2D
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`is2D`**-Eigenschaft des [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Interface gibt an, ob die Transformation 2D oder 3D ist.

## Wert

Ein Boolean.
`true`, wenn die Transformation eine 2D-Transformation ist, `false`, wenn sie eine 3D-Transformation ist.

## Beschreibung

Die Eigenschaft kann sowohl gelesen als auch geschrieben werden und wird in anderen Methoden verwendet, um die Form der Ausgabe zu bestimmen.

Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) repräsentiert und `is2D` `false` ist, hat der von [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString) zurückgegebene String die Form der CSS-Transformationsfunktion {{cssxref("transform-function/rotate3d", "rotate3d()")}}.
Wenn der Wert `true` ist, hat der zurückgegebene String die Form der zweidimensionalen Funktion {{cssxref("transform-function/rotate", "rotate()")}}.

Allgemeiner gilt: Wenn `is2D` `true` ist, werden alle Attribute der Komponente, die nur für 3D-Transformationen relevant sind (wie [`CSSTranslate.z`](/de/docs/Web/API/CSSTranslate/z)), ignoriert und haben keinen Einfluss auf die Serialisierung der Komponente ([`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)) oder ihre [`matrix`](/de/docs/Web/API/CSSTransformComponent/toMatrix).

## Beispiele

### is2D lesen und festlegen

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30));

console.log(translate.is2D); // false
console.log(translate.toString()); // "translate3d(10px, 20px, 30px)"

translate.is2D = true;

console.log(translate.toString()); // "translate(10px, 20px)"
console.log(translate.z.toString()); // "30px" — z is still set, just ignored
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
