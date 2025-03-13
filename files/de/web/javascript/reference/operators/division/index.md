---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Divisionsoperator (`/`)** erzeugt den Quotienten seiner Operanden, wobei der linke Operand der Dividend und der rechte Operand der Divisor ist.

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

Der `/` Operator ist für zwei Typen von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zunächst beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft die Typen von ihnen. Er führt eine BigInt-Division durch, wenn beide Operanden BigInts werden; andernfalls erfolgt eine Nummern-Division. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Nummer wird.

Bei der BigInt-Division ist das Ergebnis der Quotient der beiden Operanden, der gegen null abgerundet wird, wobei der Rest verworfen wird. Ein {{jsxref("RangeError")}} wird ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass die Division durch null bei Nummern `Infinity` oder `-Infinity` ergibt, aber BigInt kein Konzept von Unendlichkeit hat.

## Beispiele

### Division mit Zahlen

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
```

Andere Nicht-BigInt-Werte werden zu Zahlen gezwungen:

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

Sie können BigInt- und nummerische Operanden nicht in der Division mischen.

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Division mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie entweder den einen oder den anderen Operanden:

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
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
