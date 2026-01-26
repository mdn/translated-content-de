---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformComponent`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil der [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Schnittstelle.

## Instanzeigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/Reference/Values/transform-function).

    Dies verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, wird die zurückgegebene Zeichenkette in Form der CSS-Transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}} sein. Ist `is2D` wahr, wird die zurückgegebene Zeichenkette in Form der zweidimensionalen {{cssxref("transform-function/rotate", "rotate()")}}-Funktion sein.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
