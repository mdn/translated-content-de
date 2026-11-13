---
title: "CSSNumericValue: div()-Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`div()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt einen neuen Wert zurück, der dem durch die übergebenen Werte dividierten `CSSNumericValue` entspricht.

## Syntax

```js-nolint
div()
div(number1)
div(number1, number2)
div(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Eine Zahl wird in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt. Daher wird `2` wie [`CSS.number(2)`](/de/docs/Web/API/CSS/factory_functions_static) behandelt.

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn der `CSSNumericValue` ein einzelner Wert (ein `CSSUnitValue`) ist und jeder übergebene Wert eine reine Zahl ist (ein Wert mit der Einheit `"number"`).
Andernfalls ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Werte Typen haben, die bei einer Division nicht zusammen verwendet werden können.
    Das kommt selten vor, da sich die meisten Typen durcheinander dividieren lassen.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein übergebener Wert die reine Zahl `0` oder `-0` ist.

## Beschreibung

Die Methode bildet den Kehrwert jedes übergebenen Werts (indem sie 1 durch diesen Wert dividiert) und multipliziert dann den `CSSNumericValue` mit diesen Kehrwerten.
Dabei gelten dieselben Regeln wie für [`mul()`](/de/docs/Web/API/CSSNumericValue/mul), mit einem Unterschied: Der Kehrwert eines übergebenen Werts mit einer Einheit kann nicht als einzelner Wert dargestellt werden.

Wenn der `CSSNumericValue` ein einzelner Wert ist und jeder übergebene Wert eine reine Zahl ist, ist das Ergebnis ein einzelner [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) in der Einheit des `CSSNumericValue`.
Beispielsweise gibt `CSS.px(24).div(2)` den Wert `12px` zurück.
Wenn der `CSSNumericValue` eine Berechnung ist, etwa ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), ist das Ergebnis ein `CSSMathProduct` – auch bei der Division durch eine reine Zahl.

Wenn ein übergebener Wert eine Einheit hat, wird er in einen [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) eingeschlossen, und die Methode gibt einen [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) zurück.
Das gilt auch dann, wenn die Einheiten gleich sind.
Beispielsweise gibt `CSS.px(10).div(CSS.px(2))` den Wert `calc(10px / 2px)` zurück, nicht `5`.

Wenn der `CSSNumericValue` bereits ein `CSSMathProduct` ist, werden die Kehrwerte als zusätzliche Terme zu diesem Produkt hinzugefügt, statt das bestehende Produkt als einen Term in ein neues Produkt aufzunehmen.
Die Terme des Ergebnisses stehen in folgender Reihenfolge: zuerst der `CSSNumericValue` (oder, falls er bereits ein `CSSMathProduct` ist, dessen Terme), dann die Kehrwerte der übergebenen Werte in der Reihenfolge ihrer Übergabe.

Die Division durch die reine Zahl `0` löst einen `RangeError` aus.
Die Division durch einen Nullwert mit Einheit, etwa `CSS.px(0)`, löst keinen Fehler aus, da dieser Wert in einen `CSSMathInvert` eingeschlossen wird, statt sofort seinen Kehrwert zu bilden.

Die meisten Typen lassen sich durcheinander dividieren, darunter auch eine Länge und eine Zeitangabe.
Die Methode löst nur dann einen `TypeError` aus, wenn zwei Werte jeweils einen Prozentwert mit einem unterschiedlichen Werttyp kombinieren, etwa eine Länge plus einen Prozentwert und einen Winkel plus einen Prozentwert. In diesem Fall können ihre Prozentwerte nicht auf einen gemeinsamen Typ aufgelöst werden.

## Beispiele

### Division durch reine Zahlen

Wenn jeder übergebene Wert eine reine Zahl ist, ist das Ergebnis ein einzelner `CSSUnitValue`:

```js
const half = CSS.px(24).div(2);
console.log(half.toString()); // "12px"
```

### Division durch Werte mit Einheiten

Wenn ein übergebener Wert eine Einheit hat, ist das Ergebnis ein `CSSMathProduct`, selbst wenn die Einheiten gleich sind:

```js
const ratio = CSS.px(10).div(CSS.px(2));
console.log(ratio.toString()); // "calc(10px / 2px)"

const mathProduct = CSS.px(24).div(CSS.percent(4));
console.log(mathProduct.toString()); // "calc(24px / 4%)"
```

### Division durch null

Die Division durch die reine Zahl `0` löst einen `RangeError` aus, die Division durch eine Länge mit dem Wert null dagegen nicht:

```js
try {
  CSS.px(10).div(0);
} catch (e) {
  console.log(e instanceof RangeError); // true
}

console.log(CSS.px(10).div(CSS.px(0)).toString()); // "calc(10px / 0px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.mul()`](/de/docs/Web/API/CSSNumericValue/mul)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
