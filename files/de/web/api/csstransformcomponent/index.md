---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interfaces.

## Instanz-Eigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen boolean zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Ein String in Form einer CSS-[Transform-Funktion](/de/docs/Web/CSS/Reference/Values/transform-function).

    Dieser nutzt den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Beispielsweise, wenn die Komponente [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, wird der zurückgegebene String in Form der CSS-Transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion vorliegen. Ist `is2D` wahr, wird der zurückgegebene String in Form der 2-dimensionalen {{cssxref("transform-function/rotate", "rotate()")}}-Funktion vorliegen.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
