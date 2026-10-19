---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: a64fca52b72fd03b0efd7661207d5afdd220aac3
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Schnittstelle **`CSSNumericValue`** der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert Operationen, die alle numerischen Werte ausführen können.

{{InheritanceDiagram}}

## Instanzeigenschaften

Keine.

## Statische Methoden

- [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static)
  - : Ermöglicht es, einen `CSSNumericValue` direkt aus einer Zeichenfolge mit CSS-Inhalt zu erstellen.

## Instanzmethoden

- [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add)
  - : Addiert eine übergebene Zahl zum `CSSNumericValue`.
- [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub)
  - : Subtrahiert eine übergebene Zahl vom `CSSNumericValue`.
- [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul)
  - : Multipliziert den `CSSNumericValue` mit dem übergebenen Wert.
- [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div)
  - : Dividiert den `CSSNumericValue` durch den übergebenen Wert.
- [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min)
  - : Gibt den kleinsten übergebenen Wert zurück.
- [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max)
  - : Gibt den größten übergebenen Wert zurück.
- [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals)
  - : Gibt `true` zurück, wenn jeder übergebene Wert mit dem `CSSNumericValue` übereinstimmt und mit denselben Werten und Einheiten geschrieben ist; andernfalls gibt die Methode `false` zurück.
- [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to)
  - : Konvertiert `value` in einen anderen Wert mit der angegebenen _Einheit_.
- [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
  - : Konvertiert einen vorhandenen `CSSNumericValue` in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)-Objekt mit Werten in einer angegebenen Einheit.
- [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
  - : Gibt den Typ des `CSSNumericValue` zurück: `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

## Auf CSSNumericValue basierende Schnittstellen

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
