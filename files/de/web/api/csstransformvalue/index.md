---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSTransformValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert `transform-list`-Werte, wie sie von der CSS-{{CSSxref('transform')}}-Eigenschaft verwendet werden.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSTransformValue

Unten ist eine Liste von Schnittstellen, die auf dem `CSSTransformValue`-Interface basieren.

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
  - : Gibt zurück, wie viele Transformationskomponenten in der `CSSTransformValue` enthalten sind.
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
  - : Gibt ein Array der eigenen aufzählbaren `[key, value]`-Paare eines gegebenen Objekts in derselben Reihenfolge zurück, wie sie durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt werden (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element des `CSSTransformValue`-Objekts aus.
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel für jeden Index im `CSSTransformValue`-Objekt enthält.
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im `CSSTransformValue`-Objekt enthält.

## Beispiele

To Do.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
