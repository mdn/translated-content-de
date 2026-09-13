---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSTransformComponent`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist das Basis-Interface für Objekte, die einzelne {{cssxref("transform-function", "Transform-Funktionen")}} darstellen, wie [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate) und [`scale()`](/de/docs/Web/CSS/Reference/Values/transform-function/scale).

## Instanzeigenschaften

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D)
  - : Ein boolescher Wert, der angibt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
  - : Ein String in Form einer CSS-[Transform-Funktion](/de/docs/Web/CSS/Reference/Values/transform-function).

## Auf `CSSTransformComponent` basierende Interfaces

- [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)
- [`CSSRotate`](/de/docs/Web/API/CSSRotate)
- [`CSSScale`](/de/docs/Web/API/CSSScale)
- [`CSSSkew`](/de/docs/Web/API/CSSSkew)
- [`CSSSkewX`](/de/docs/Web/API/CSSSkewX)
- [`CSSSkewY`](/de/docs/Web/API/CSSSkewY)
- [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent)

## Beschreibung

Das `CSSTransformComponent`-Interface ist das abstrakte Basis-Interface für Objekte, die eine einzelne {{cssxref("transform-function")}} in der `transform-list` von Werten darstellen, wie sie von der CSS-Eigenschaft {{cssxref("transform")}} verwendet wird.

Ein isoliertes `CSSTransformComponent` kann keinen CSS-Eigenschaftswert darstellen.
Stattdessen stellt das [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interface die `transform-list` selbst dar und kann iteriert werden, um jeden der Werte in der Transformation abzurufen.

Die [konkreten Interfaces, die jede Transform-Funktion darstellen](#interfaces_based_on_csstransformcomponent), sind im vorherigen Abschnitt aufgeführt (das Interface verfügt über keinen eigenen Konstruktor und kann daher nicht direkt instanziiert werden).

Das Interface verfügt über eine `is2D`-Eigenschaft, um zu bestimmen, ob eine Komponente eine 2D- oder 3D-Transformation ist.
Diese wird verwendet, um die Ausgabe zu formatieren und 3D-Attribute zu ignorieren, wenn eine Komponente eine 2D-Transformation darstellt.
Dadurch kann ein einzelnes Interface sowohl die 2D- als auch die 3D-Form einer bestimmten Transform-Funktion darstellen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Instanz (einen der von `CSSTransformComponent` abgeleiteten Typen) erstellen und ihre Matrix- und String-Darstellungen auslesen können.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

console.log(translate.is2D); // true
console.log(translate.toString()); // "translate(10px, 20px)"

const matrix = translate.toMatrix();
console.log(matrix.e, matrix.f); // 10 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
