---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef("CSS Typed OM")}}

Das **`CSSNumericValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Operationen, die alle numerischen Werte ausführen können.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSNumericValue

Unten steht eine Liste von Schnittstellen, die auf der CSSNumericValue Schnittstelle basieren.

- [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
- [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)

## Instanzeigenschaften

Keine.

## Statische Methoden

- [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static)
  - : Ermöglicht es, ein `CSSNumericValue` direkt aus einem String zu erstellen, der CSS enthält.

## Instanzmethoden

- [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add)
  - : Fügt eine übergebene Zahl zu dem `CSSNumericValue` hinzu.
- [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub)
  - : Subtrahiert eine übergebene Zahl von dem `CSSNumericValue`.
- [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul)
  - : Multipliziert das `CSSNumericValue` mit dem übergebenen Wert.
- [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div)
  - : Dividiert das `CSSNumericValue` durch den übergebenen Wert.
- [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min)
  - : Gibt den minimalen übergebenen Wert zurück
- [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max)
  - : Gibt den maximalen übergebenen Wert zurück
- [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals)
  - : _Wahr_, wenn alle Werte denselben Typ und denselben Wert in der gleichen Reihenfolge haben. Andernfalls _falsch._
- [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to)
  - : Konvertiert `value` in einen anderen Wert mit der angegebenen _Einheit._
- [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
  - : Konvertiert ein bestehendes `CSSNumericValue` in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) Objekt mit Werten einer angegebenen Einheit.
- [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
  - : Gibt den Typ des `CSSNumericValue` zurück, einer von `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
