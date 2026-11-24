---
title: Multiplikation (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: 02bb697305ecef5f5dbc58f88ffd56d1604779a4
---

Der **Multiplikationsoperator (`*`)** liefert das Produkt der Operanden.

{{InteractiveExample("JavaScript Demo: Multiplication (*) operator")}}

```js interactive-example
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log("3" * 2);
// Expected output: 6

console.log("foo" * 2);
// Expected output: NaN
```

## Syntax

```js-nolint
x * y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 12 (Multiplikation) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 13 (Potenzierung) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Eine Zahl oder ein BigInt, die bzw. der das Produkt von `x` und `y` darstellt.

## Beschreibung

Der Operator `*` ist für zwei Operandentypen überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Multiplikation aus; andernfalls multipliziert er Zahlen. Wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird, wird ein {{jsxref("TypeError")}} ausgelöst.

Bei der Multiplikation von Zahlen entsprechen die Ergebnisse im Allgemeinen den mathematischen Erwartungen (abgesehen von Rundungsfehlern). Das gilt auch für Berechnungen mit `Infinity`: Beispielsweise ergibt `Infinity` multipliziert mit einer beliebigen endlichen positiven Zahl weiterhin `Infinity`. Das Vorzeichen des Ergebnisses ist positiv, wenn beide Operanden dasselbe Vorzeichen haben, andernfalls negativ (`0` und `-0` haben unterschiedliche Vorzeichen). Einige Sonderfälle:

- Wenn einer der Operanden `NaN` ist, ist das Ergebnis `NaN`.
- Wenn ein Operand ±Infinity und der andere ±0 ist, ist das Ergebnis `NaN` (0 wird in diesem Zusammenhang als unendlich kleiner Wert interpretiert).

## Beispiele

### Multiplikation mit Zahlen

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

Andere Werte, die keine BigInts sind, werden in Zahlen umgewandelt:

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplikation mit BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

Bei der Multiplikation können Sie BigInt- und Zahl-Operanden nicht mischen.

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um einen BigInt mit einem Wert zu multiplizieren, der kein BigInt ist, wandeln Sie einen der Operanden um:

```js
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

### Fehlende Assoziativität

Achten Sie auf die Reihenfolge der Operationen. Anders als in der Mathematik ist die Multiplikation in JavaScript aufgrund der Rundung von Zwischenergebnissen nicht immer assoziativ. Beispielsweise kann `a * (b * c) !== (a * b) * c` gelten:

```js
const a = 3;
const b = 0.1;
const c = 10;

console.log(a * b * c); // 3.0000000000000004
console.log(a * (b * c)); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
