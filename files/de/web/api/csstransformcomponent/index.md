---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interfaces.

## Instanz-Eigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/Reference/Values/transform-function).

    Dies verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Beispielsweise, wenn die Komponente [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, dann wird der zurückgegebene String in Form der CSS-Transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion sein. Wenn true, wird der zurückgegebene String in der Form der zweidimensionalen {{cssxref("transform-function/rotate", "rotate()")}}-Funktion sein.

## Schnittstellen basierend auf CSSTransformComponent

- [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)
- [`CSSRotate`](/de/docs/Web/API/CSSRotate)
- [`CSSScale`](/de/docs/Web/API/CSSScale)
- [`CSSSkew`](/de/docs/Web/API/CSSSkew)
- [`CSSSkewX`](/de/docs/Web/API/CSSSkewX)
- [`CSSSkewY`](/de/docs/Web/API/CSSSkewY)
- [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent)

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
