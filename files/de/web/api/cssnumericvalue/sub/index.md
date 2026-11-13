---
title: "CSSNumericValue: Methode sub()"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`sub()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt einen neuen Wert zurück, der dem `CSSNumericValue` abzüglich der übergebenen Werte entspricht.

## Syntax

```js-nolint
sub()
sub(number1)
sub(number1, number2)
sub(number1, number2, /* …, */ numberN)
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
  - : Wird ausgelöst, wenn die Werte inkompatible Typen haben, etwa eine Länge und eine Zeitangabe.

## Beschreibung

Die Methode subtrahiert jeden übergebenen Wert, indem sie sein Vorzeichen umkehrt und ihn dann addiert. Daher gelten dieselben Regeln wie für [`add()`](/de/docs/Web/API/CSSNumericValue/add).

Wenn der `CSSNumericValue` und alle übergebenen Werte exakt dieselbe Einheit haben, ist das Ergebnis ein einzelner [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).
Beispielsweise gibt `CSS.px(10).sub(CSS.px(3))` den Wert `7px` zurück.

Andernfalls gibt die Methode einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurück, in dem jeder Wert als eigener Term erhalten bleibt.
Bei einem übergebenen Einzelwert wie `4%` wird das Vorzeichen umgekehrt, bevor er zur Summe addiert wird. Deshalb erscheint er als `+ -4%`, wenn die Summe als Zeichenfolge ausgegeben wird.
Ein übergebener Wert, der selbst eine Berechnung ist, etwa eine Summe, wird in einen [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) eingeschlossen und erscheint als `- (…)`.
Einheiten werden nicht umgerechnet. Wird also eine Länge in `cm` von einer Länge in `px` subtrahiert, entsteht eine Summe mit zwei Termen.

Wenn der `CSSNumericValue` bereits ein `CSSMathSum` ist, werden die Werte mit umgekehrtem Vorzeichen als zusätzliche Terme zu dieser Summe hinzugefügt. Die bestehende Summe wird also nicht zu einem einzelnen Term innerhalb einer neuen Summe.
Die Terme des Ergebnisses stehen in dieser Reihenfolge: zuerst der `CSSNumericValue` (oder, falls er bereits ein `CSSMathSum` ist, dessen Terme), danach die übergebenen Werte mit umgekehrtem Vorzeichen in der Reihenfolge ihrer Übergabe.

Die Werte müssen Typen haben, die sich voneinander subtrahieren lassen, etwa zwei Längen oder eine Länge und ein Prozentwert.
Wird eine Zeitangabe oder eine reine Zahl von einer Länge subtrahiert, wird ein `TypeError` ausgelöst.

## Beispiele

### Werte mit derselben Einheit subtrahieren

Wenn alle Werte dieselbe Einheit haben, ist das Ergebnis ein einzelner `CSSUnitValue`:

```js
const remaining = CSS.px(10).sub(CSS.px(3), CSS.px(2));
console.log(remaining.toString()); // "5px"
```

### Werte mit unterschiedlichen Einheiten subtrahieren

Werte mit unterschiedlichen Einheiten bleiben als separate Terme eines `CSSMathSum` erhalten.
Jeder subtrahierte Wert wird mit umgekehrtem Vorzeichen zur Summe addiert. Daher wird das Ergebnis mit `+ -` statt mit `-` dargestellt:

```js
const mathSum = CSS.px(23).sub(CSS.percent(4)).sub(CSS.cm(3)).sub(CSS.in(9));
console.log(mathSum.toString()); // "calc(23px + -4% + -3cm + -9in)"
```

### Eine Summe subtrahieren

Wenn der übergebene Wert selbst eine Summe ist, wird er in einen `CSSMathNegate` eingeschlossen, der mit `-` dargestellt wird:

```js
const composite = CSS.px(10).add(CSS.percent(5));
const result = CSS.px(100).sub(composite);
console.log(result.values[1].constructor.name); // "CSSMathNegate"
console.log(result.toString()); // "calc(100px - (10px + 5%))"
```

### Werte subtrahieren, die sich nicht voneinander subtrahieren lassen

Wird eine Zeitangabe von einer Länge subtrahiert, wird ein `TypeError` ausgelöst:

```js
try {
  CSS.px(1).sub(CSS.s(1));
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.add()`](/de/docs/Web/API/CSSNumericValue/add)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
