---
title: Multiplikation (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Multiplikationsoperator (`*`)** ergibt das Produkt der Operanden.

{{InteractiveExample("JavaScript Demo: Multiplikationsoperator (*)")}}

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

## Beschreibung

Der `*`-Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zuerst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft die Typen von ihnen. Er führt eine BigInt-Multiplikation aus, wenn beide Operanden zu BigInts werden; andernfalls führt er eine number-Multiplikation durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch eine number bleibt.

## Beispiele

### Multiplikation mit Zahlen

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

Andere, nicht BigInt-Werte werden zu Zahlen coerciert:

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplikation mit BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

Sie können keine BigInt- und number-Operanden in der Multiplikation mischen.

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Multiplikation mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

```js
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentialrechnung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrementieren (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrementieren (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
