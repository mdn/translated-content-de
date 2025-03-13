---
title: Multiplikation (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Multiplikations-Operator (`*`)** liefert das Produkt der Operanden.

{{InteractiveExample("JavaScript Demo: Multiplikation (*) Operator")}}

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

Der `*` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zunächst [beide Operanden zur numerischen Werteumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Multiplikation durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahlenmultiplikation durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl bleibt.

## Beispiele

### Multiplikation mit Zahlen

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplikation mit BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

Sie können BigInt- und Zahlen-Operanden in der Multiplikation nicht mischen.

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
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
