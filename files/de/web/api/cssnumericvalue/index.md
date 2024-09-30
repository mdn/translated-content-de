---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef("CSS Typed OM")}}

Die **`CSSNumericValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Operationen, die alle numerischen Werte ausführen können.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSNumericValue

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der CSSNumericValue-Schnittstelle basieren.

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

## Instanz-Eigenschaften

Keine.

## Statische Methoden

- [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static)
  - : Erlaubt es, eine `CSSNumericValue` direkt aus einem String zu konstruieren, der CSS enthält.

## Instanz-Methoden

- [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add)
  - : Fügt der `CSSNumericValue` eine übergebene Zahl hinzu.
- [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub)
  - : Subtrahiert eine übergebene Zahl von der `CSSNumericValue`.
- [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul)
  - : Multipliziert die `CSSNumericValue` mit dem übergebenen Wert.
- [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div)
  - : Teilt die `CSSNumericValue` durch den übergebenen Wert.
- [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min)
  - : Gibt den minimalen übergebenen Wert zurück.
- [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max)
  - : Gibt den maximalen übergebenen Wert zurück.
- [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals)
  - : _True_, wenn alle Werte vom exakt gleichen Typ und in der gleichen Reihenfolge sind. Andernfalls _false_.
- [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to)
  - : Konvertiert `value` in einen anderen mit der angegebenen _unit_.
- [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
  - : Konvertiert eine vorhandene `CSSNumericValue` in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)-Objekt mit Werten einer angegebenen Einheit.
- [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
  - : Gibt den Typ von `CSSNumericValue` zurück, einer von `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

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
