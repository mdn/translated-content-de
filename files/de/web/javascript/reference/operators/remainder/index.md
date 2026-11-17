---
title: Rest (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **Restoperator (`%`)** gibt den Rest zurück, der übrig bleibt, wenn ein Operand durch einen zweiten Operanden geteilt wird. Das Ergebnis hat stets das Vorzeichen des Dividenden.

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

Der `%`-Operator ist für zwei Arten von Operanden überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Sind beide Operanden danach BigInts, berechnet er den BigInt-Rest; andernfalls berechnet er den Number-Rest. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Number wird.

Bei der Operation `n % d` heißt `n` Dividend und `d` Divisor. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder `d` ±0 ist. Ist dagegen `d` ±Infinity oder `n` ±0, wird der Dividend `n` zurückgegeben.

Wenn beide Operanden ungleich null und endlich sind, wird der Rest `r` als `r := n - d * q` berechnet. Dabei ist `q` die ganze Zahl, bei der `r` dasselbe Vorzeichen wie der Dividend `n` hat und gleichzeitig möglichst nahe bei 0 liegt.

Beachten Sie: In den meisten Sprachen ist '%' ein Restoperator, in einigen (z. B. [Python und Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator. Modulo ist definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, bei der `k` dasselbe Vorzeichen wie der Divisor `d` hat und gleichzeitig möglichst nahe bei 0 liegt. Haben beide Werte dasselbe Vorzeichen, sind die Ergebnisse gleich. Bei unterschiedlichen Vorzeichen hat das Modulo-Ergebnis dagegen immer das Vorzeichen des _Divisors_, während der Rest das Vorzeichen des _Dividenden_ hat. Dadurch können sich die Ergebnisse um einmal `d` unterscheiden. Um in JavaScript statt `n % d` ein Modulo-Ergebnis zu erhalten, verwenden Sie `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (für die es keinen eigenen Operator gibt) verwendet, um den zweiten Operanden bitweiser Verschiebungsoperatoren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) usw.) so zu normalisieren, dass der Versatz stets ein positiver Wert ist.

Bei der BigInt-Restberechnung wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` `0n` ist. Der Grund dafür ist, dass die Restberechnung mit Number bei einer Division durch null `NaN` zurückgibt, BigInt jedoch kein `NaN` kennt.

## Beispiele

### Rest bei positivem Dividenden

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Rest bei negativem Dividenden

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0

-3n % 2n; // -1n
```

### Rest bei NaN

```js
NaN % 2; // NaN
```

### Rest bei Infinity

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
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Restoperator und Modulo-Operator im Vergleich](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
