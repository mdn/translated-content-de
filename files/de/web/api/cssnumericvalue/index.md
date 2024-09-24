---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef("CSS Typed OM")}}

Die **`CSSNumericValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) stellt Operationen dar, die alle numerischen Werte ausführen können.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSNumericValue

Unten finden Sie eine Liste von Schnittstellen, die auf der CSSNumericValue-Schnittstelle basieren.

- {{domxref('CSSMathClamp')}}
- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}
- {{domxref('CSSMathValue')}}
- {{domxref('CSSNumericArray')}}
- {{domxref('CSSUnitValue')}}

## Instanzeigenschaften

Keine.

## Statische Methoden

- {{domxref('CSSNumericValue/parse_static', 'CSSNumericValue.parse')}}
  - : Ermöglicht die direkte Konstruktion eines `CSSNumericValue` aus einem String, der CSS enthält.

## Instanzmethoden

- {{domxref('CSSNumericValue.add')}}
  - : Addiert eine übergebene Zahl zum `CSSNumericValue`.
- {{domxref('CSSNumericValue.sub')}}
  - : Subtrahiert eine übergebene Zahl vom `CSSNumericValue`.
- {{domxref('CSSNumericValue.mul')}}
  - : Multipliziert den `CSSNumericValue` mit dem übergebenen Wert.
- {{domxref('CSSNumericValue.div')}}
  - : Dividiert den `CSSNumericValue` durch den übergebenen Wert.
- {{domxref('CSSNumericValue.min')}}
  - : Gibt den minimal übergebenen Wert zurück.
- {{domxref('CSSNumericValue.max')}}
  - : Gibt den maximal übergebenen Wert zurück.
- {{domxref('CSSNumericValue.equals')}}
  - : _True_, wenn alle Werte exakt den gleichen Typ und Wert in der gleichen Reihenfolge haben. Andernfalls _false_.
- {{domxref('CSSNumericValue.to')}}
  - : Konvertiert `value` in einen anderen mit der angegebenen _unit_.
- {{domxref('CSSNumericValue.toSum')}}
  - : Wandelt ein bestehendes `CSSNumericValue` in ein {{domxref("CSSMathSum")}}-Objekt mit Werten einer angegebenen Einheit um.
- {{domxref('CSSNumericValue.type')}}
  - : Gibt den Typ von `CSSNumericValue` zurück, einer von `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
