---
title: Restwert (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Operators")}}

Der **Restwert-Operator (`%`)** gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operand geteilt wird. Er übernimmt immer das Vorzeichen des Dividenden.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## Syntax

```js-nolint
x % y
```

## Beschreibung

Der `%`-Operator ist für zwei Arten von Operanden überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [werden beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und deren Typen überprüft. Er führt die BigInt-Restwertoperation durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Restwertoperation auf Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Bei der Operation `n % d` wird `n` als Dividend und `d` als Divisor bezeichnet. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder wenn `d` ±0 ist. Andernfalls, wenn `d` ±Infinity ist oder wenn `n` ±0 ist, wird der Dividend `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` berechnet als `r := n - d * q` wobei `q` die Ganzzahl ist, sodass `r` dasselbe Vorzeichen wie der Dividend `n` hat, während er so nahe wie möglich bei 0 liegt.

Beachten Sie, dass in den meisten Programmiersprachen '%' ein Restwert-Operator ist, in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator. Modulo ist definiert als `k := n - d * q` wobei `q` die Ganzzahl ist, sodass `k` dasselbe Vorzeichen wie der Divisor `d` hat, während er so nahe wie möglich bei 0 liegt. Bei zwei Werten mit demselben Vorzeichen sind die beiden gleich, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Modulo-Ergebnis immer dasselbe Vorzeichen wie der _Divisor_, während der Rest dasselbe Vorzeichen wie der _Dividend_ hat, was dazu führen kann, dass sie sich um eine Einheit `d` unterscheiden. Um ein Modulo in JavaScript zu erhalten, verwenden Sie anstelle von `n % d` `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operanden der Bitverschiebungsoperatoren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.) zu normalisieren, sodass der Versatz immer ein positiver Wert ist.

Bei der BigInt-Division wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der Restwert bei Division durch null `NaN` zurückgibt, aber BigInt kein `NaN`-Konzept hat.

## Beispiele

### Restwert mit positivem Dividend

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Restwert mit negativem Dividend

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
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Restwert-Operator vs. Modulo-Operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
