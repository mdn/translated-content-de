---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformComponent`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil der [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Schnittstelle.

## Instanzeigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Ein String in Form einer CSS-[transform function](/de/docs/Web/CSS/Reference/Values/transform-function).

    Diese Methode verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Wenn die Komponente beispielsweise [`CSSRotate`](/de/docs/Web/API/CSSRotate) darstellt und `is2D` false ist, dann wird der zurückgegebene String in der Form der CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d) sein. Wenn `is2D` true ist, wird der String in der Form der 2-dimensionalen [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate) Funktion sein.

## Beispiele

Zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
