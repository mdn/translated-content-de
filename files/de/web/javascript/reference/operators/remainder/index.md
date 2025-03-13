---
title: Rest (`%`)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Rest-Operator (`%`)** gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operand geteilt wird. Er übernimmt immer das Vorzeichen des Dividenden.

{{InteractiveExample("JavaScript Demo: Rest (%) Operator")}}

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

Der `%`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zuerst beide Operanden, in numerische Werte umgewandelt zu werden](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft ihre Typen. Er führt eine BigInt-Restoperation durch, wenn beide Operanden BigInts werden; andernfalls wird eine Zahlen-Restoperation durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt, der andere jedoch zu einer Zahl wird.

Für die Operation `n % d` wird `n` als der Dividend und `d` als der Divisor bezeichnet. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder wenn `d` ±0 ist. Wird `d` jedoch ±Infinity oder `n` ±0 ist, wird der Dividend `n` zurückgegeben.

Wenn beide Operanden ungleich Null und endlich sind, wird der Rest `r` als `r := n - d * q` berechnet, wobei `q` die ganze Zahl ist, sodass `r` dasselbe Vorzeichen wie der Dividend `n` hat, während es so nah wie möglich bei 0 liegt.

Beachten Sie, dass in den meisten Sprachen '%' ein Restoperator ist, in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator. Modulo wird definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, sodass `k` dasselbe Vorzeichen wie der Divisor `d` hat, während es so nah wie möglich bei 0 liegt. Für zwei Werte mit demselben Vorzeichen sind beide gleichwertig, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Modulo-Ergebnis immer dasselbe Vorzeichen wie der _Divisor_, während der Rest dasselbe Vorzeichen wie der _Dividend_ hat, was dazu führen kann, dass sie sich um eine Einheit von `d` unterscheiden. Um ein Modulo in JavaScript zu erhalten, verwenden Sie anstelle von `n % d`, `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operand von Bitverschiebungsoperatoren zu normalisieren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.), wodurch der Versatz immer ein positiver Wert ist.

Für BigInt-Division wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der Rest einer Zahl durch Null `NaN` zurückgibt, aber BigInt kein Konzept von `NaN` hat.

## Beispiele

### Rest mit positivem Dividenden

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Rest mit negativem Dividenden

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
- [Rest vs. Modulo Operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
