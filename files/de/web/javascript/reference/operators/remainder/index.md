---
title: Rest (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Rest-Operator (`%`)** gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operand geteilt wird. Er übernimmt stets das Vorzeichen des Dividenden.

{{InteractiveExample("JavaScript Demo: Remainder (%) operator")}}

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

Der `%`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [zwingt er beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft die Typen davon. Er führt einen BigInt-Rest durch, wenn beide Operanden zu BigInts werden; andernfalls führt er einen Zahlenrest durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere aber zu einer Zahl.

Für die Operation `n % d` wird `n` als Dividend und `d` als Divisor bezeichnet. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Unendlich ist oder wenn `d` ±0 ist. Andernfalls, wenn `d` ±Unendlich ist oder wenn `n` ±0 ist, wird der Dividend `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` als `r := n - d * q` berechnet, wobei `q` die Ganzzahl ist, so dass `r` das gleiche Vorzeichen wie der Dividend `n` hat, während es so nah wie möglich bei 0 ist.

Beachten Sie, dass, obwohl '%' in den meisten Sprachen ein Restoperator ist, es in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) ein Modulo-Operator ist. Modulo ist definiert als `k := n - d * q`, wobei `q` die Ganzzahl ist, so dass `k` das gleiche Vorzeichen wie der Divisor `d` hat, während es so nah wie möglich bei 0 ist. Bei zwei Werten mit gleichem Vorzeichen sind die beiden gleichwertig, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Moduloergebnis immer das gleiche Vorzeichen wie der _Divisor_, während der Rest das gleiche Vorzeichen wie der _Dividend_ hat, was dazu führen kann, dass sie sich um eine Einheit von `d` unterscheiden. Um ein Modulo in JavaScript zu erhalten, verwenden Sie anstelle von `n % d`, `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operanden der bitweisen Schiebebetreiber ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.) zu normalisieren, wodurch der Versatz immer einen positiven Wert annimmt.

Für BigInt-Division wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der Zahlenrest bei Null `NaN` zurückgibt, aber BigInt kein Konzept von `NaN` hat.

## Beispiele

### Rest mit positivem Dividend

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Rest mit negativem Dividend

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0

-3n % 2n; // -1n
```

### Rest mit NaN

```js
NaN % 2; // NaN
```

### Rest mit Unendlichkeit

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
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Rest operator vs. Modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
