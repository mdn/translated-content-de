---
title: "CSSNumericValue: Methode mul()"
short-title: mul()
slug: Web/API/CSSNumericValue/mul
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`mul()`** des Interfaces [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt einen neuen Wert zurück, der sich aus der Multiplikation des `CSSNumericValue` mit den übergebenen Werten ergibt.

## Syntax

```js-nolint
mul()
mul(number1)
mul(number1, number2)
mul(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Eine Zahl wird in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt. Daher wird `2` wie [`CSS.number(2)`](/de/docs/Web/API/CSS/factory_functions_static) behandelt.

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn der `CSSNumericValue` und alle übergebenen Werte Einzelwerte (`CSSUnitValue`-Objekte) sind und entweder alle oder alle bis auf einen reine Zahlen sind (Werte mit der Einheit `"number"`).
Andernfalls ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Typen der Werte nicht zu einem Produkt kombiniert werden können.
    Dies kommt selten vor, da die meisten Typen miteinander multipliziert werden können.

## Beschreibung

Wenn alle Werte reine Zahlen sind, werden sie miteinander multipliziert und als einzelner [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` zurückgegeben.
Wenn alle Werte bis auf einen reine Zahlen sind, ist das Ergebnis ein einzelner `CSSUnitValue` mit der Einheit dieses einen Werts.
Beispielsweise gibt `CSS.px(10).mul(2)` `20px` zurück.

Andernfalls gibt die Methode ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) zurück, das jeden Wert als separaten Term enthält.
Dies geschieht immer dann, wenn zwei oder mehr Werte Einheiten haben, selbst wenn die Einheiten gleich sind.
Beispielsweise gibt `CSS.px(2).mul(CSS.px(3))` `calc(2px * 3px)` zurück und keinen Einzelwert.
Es geschieht auch, wenn der Wert mit einer Einheit eine Berechnung ist, etwa ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum): Beispielsweise gibt `CSS.px(1).add(CSS.percent(2)).mul(2)` ein Produkt aus der Summe und `2` zurück.
Die Multiplikation von Werten mit Einheiten ergibt einen zusammengesetzten Typ, den [`type()`](/de/docs/Web/API/CSSNumericValue/type) meldet.
Beispielsweise hat eine Länge, die mit einer Länge multipliziert wird, den Typ `{ length: 2 }`. Dieser entspricht einer Fläche und nicht einer Länge.

Wenn der `CSSNumericValue` bereits ein `CSSMathProduct` ist, werden die übergebenen Werte als zusätzliche Terme dieses Produkts hinzugefügt. Das bestehende Produkt wird also nicht zu einem Term innerhalb eines neuen Produkts.
Die Terme des Ergebnisses stehen in folgender Reihenfolge: zuerst der `CSSNumericValue` (oder, falls er bereits ein `CSSMathProduct` ist, dessen Terme), dann die übergebenen Werte in der Reihenfolge ihrer Übergabe.

Die meisten Typen können miteinander multipliziert werden, darunter auch eine Länge und eine Zeit.
Die Methode löst nur dann einen `TypeError` aus, wenn zwei Werte jeweils einen Prozentwert mit einer unterschiedlichen Art von Wert kombinieren, beispielsweise eine Länge plus einen Prozentwert und einen Winkel plus einen Prozentwert. Ihre Prozentwerte können dann nicht auf einen gemeinsamen Typ aufgelöst werden.

## Beispiele

### Multiplikation mit reinen Zahlen

Wenn alle Werte oder alle bis auf einen reine Zahlen sind, ist das Ergebnis ein einzelner `CSSUnitValue`:

```js
const scaled = CSS.px(10).mul(2, 3);
console.log(scaled.toString()); // "60px"

const numbers = CSS.number(2).mul(3);
console.log(numbers.toString()); // "6"
```

### Multiplikation von Werten mit Einheiten

Wenn zwei oder mehr Werte Einheiten haben, ist das Ergebnis ein `CSSMathProduct` mit einem zusammengesetzten Typ.
Jeder Aufruf von `mul()` fügt seinen Wert zum bestehenden Produkt hinzu. Daher ergeben die folgenden verketteten Aufrufe ein einzelnes Produkt mit vier Termen:

```js
const area = CSS.px(2).mul(CSS.px(3));
console.log(area.toString()); // "calc(2px * 3px)"
console.log(JSON.stringify(area.type())); // '{"length":2}'

const mathProduct = CSS.px(23)
  .mul(CSS.percent(4))
  .mul(CSS.cm(3))
  .mul(CSS.in(9));
console.log(mathProduct.toString()); // "calc(23px * 4% * 3cm * 9in)"
```

### Multiplikation von Werten, die nicht miteinander multipliziert werden können

Im folgenden Code kombiniert `percentageLength` einen Prozentwert mit einer Länge und `percentageAngle` einen Prozentwert mit einem Winkel.
Ihre Multiplikation löst einen `TypeError` aus, da ihre Prozentwerte nicht auf einen gemeinsamen Typ aufgelöst werden können:

```js
const percentageLength = CSS.percent(50).add(CSS.px(10));
const percentageAngle = CSS.percent(50).add(CSS.deg(10));

try {
  percentageLength.mul(percentageAngle);
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.div()`](/de/docs/Web/API/CSSNumericValue/div)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
