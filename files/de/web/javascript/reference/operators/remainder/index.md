---
title: Remainder (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Operators")}}

Der **Rest-Operator (`%`)** gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operand geteilt wird. Er übernimmt immer das Vorzeichen des Dividenden.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## Syntax

```js-nolint
x % y
```

## Beschreibung

Der `%`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt zunächst beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt die BigInt-Restberechnung durch, wenn beide Operanden zu BigInts werden; andernfalls führt er die Numerische Restberechnung durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Für die Operation `n % d` wird `n` Dividende und `d` Divisor genannt. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist, oder wenn `d` ±0 ist. Andernfalls, wenn `d` ±Infinity ist oder `n` ±0 ist, wird die Dividende `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` wie folgt berechnet: `r := n - d * q`, wobei `q` die Ganzzahl ist, sodass `r` dasselbe Vorzeichen wie die Dividende `n` hat, während sie so nah wie möglich bei 0 liegt.

Beachten Sie, dass in den meisten Sprachen '%' ein Rest-Operator ist, in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator ist. Modulo ist definiert als `k := n - d * q`, wobei `q` die Ganzzahl ist, sodass `k` dasselbe Vorzeichen wie der Divisor `d` hat, während es so nah wie möglich bei 0 liegt. Für zwei Werte mit demselben Vorzeichen sind die beiden gleichwertig, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Modulo-Ergebnis immer dasselbe Vorzeichen wie der _Divisor_, während der Rest dasselbe Vorzeichen wie die _Dividende_ hat, was dazu führen kann, dass sie sich um eine Einheit von `d` unterscheiden. Um ein Modulo in JavaScript zu erhalten, verwenden Sie `((n % d) + d) % d` anstelle von `n % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operanden von Bitweisen-Schiebungs-Operatoren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.) zu normalisieren, sodass der Versatz immer einen positiven Wert hat.

Für BigInt-Division wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der numerische Rest durch null `NaN` zurückgibt, aber BigInt hat kein Konzept von `NaN`.

## Beispiele

### Rest mit positiver Dividende

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Rest mit negativer Dividende

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
