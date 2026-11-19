---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: 6d8a46dd0cd65ede8afb18ad951567fe810d1995
---

Der **Divisionsoperator (`/`)** liefert den Quotienten seiner Operanden. Der linke Operand ist der Dividend, der rechte der Divisor.

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

## Beschreibung

Der Operator `/` ist für zwei Operandentypen überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Sind beide Operanden danach BigInts, führt er eine BigInt-Division aus; andernfalls führt er eine Number-Division aus. Wird ein Operand zu einem BigInt und der andere zu einer Number, wird ein {{jsxref("TypeError")}} ausgelöst.

Bei der Division von Numbers entsprechen die Ergebnisse im Allgemeinen den mathematischen Regeln (abgesehen von Rundungsfehlern). Das gilt auch für Berechnungen mit `Infinity`: Beispielsweise ergibt `Infinity` geteilt durch eine beliebige endliche positive Zahl weiterhin `Infinity`. Das Ergebnis ist positiv, wenn beide Operanden dasselbe Vorzeichen haben, andernfalls negativ (`0` und `-0` haben unterschiedliche Vorzeichen). Einige Sonderfälle:

- Ist einer der Operanden `NaN`, ist das Ergebnis `NaN`.
- Sind beide Operanden ±Infinity, ist das Ergebnis `NaN`.
- Sind beide Operanden ±0, ist das Ergebnis `NaN`.
- Ist nur `y` ±0, ist das Ergebnis je nach Vorzeichen von `x` und `y` ±Infinity (`0` wird in diesem Zusammenhang als unendlich kleiner Wert betrachtet).

Bei der BigInt-Division ist das Ergebnis der Quotient der beiden Operanden, der in Richtung null abgeschnitten wird; der Rest wird verworfen. Ist der Divisor `y` gleich `0n`, wird ein {{jsxref("RangeError")}} ausgelöst. Der Grund dafür ist, dass die Division von Numbers durch null `Infinity`, `-Infinity` oder `NaN` zurückgibt, BigInt jedoch kein Konzept der Unendlichkeit kennt.

## Beispiele

### Division mit Numbers

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
0 / 0; // NaN
```

Andere Werte, die keine BigInts sind, werden in Numbers umgewandelt:

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

Bei der Division können Sie BigInt- und Number-Operanden nicht mischen.

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um ein BigInt durch einen Wert zu teilen, der kein BigInt ist, oder umgekehrt, wandeln Sie einen der beiden Operanden um:

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
