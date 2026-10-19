---
title: "CSSNumericValue: Methode equals()"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
l10n:
  sourceCommit: a64fca52b72fd03b0efd7661207d5afdd220aac3
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`equals()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt `true` zurück, wenn jeder übergebene Wert mit dem `CSSNumericValue` übereinstimmt, andernfalls `false`.

Die Methode vergleicht, wie die Werte geschrieben sind, nicht, welches Ergebnis sie ergeben. Einzelne Werte, beispielsweise solche, die durch [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) dargestellt werden, stimmen überein, wenn sie denselben [`value`](/de/docs/Web/API/CSSUnitValue/value) und dieselbe [`unit`](/de/docs/Web/API/CSSUnitValue/unit) haben. Einheiten werden nicht umgerechnet: `CSS.in(1)` stimmt daher nicht mit `CSS.cm(2.54)` überein, obwohl beide Längen einem Zoll entsprechen. Berechnungen, beispielsweise durch [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) dargestellte Summen, stimmen überein, wenn sie dieselbe Art von Berechnung sind und dieselben Werte in derselben Reihenfolge enthalten. Daher stimmt `calc(1px + 2px)` weder mit `calc(2px + 1px)` noch mit `3px` überein.

## Syntax

```js-nolint
equals()
equals(number1)
equals(number1, number2)
equals(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Eine Zahl wird als Wert ohne Einheit verglichen, wie ein mit [`CSS.number()`](/de/docs/Web/API/CSS/factory_functions_static) erstellter Wert.

### Rückgabewert

`true`, wenn jeder übergebene Wert mit dem `CSSNumericValue` übereinstimmt, andernfalls `false`. Werden keine Werte übergeben, gibt die Methode `true` zurück.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

Werte mit derselben Zahl und Einheit stimmen überein. Das gilt auch für Summen derselben Werte in derselben Reihenfolge:

```js
console.log(CSS.px(10).equals(CSS.px(10))); // true

const sum = new CSSMathSum(CSS.px(1), CSS.px(2));
console.log(sum.equals(new CSSMathSum(CSS.px(1), CSS.px(2)))); // true
```

Wird die Reihenfolge der Werte in einer Summe geändert, eine Summe mit ihrem Ergebnis verglichen oder dieselbe Länge in einer anderen Einheit geschrieben, stimmen die Werte nicht überein:

```js
console.log(sum.equals(new CSSMathSum(CSS.px(2), CSS.px(1)))); // false
console.log(sum.equals(CSS.px(3))); // false
console.log(CSS.in(1).equals(CSS.cm(2.54))); // false
```

### Mehrere Werte vergleichen

Wenn mehrere Werte übergeben werden, gibt die Methode nur dann `true` zurück, wenn jeder von ihnen mit dem `CSSNumericValue` übereinstimmt. Eine Zahl wird als Wert ohne Einheit verglichen:

```js
console.log(CSS.number(5).equals(5, CSS.number(5))); // true
console.log(CSS.px(10).equals(CSS.px(10), CSS.px(11))); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
