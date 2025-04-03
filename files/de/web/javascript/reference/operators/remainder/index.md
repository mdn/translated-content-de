---
title: Restwert (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Der **Restwert (`%`)**-Operator gibt den Rest zurück, der verbleibt, wenn ein Operand durch einen zweiten Operanden dividiert wird. Er nimmt immer das Vorzeichen des Dividenden an.

{{InteractiveExample("JavaScript Demo: Restwert (%) Operator")}}

```js interactive-example
console.log(13 % 5);
// Expected output: 3

console.log(-13 % 5);
// Expected output: -3

console.log(4 % 2);
// Expected output: 0

console.log(-4 % 2);
// Expected output: -0
```

## Syntax

```js-nolint
x % y
```

## Beschreibung

Der `%`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt beide Operanden zunächst zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft die Typen dieser. Bei BigInt-Operanden wird der Restwert-Berechnung mit BigInt durchgeführt, andernfalls mit Zahlen. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird.

Für die Operation `n % d` wird `n` als Dividende und `d` als Divisor bezeichnet. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder wenn `d` ±0 ist. Andernfalls, wenn `d` ±Infinity oder wenn `n` ±0 ist, wird die Dividende `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` berechnet als `r := n - d * q`, wobei `q` die ganze Zahl ist, sodass `r` das gleiche Vorzeichen wie die Dividende `n` hat, während es so nah wie möglich bei 0 liegt.

Beachten Sie, dass in den meisten Sprachen '%' ein Restwert-Operator ist, in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) aber ein Modulo-Operator. Modulo wird definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, sodass `k` das gleiche Vorzeichen wie der Divisor `d` hat, während es so nah wie möglich bei 0 liegt. Für zwei Werte mit demselben Vorzeichen sind die beiden gleichwertig; sind die Operanden jedoch unterschiedlichen Vorzeichens, hat das Moduloergebnis immer das gleiche Vorzeichen wie der _Divisor_, während der Rest den gleichen Vorzeichen wie die _Dividende_ hat, was dazu führen kann, dass sie sich um eine Einheit von `d` unterscheiden. Um ein Modulo in JavaScript zu erhalten, anstelle von `n % d`, verwenden Sie `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operanden von bitweisen Schiebeoperatoren zu normalisieren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.), sodass der Versatz immer einen positiven Wert hat.

Bei BigInt-Divisionen wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der Restwert einer Division durch Null `NaN` ergibt, jedoch hat BigInt kein `NaN`.

## Beispiele

### Restwert mit positiver Dividende

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Restwert mit negativer Dividende

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0

-3n % 2n; // -1n
```

### Restwert mit NaN

```js
NaN % 2; // NaN
```

### Restwert mit Unendlichkeit

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
2 % Infinity; // 2
0 % Infinity; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrementierung (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrementierung (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unärer Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Restwert-Operator vs. Modulo-Operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
