---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interfaces.

## Instanzeigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Eine Zeichenkette in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/Reference/Values/transform-function).

    Dies verwendet den Wert von `is2D`, um entweder eine 2D- oder eine 3D-Transformation zurückzugeben. Wenn zum Beispiel die Komponente [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, wird die zurückgegebene Zeichenkette in Form der CSS-Transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion sein. Ist `is2D` true, wird die zurückgegebene Zeichenkette in Form der zweidimensionalen {{cssxref("transform-function/rotate", "rotate()")}}-Funktion sein.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
