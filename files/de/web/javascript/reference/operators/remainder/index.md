---
title: Rest (`%`)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Rest (`%`)** Operator gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operand dividiert wird. Er nimmt immer das Vorzeichen des Dividenden an.

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

Der `%` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [erzwingt zuerst die Umwandlung beider Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft die Typen von ihnen. Er führt eine BigInt-Restoperation aus, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahl-Restoperation aus. Ein {{jsxref("TypeError")}} wird ausgelöst, falls ein Operand zu einem BigInt, der andere jedoch zu einer Zahl wird.

Für die Operation `n % d` wird `n` Dividende und `d` Divisor genannt. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN`, `n` ±Unendlich ist oder wenn `d` ±0 ist. Ansonsten, wenn `d` ±Unendlich oder `n` ±0 ist, wird die Dividende `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` als `r := n - d * q` berechnet, wobei `q` die ganze Zahl ist, so dass `r` das gleiche Vorzeichen wie die Dividende `n` hat, während es so nahe wie möglich bei 0 liegt.

Beachten Sie, dass in den meisten Sprachen '%' ein Restoperator ist, in einigen (z.B. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator ist. Modulo ist definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, so dass `k` das gleiche Vorzeichen wie der Divisor `d` hat, während es so nahe wie möglich bei 0 liegt. Für zwei Werte mit demselben Vorzeichen sind beide gleichwertig, aber wenn die Operanden unterschiedliche Vorzeichen haben, hat das Modulo-Ergebnis immer das gleiche Vorzeichen wie der _Divisor_, während der Rest das gleiche Vorzeichen wie die _Dividende_ hat, was zu einer Differenz von einer Einheit von `d` führen kann. Um ein Modulo in JavaScript zu erhalten, anstelle von `n % d`, verwenden Sie `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (die keinen eigenen Operator hat) verwendet, um den zweiten Operanden von Bitweise-Schiebeoperatoren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.) zu normalisieren, wodurch die Verschiebung immer einen positiven Wert hat.

Bei der BigInt-Division wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass der Rest durch null `NaN` zurückgibt, aber BigInt kein Konzept von `NaN` hat.

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
- [Restoperator vs. Modulo-Operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
