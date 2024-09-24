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

Der `%`-Operator ist überladen für zwei Arten von Operanden: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt beide Operanden zunächst in numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) zu und überprüft deren Typen. Es wird der BigInt-Restwert berechnet, wenn beide Operanden BigInts werden; andernfalls wird der Zahlen-Restwert berechnet. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, während der andere eine Zahl wird.

Für die Operation `n % d` wird `n` als Dividende und `d` als Divisor bezeichnet. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder wenn `d` ±0 ist. Andernfalls, wenn `d` ±Infinity oder `n` ±0 ist, wird die Dividende `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` berechnet als `r := n - d * q`, wobei `q` die ganze Zahl ist, sodass `r` dasselbe Vorzeichen wie die Dividende `n` hat, während es so nah wie möglich bei 0 liegt.

Beachten Sie, dass `%` in den meisten Sprachen ein Restwert-Operator ist, in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator ist. Modulo ist definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, sodass `k` dasselbe Vorzeichen wie der Divisor `d` hat, während es so nah wie möglich bei 0 liegt. Für zwei Werte mit demselben Vorzeichen sind die beiden äquivalent, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Modulo-Ergebnis immer dasselbe Vorzeichen wie der _Divisor_, während der Restwert dasselbe Vorzeichen wie die _Dividende_ hat, was dazu führen kann, dass sie sich um eine Einheit von `d` unterscheiden. Um in JavaScript ein Modulo zu erhalten, verwenden Sie anstelle von `n % d` den Ausdruck `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operand von Bitverschiebungsoperatoren zu normalisieren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), usw.), wodurch der Offset immer ein positiver Wert ist.

Bei der Division von BigInt wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der Zahlen-Restwert durch null `NaN` zurückgibt, aber BigInt kein Konzept von `NaN` hat.

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

### Restwert mit Infinity

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
