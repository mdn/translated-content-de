---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

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

## Instanzeigenschaften

- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length) {{ReadOnlyInline}}
  - : Gibt an, wie viele Transformationskomponenten im `CSSTransformValue` enthalten sind.
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
  - : Gibt ein Array der eigenen aufzählbaren Eigenschaften `[key, value]`-Paare eines Objekts zurück, in der gleichen Reihenfolge wie durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
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
