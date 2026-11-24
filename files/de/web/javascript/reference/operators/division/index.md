---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: 02bb697305ecef5f5dbc58f88ffd56d1604779a4
---

Der Operator **Division (`/`)** berechnet den Quotienten seiner Operanden. Der linke Operand ist der Dividend und der rechte Operand der Divisor.

{{InteractiveExample("JavaScript Demo: Division (/) operator")}}

```js interactive-example
console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / "3");
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity
```

## Syntax

```js-nolint
x / y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 12 (Multiplikation). Sein Wert wird in [eine Zahl oder einen BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 13 (Potenzierung). Sein Wert wird in [eine Zahl oder einen BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Eine Zahl oder ein BigInt, die bzw. der den Quotienten von `x` geteilt durch `y` darstellt. Bei der BigInt-Division wird der Quotient in Richtung null abgeschnitten.

## Beschreibung

Der Operator `/` ist für zwei Operandentypen überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt zunächst beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Division aus; andernfalls führt er eine Zahlendivision aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird.

Bei der Zahlendivision entsprechen die Ergebnisse im Allgemeinen den mathematischen Regeln (abgesehen von Rundungsfehlern). Das gilt auch für Berechnungen mit `Infinity` (beispielsweise bleibt `Infinity` geteilt durch eine beliebige endliche positive Zahl `Infinity`). Das Ergebnis ist positiv, wenn beide Operanden dasselbe Vorzeichen haben, andernfalls negativ (`0` und `-0` haben unterschiedliche Vorzeichen). Einige Sonderfälle:

- Wenn einer der Operanden `NaN` ist, ist das Ergebnis `NaN`.
- Wenn beide Operanden ±Infinity sind, ist das Ergebnis `NaN`.
- Wenn beide Operanden ±0 sind, ist das Ergebnis `NaN`.
- Wenn nur `y` ±0 ist, ist das Ergebnis je nach den Vorzeichen von `x` und `y` ±Infinity (0 wird in diesem Zusammenhang als unendlich kleiner Wert interpretiert).

Bei der BigInt-Division ist das Ergebnis der Quotient der beiden Operanden, der in Richtung null abgeschnitten wird; der Rest wird verworfen. Ein {{jsxref("RangeError")}} wird ausgelöst, wenn der Divisor `y` gleich `0n` ist. Der Grund dafür ist, dass eine Zahlendivision durch null `Infinity`, `-Infinity` oder `NaN` zurückgibt, BigInt aber kein Konzept der Unendlichkeit kennt.

## Beispiele

### Division mit Zahlen

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
0 / 0; // NaN
```

Andere Werte, die keine BigInts sind, werden in Zahlen umgewandelt:

```js
5 / "2"; // 2.5
5 / "foo"; // NaN
```

### Division mit BigInts

```js
1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n

2n / 0n; // RangeError: BigInt division by zero
```

Bei der Division können BigInt- und Zahlenoperanden nicht gemischt werden.

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um einen BigInt durch einen Wert zu teilen, der kein BigInt ist, oder umgekehrt, wandeln Sie einen der Operanden um:

```js
2n / BigInt(2); // 1n
Number(2n) / 2; // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
