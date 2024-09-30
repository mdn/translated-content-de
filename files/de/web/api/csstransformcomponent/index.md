---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSS Typed OM")}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interfaces.

## Instanzeigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)

  - : Eine Zeichenkette in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

    Diese wird den Wert von `is2D` verwenden, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` falsch ist, wird die zurückgegebene Zeichenkette in Form der CSS-Transformation [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate3d) sein. Wenn `is2D` wahr ist, wird die Zeichenkette in Form der zweidimensionalen [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate)-Funktion zurückgegeben.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
