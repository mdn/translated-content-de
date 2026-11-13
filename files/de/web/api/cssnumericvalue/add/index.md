---
title: "CSSNumericValue: Methode add()"
short-title: add()
slug: Web/API/CSSNumericValue/add
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`add()`** des Interfaces [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt einen neuen Wert zurück, der die Summe des `CSSNumericValue` und der übergebenen Werte ist.

## Syntax

```js-nolint
add()
add(number1)
add(number1, number2)
add(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Eine Zahl wird in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt. Daher wird `2` wie [`CSS.number(2)`](/de/docs/Web/API/CSS/factory_functions_static) behandelt.

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn der `CSSNumericValue` und alle übergebenen Werte dieselbe Einheit haben.
Andernfalls ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Werte inkompatible Typen haben, beispielsweise eine Länge und eine Zeitangabe.

## Beschreibung

Wenn der `CSSNumericValue` und alle übergebenen Werte exakt dieselbe Einheit haben, werden sie addiert und als einzelner [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.
Beispielsweise gibt `CSS.px(10).add(CSS.px(5))` den Wert `15px` zurück.

Andernfalls gibt die Methode einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurück, in dem jeder Wert als separater Summand erhalten bleibt.
Einheiten werden nicht umgerechnet. Werden also Längen in `px`, `cm` und `in` addiert, entsteht eine Summe mit drei Summanden, obwohl sich alle in `px` ausdrücken ließen.
Um solche Summanden zusammenzufassen, verwenden Sie [`to()`](/de/docs/Web/API/CSSNumericValue/to) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum).

Wenn der `CSSNumericValue` bereits ein `CSSMathSum` ist, werden die übergebenen Werte als weitere Summanden zu dieser Summe hinzugefügt. Die bestehende Summe wird also nicht zu einem Summanden innerhalb einer neuen Summe.
Beispielsweise gibt `CSS.px(1).add(CSS.percent(2)).add(CSS.em(3))` eine Summe mit drei Summanden zurück: `1px`, `2%` und `3em`.
Die Summanden des Ergebnisses stehen in folgender Reihenfolge: zuerst der `CSSNumericValue` (oder, falls er bereits ein `CSSMathSum` ist, dessen Summanden), danach die übergebenen Werte in der Reihenfolge ihrer Übergabe.

Die Werte müssen Typen haben, die sich addieren lassen, beispielsweise zwei Längen oder eine Länge und ein Prozentwert.
Wird eine Länge zu einer Zeitangabe oder zu einer einfachen Zahl addiert, wird ein `TypeError` ausgelöst.

## Beispiele

### Werte mit derselben Einheit addieren

Wenn alle Werte dieselbe Einheit haben, ist das Ergebnis ein einzelner `CSSUnitValue`:

```js
const total = CSS.px(10).add(CSS.px(5), CSS.px(2));
console.log(total.toString()); // "17px"
```

### Werte mit unterschiedlichen Einheiten addieren

Werte mit unterschiedlichen Einheiten bleiben als separate Summanden eines `CSSMathSum` erhalten.
Jeder Aufruf von `add()` fügt seinen Wert zur bestehenden Summe hinzu. Daher ergeben die folgenden verketteten Aufrufe eine einzelne Summe mit vier Summanden:

```js
const mathSum = CSS.px(23).add(CSS.percent(4)).add(CSS.cm(3)).add(CSS.in(9));
console.log(mathSum.toString()); // "calc(23px + 4% + 3cm + 9in)"
```

### Werte addieren, die sich nicht addieren lassen

Wird eine Länge zu einer Zeitangabe addiert, wird ein `TypeError` ausgelöst. Dasselbe gilt für die Addition einer Länge und einer einfachen Zahl:

```js
try {
  CSS.px(1).add(CSS.s(1));
} catch (e) {
  console.log(e instanceof TypeError); // true
}

try {
  CSS.px(1).add(2);
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.sub()`](/de/docs/Web/API/CSSNumericValue/sub)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
