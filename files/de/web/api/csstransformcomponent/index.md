---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSS Typed OM")}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interfaces.

## Instanz-Eigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)

  - : Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

    Diese Methode verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente zum Beispiel [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, wird der zurückgegebene String in der Form der CSS-Transformation [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate3d)-Funktion sein. Wenn wahr, wird der zurückgegebene String in der Form der zweidimensionalen [`rotate()`](/de/docs/Web/CSS/transform-function/rotate)-Funktion sein.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
