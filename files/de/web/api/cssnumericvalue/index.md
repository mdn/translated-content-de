---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSNumericValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Operationen, die alle numerischen Werte ausführen können.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSNumericValue

Unten finden Sie eine Liste der Schnittstellen, die auf dem CSSNumericValue-Interface basieren.

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
  - : Ermöglicht es, direkt aus einem String, der CSS enthält, ein `CSSNumericValue` zu erstellen.

## Instanzmethoden

- [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add)
  - : Fügt einen angegebenen Wert zur `CSSNumericValue` hinzu.
- [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub)
  - : Subtrahiert einen angegebenen Wert von der `CSSNumericValue`.
- [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul)
  - : Multipliziert die `CSSNumericValue` mit dem angegebenen Wert.
- [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div)
  - : Dividiert die `CSSNumericValue` durch den angegebenen Wert.
- [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min)
  - : Gibt den kleinsten übergebenen Wert zurück
- [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max)
  - : Gibt den größten übergebenen Wert zurück
- [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals)
  - : _True_, wenn alle Werte exakt denselben Typ und Wert, in derselben Reihenfolge haben. Andernfalls _false._
- [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to)
  - : Konvertiert `value` in einen anderen mit der angegebenen _Einheit._
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
