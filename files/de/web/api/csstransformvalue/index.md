---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformValue`**-Schnittstelle des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert `transform-list`-Werte, wie sie durch die CSS {{CSSxref('transform')}}-Eigenschaft verwendet werden.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSTransformValue

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der `CSSTransformValue`-Schnittstelle basieren.

- [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)
- [`CSSRotate`](/de/docs/Web/API/CSSRotate)
- [`CSSScale`](/de/docs/Web/API/CSSScale)
- [`CSSSkew`](/de/docs/Web/API/CSSSkew)
- [`CSSSkewX`](/de/docs/Web/API/CSSSkewX)
- [`CSSSkewY`](/de/docs/Web/API/CSSSkewY)
- [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent)

## Konstruktor

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
  - : Erstellt ein neues `CSSTransformValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length) {{ReadOnlyInline}}
  - : Gibt an, wie viele Transformationskomponenten im `CSSTransformValue` enthalten sind.
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
  - : Gibt ein Array der eigenen aufzählbaren `[key, value]`-Eigenschaftenpaare eines Objekts in derselben Reihenfolge zurück, wie es von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element des `CSSTransformValue`-Objekts aus.
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel für jeden Index im `CSSTransformValue`-Objekt enthält.
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im `CSSTransformValue`-Objekt enthält.

## Beispiele

Zu erledigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
