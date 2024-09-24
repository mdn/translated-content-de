---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformValue`**-Schnittstelle des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert `transform-list`-Werte, die von der CSS {{CSSxref('transform')}}-Eigenschaft verwendet werden.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSTransformValue

Im Folgenden finden Sie eine Liste von Schnittstellen, die auf der `CSSTransformValue`-Schnittstelle basieren.

- {{domxref('CSSTranslate')}}
- {{domxref('CSSRotate')}}
- {{domxref('CSSScale')}}
- {{domxref('CSSSkew')}}
- {{domxref('CSSSkewX')}}
- {{domxref('CSSSkewY')}}
- {{domxref('CSSPerspective')}}
- {{domxref('CSSMatrixComponent')}}

## Konstruktor

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
  - : Erstellt ein neues `CSSTransformValue`-Objekt.

## Instanz-Eigenschaften

- {{domxref("CSSTransformValue.length")}} {{ReadOnlyInline}}
  - : Gibt zurück, wie viele Transformationskomponenten im `CSSTransformValue` enthalten sind.
- {{domxref("CSSTransformValue.is2D")}} {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren {{domxref('CSSStyleValue')}}._

- {{domxref("CSSTransformValue.toMatrix()")}}
  - : Gibt ein neues {{domxref('DOMMatrix')}}-Objekt zurück.
- {{domxref('CSSTransformValue.entries()')}}
  - : Gibt ein Array der eigenen aufzählbaren Eigenschaften `[key, value]`-Paare eines gegebenen Objekts in der gleichen Reihenfolge zurück, wie sie von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).
- {{domxref('CSSTransformValue.forEach()')}}
  - : Führt eine bereitgestellte Funktion einmal für jedes Element des `CSSTransformValue`-Objekts aus.
- {{domxref('CSSTransformValue.keys()')}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel für jeden Index im `CSSTransformValue`-Objekt enthält.
- {{domxref('CSSTransformValue.values()')}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im `CSSTransformValue`-Objekt enthält.

## Beispiele

Noch ausstehend.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
