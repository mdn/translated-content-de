---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSNumericValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert Operationen, die alle numerischen Werte durchführen können.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSNumericValue

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf dem Interface CSSNumericValue basieren.

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
  - : Erlaubt es, ein `CSSNumericValue` direkt aus einem String zu konstruieren, der CSS enthält.

## Instanz-Methoden

- [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add)
  - : Fügt einen übergebenen Wert zum `CSSNumericValue` hinzu.
- [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub)
  - : Subtrahiert einen übergebenen Wert vom `CSSNumericValue`.
- [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul)
  - : Multipliziert das `CSSNumericValue` mit dem übergebenen Wert.
- [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div)
  - : Teilt das `CSSNumericValue` durch den übergebenen Wert.
- [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min)
  - : Gibt den minimal übergebenen Wert zurück.
- [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max)
  - : Gibt den maximal übergebenen Wert zurück.
- [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals)
  - : _True_, wenn alle Werte genau denselben Typ und Wert, in derselben Reihenfolge haben. Andernfalls _false_.
- [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to)
  - : Konvertiert `value` in einen anderen mit der angegebenen _Unit_.
- [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
  - : Konvertiert ein bestehendes `CSSNumericValue` in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) Objekt mit Werten einer angegebenen Einheit.
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
