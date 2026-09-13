---
title: CSSMathInvert
slug: Web/API/CSSMathInvert
l10n:
  sourceCommit: 542f8a0bccdf6258fb687ee878b87513e4fd1711
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSMathInvert`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert das Inverse (reziprok) eines [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathInvert()`](/de/docs/Web/API/CSSMathInvert/CSSMathInvert)
  - : Erstellt ein neues `CSSMathInvert` Objekt.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathInvert.value`](/de/docs/Web/API/CSSMathInvert/value) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt zurück, das den invertierten Wert enthält.

## Statische Methoden

_Erbt auch Methoden von seinem Elterninterface, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanzmethoden

_Erbt auch Methoden von seinem Elterninterface, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Wenn Sie einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) durch einen anderen mittels [`div()`](/de/docs/Web/API/CSSNumericValue/div) teilen, kann der Divisor, wenn er eine einfache Zahl ist, sofort in einen Wert des ursprünglichen Typs skaliert werden.

Wenn der Divisor ein anderer Typ ist, kann das Ergebnis nicht auf ein einziges Objekt reduziert werden.
In diesem Fall wird der Divisor in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) als `CSSMathInvert` dargestellt.

Im Allgemeinen werden Sie `CSSMathInvert` nicht direkt konstruieren.
Es wird erzeugt, wenn `div()` mit einem Divisor aufgerufen wird, der keine einfache Zahl ist: Das Ergebnis ist ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct), und `CSSMathInvert` ist der Operand, der diesen Divisor hält — zu finden durch Abgehen der Operanden des Produkts oder durch Überprüfung von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) auf den String `"invert"`.

`CSSMathInvert` wird mithilfe der CSS {{CSSXref('calc','calc()')}} Syntax serialisiert, als `calc(1 / <value>)`.

## Beispiele

### Konstruieren eines CSSMathInvert mit einem Nicht-Zahl-Divisor

Dieses Beispiel zeigt, wie Sie [`div()`](/de/docs/Web/API/CSSNumericValue/div) mit einem Divisor verwenden können, der keine einfache Zahl ist, um ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) zu erhalten, das ein `CSSMathInvert` als einen seiner Operanden hat.
Der Wert und die Serialisierung dieses Operanden werden ebenfalls protokolliert.

```js
const product = CSS.px(200).div(CSS.percent(4));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.values[1].constructor.name); // "CSSMathInvert"
console.log(product.values[1].value); // CSSUnitValue {value: 4, unit: "percent"}
console.log(product.toString()); // "calc(200px / 4%)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`div()`](/de/docs/Web/API/CSSNumericValue/div)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator)
