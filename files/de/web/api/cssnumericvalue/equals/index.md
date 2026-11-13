---
title: "CSSNumericValue: Methode equals()"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`equals()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt `true` zurück, wenn jeder übergebene Wert mit dem `CSSNumericValue` identisch ist, andernfalls `false`.

## Syntax

```js-nolint
equals()
equals(number1)
equals(number1, number2)
equals(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Eine Zahl wird in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt. Daher wird `2` wie [`CSS.number(2)`](/de/docs/Web/API/CSS/factory_functions_static) behandelt.

### Rückgabewert

`true`, wenn jeder übergebene Wert mit dem `CSSNumericValue` identisch ist, andernfalls `false`.
Wenn keine Werte übergeben werden, gibt die Methode `true` zurück.
Die [Beschreibung](#description) erläutert, wie dieser Vergleich bei Einzelwerten wie einem [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) und bei Berechnungen wie einer [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) funktioniert.

### Ausnahmen

Keine.

## Description

Die Methode vergleicht, wie die Werte geschrieben sind, nicht ihre berechneten Ergebnisse.

Einzelwerte, etwa solche, die durch [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) dargestellt werden, sind identisch, wenn sie denselben [`value`](/de/docs/Web/API/CSSUnitValue/value) und dieselbe [`unit`](/de/docs/Web/API/CSSUnitValue/unit) haben.
Einheiten werden nicht umgerechnet. Deshalb ist `CSS.in(1)` nicht mit `CSS.cm(2.54)` identisch, obwohl beide eine Länge von einem Zoll darstellen.
Der Vergleich von Werten unterschiedlichen Typs, etwa einer Länge und einer Zeit, gibt immer `false` zurück.

Berechnungen, etwa durch [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) dargestellte Summen, sind identisch, wenn sie dieselbe Art von Berechnung sind und dieselben Werte in derselben Reihenfolge enthalten.
Eine Summe aus `1px` und `2px` ist daher weder mit einer Summe aus `2px` und `1px` noch mit `3px` identisch.

Dieser strenge Vergleich ist beabsichtigt, da sich schnell prüfen lässt, ob zwei Werte auf dieselbe Weise geschrieben sind.

## Beispiele

### Einzelwerte und Summen vergleichen

Werte mit demselben Wert und derselben Einheit sind identisch. Das gilt auch für Summen aus denselben Werten in derselben Reihenfolge:

```js
console.log(CSS.px(10).equals(CSS.px(10))); // true

const sum = new CSSMathSum(CSS.px(1), CSS.px(2));
console.log(sum.equals(new CSSMathSum(CSS.px(1), CSS.px(2)))); // true
```

Die Methode gibt `false` zurück, wenn die Werte einer Summe in einer anderen Reihenfolge stehen, wenn eine Summe mit dem Einzelwert verglichen wird, den sie ergibt, wenn dieselbe Länge in einer anderen Einheit geschrieben ist oder wenn die Werte unterschiedliche Typen haben:

```js
console.log(sum.equals(new CSSMathSum(CSS.px(2), CSS.px(1)))); // false
console.log(sum.equals(CSS.px(3))); // false
console.log(CSS.in(1).equals(CSS.cm(2.54))); // false
console.log(CSS.px(1).equals(CSS.s(1))); // false
```

### Mehrere Werte vergleichen

Wenn mehrere Werte übergeben werden, gibt die Methode nur dann `true` zurück, wenn jeder davon mit dem `CSSNumericValue` identisch ist.
Beim ersten Vergleich unten wird die Zahl `5` in `CSS.number(5)` umgewandelt. Daher sind beide Werte mit dem `CSSNumericValue` identisch:

```js
console.log(CSS.number(5).equals(5, CSS.number(5))); // true
console.log(CSS.px(10).equals(CSS.px(10), CSS.px(11))); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
