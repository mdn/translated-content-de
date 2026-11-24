---
title: Rest (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Restwertoperator (`%`)** gibt den Rest zurück, der bei der Division eines Operanden durch einen zweiten Operanden übrig bleibt. Das Ergebnis hat immer das Vorzeichen des Dividenden.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 12 (Multiplikation). Sein Wert wird [in eine Zahl oder einen BigInt-Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 13 (Potenzierung). Sein Wert wird [in eine Zahl oder einen BigInt-Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Rückgabewert

Eine Zahl oder ein BigInt-Wert, die bzw. der den Rest der Division von `x` durch `y` darstellt.

## Beschreibung

Der Operator `%` ist für zwei Operandentypen überladen: Zahlen und [BigInt-Werte](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Sind beide Operanden danach BigInt-Werte, berechnet er den Rest für BigInt-Werte; andernfalls berechnet er den Rest für Zahlen. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt-Wert und der andere zu einer Zahl wird.

Bei der Operation `n % d` heißt `n` Dividend und `d` Divisor. Die Operation gibt `NaN` zurück, wenn einer der Operanden `NaN` ist, `n` ±Infinity ist oder `d` ±0 ist. Ist dagegen `d` ±Infinity oder `n` ±0, wird der Dividend `n` zurückgegeben.

Sind beide Operanden endlich und ungleich null, wird der Rest `r` als `r := n - d * q` berechnet. Dabei ist `q` die ganze Zahl, bei der `r` dasselbe Vorzeichen wie der Dividend `n` hat und zugleich möglichst nahe bei 0 liegt.

Beachten Sie, dass '%' in den meisten Sprachen zwar ein Restwertoperator ist, in einigen Sprachen (z. B. [Python und Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) jedoch ein Modulo-Operator. Modulo ist definiert als `k := n - d * q`, wobei `q` die ganze Zahl ist, bei der `k` dasselbe Vorzeichen wie der Divisor `d` hat und zugleich möglichst nahe bei 0 liegt. Bei zwei Werten mit gleichem Vorzeichen sind beide Ergebnisse gleich. Haben die Operanden unterschiedliche Vorzeichen, hat das Modulo-Ergebnis dagegen immer das Vorzeichen des _Divisors_, während der Rest das Vorzeichen des _Dividenden_ hat. Dadurch können sich die Ergebnisse um ein Vielfaches von `d` unterscheiden. Um in JavaScript ein Modulo-Ergebnis zu erhalten, verwenden Sie statt `n % d` den Ausdruck `((n % d) + d) % d`. In JavaScript wird die Modulo-Operation (für die es keinen eigenen Operator gibt) verwendet, um den zweiten Operanden bitweiser Verschiebungsoperatoren ([`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) usw.) zu normalisieren, sodass die Verschiebungsanzahl immer positiv ist.

Bei der Restwertberechnung für BigInt-Werte wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Divisor `y` gleich `0n` ist. Der Grund dafür ist, dass die Restwertberechnung für Zahlen bei einer Division durch null `NaN` zurückgibt, BigInt jedoch keinen Wert für `NaN` kennt.

## Beispiele

### Restwert bei positivem Dividenden

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Restwert bei negativem Dividenden

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
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Restwertoperator vs. Modulo-Operator](https://2ality.com/2019/08/remainder-vs-modulo.html) von Dr. Axel Rauschmayer (2019)
