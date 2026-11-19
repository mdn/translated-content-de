---
title: Subtraktion (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: 6d8a46dd0cd65ede8afb18ad951567fe810d1995
---

Der **Subtraktionsoperator (`-`)** subtrahiert die beiden Operanden und liefert ihre Differenz.

{{InteractiveExample("JavaScript Demo: Subtraction (-) operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## Syntax

```js-nolint
x - y
```

## Beschreibung

Der Operator `-` ist für zwei Operandentypen überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [konvertiert er beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInt-Werten werden, führt er eine BigInt-Subtraktion durch; andernfalls führt er eine Number-Subtraktion durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt-Wert und der andere zu einem Number-Wert wird.

Bei der Subtraktion von Number-Werten ist `x - y` als gleichwertig mit `x + -y` definiert. Daher gelten die Regeln der [Addition](/de/docs/Web/JavaScript/Reference/Operators/Addition):

- Wenn einer der Operanden `NaN` ist, ist das Ergebnis `NaN`.
- `Infinity - Infinity` ergibt `NaN`.
- Wenn das mathematische Ergebnis 0 ist, wird `0` zurückgegeben – außer bei `-0 - 0`. In diesem Fall wird `-0` zurückgegeben.

## Beispiele

### Subtraktion mit Number-Werten

```js
5 - 3; // 2
3 - 5; // -2
```

Andere Werte, die keine BigInt-Werte sind, werden in Number-Werte konvertiert:

```js
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraktion mit BigInt-Werten

```js
2n - 1n; // 1n
```

Bei der Subtraktion können Sie BigInt- und Number-Operanden nicht kombinieren.

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um einen BigInt-Wert und einen Wert, der kein BigInt-Wert ist, zu subtrahieren, konvertieren Sie einen der Operanden:

```js
2n - BigInt(1); // 1n
Number(2n) - 1; // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
