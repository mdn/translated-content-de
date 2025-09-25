---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 1a5c9bf577facb17a2b34d1c27cfe6b3655787cd
---

{{APIRef("CSS Typed OM")}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interfaces.

## Instanzeigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Eine Zeichenfolge in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

    Diese wird den Wert von `is2D` nutzen, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, wird die zurückgegebene Zeichenkette in der Form der CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d) sein. Wenn true, wird die Zeichenkette in der Form der 2-dimensionalen [`rotate()`](/de/docs/Web/CSS/transform-function/rotate)-Funktion sein.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
