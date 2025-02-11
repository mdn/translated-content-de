---
title: Rest (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Rest (`%`)**-Operator gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operanden dividiert wird. Er übernimmt stets das Vorzeichen des Dividenden.

{{InteractiveExample("JavaScript Demo: Expressions - Remainder operator")}}

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

Der `%`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [erzwingt zunächst, dass beide Operanden in numerische Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft dann deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Restoperation durch; andernfalls wird eine Zahl-Restoperation ausgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Bei der Operation `n % d` wird `n` als Dividend und `d` als Divisor bezeichnet. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder wenn `d` ±0 ist. Andernfalls, wenn `d` ±Infinity ist oder wenn `n` ±0 ist, wird der Dividend `n` zurückgegeben.

Wenn beide Operanden nicht null und endlich sind, wird der Rest `r` berechnet als `r := n - d * q`, wobei `q` die ganze Zahl ist, sodass `r` dasselbe Vorzeichen wie der Dividend `n` hat und so nah wie möglich an 0 liegt.

Beachten Sie, dass in den meisten Sprachen `%` ein Rest-Operator ist, in einigen (z. B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator. Modulo wird definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, sodass `k` dasselbe Vorzeichen wie der Divisor `d` hat und so nah wie möglich an 0 liegt. Für zwei gleichartige Vorzeichen sind beide gleichwertig, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Modulo-Ergebnis immer dasselbe Vorzeichen wie der _Divisor_, während der Rest dasselbe Vorzeichen wie der _Dividend_ hat, was dazu führen kann, dass sie sich um eine Einheit von `d` unterscheiden. Um ein Modulo in JavaScript zu erhalten, verwenden Sie anstelle von `n % d` die Operation `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen dedizierten Operator hat) verwendet, um den zweiten Operanden von Bit-Shift-Operatoren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) etc.) zu normalisieren, sodass der Offset stets einen positiven Wert hat.

Bei der BigInt-Division wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Der Rest einer Zahl durch Null liefert `NaN`, aber BigInt kennt kein Konzept von `NaN`.

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

### Rest mit Infinity

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
- [Rest-Operator vs. Modulo-Operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
