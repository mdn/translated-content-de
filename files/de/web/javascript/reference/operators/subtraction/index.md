---
title: Subtraktion (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 11 (Addition) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 12 (Multiplikation) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Eine Zahl oder ein BigInt-Wert, der die Differenz zwischen `x` und `y` darstellt.

## Beschreibung

Der Operator `-` ist für zwei Operandentypen überladen: Zahlen und [BigInt-Werte](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt zunächst beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInt-Werten werden, führt er eine BigInt-Subtraktion durch; andernfalls führt er eine Subtraktion von Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt-Wert und der andere zu einer Zahl wird.

Bei der Subtraktion von Zahlen ist `x - y` als äquivalent zu `x + -y` definiert. Daher gelten die Regeln der [Addition](/de/docs/Web/JavaScript/Reference/Operators/Addition):

- Wenn einer der Operanden `NaN` ist, ist das Ergebnis `NaN`.
- `Infinity - Infinity` ergibt `NaN`.
- Wenn das mathematische Ergebnis 0 ist, wird `0` zurückgegeben. Eine Ausnahme ist `-0 - 0`: In diesem Fall wird `-0` zurückgegeben.

## Beispiele

### Subtraktion mit Zahlen

```js
5 - 3; // 2
3 - 5; // -2
```

Andere Werte, die keine BigInt-Werte sind, werden in Zahlen umgewandelt:

```js
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraktion mit BigInt-Werten

```js
2n - 1n; // 1n
```

Bei der Subtraktion können Sie BigInt-Werte und Zahlen nicht als Operanden mischen.

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um einen BigInt-Wert und einen Wert, der kein BigInt-Wert ist, voneinander zu subtrahieren, müssen Sie einen der beiden Operanden umwandeln:

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
