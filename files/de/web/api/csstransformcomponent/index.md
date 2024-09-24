---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformComponent`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist Teil der {{domxref('CSSTransformValue')}}-Schnittstelle.

## Instanz-Eigenschaften

- {{domxref("CSSTransformComponent.is2D")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

- {{domxref("CSSTransformComponent.toMatrix()")}}
  - : Gibt ein neues {{domxref('DOMMatrix')}}-Objekt zurück.
- {{domxref("CSSTransformComponent.toString()")}}

  - : Ein String in Form einer CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function).

    Diese verwendet den Wert von `is2D`, um entweder eine 2D- oder 3D-Transformation zurückzugeben. Beispielsweise, wenn die Komponente {{domxref("CSSRotate")}} repräsentiert und `is2D` falsch ist, dann wird der zurückgegebene String in der Form der CSS-Transformation [`rotate3D()`](/de/docs/Web/CSS/transform-function/rotate3d) Funktion sein. Wenn wahr, wird der zurückgegebene String in der Form der 2-dimensionalen [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) Funktion sein.

## Beispiele

Noch zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
