---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Addition (`+`)** Operator erzeugt die Summe von numerischen Operanden oder eine Zeichenkettenverkettung.

{{InteractiveExample("JavaScript Demo: Expressions - Addition operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

## Syntax

```js-nolint
x + y
```

## Beschreibung

Der `+` Operator ist überladen für zwei unterschiedliche Operationen: numerische Addition und Zeichenkettenverkettung. Bei der Auswertung werden zuerst [beide Operanden in Primitives umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dann werden die Typen der beiden Operanden getestet:

- Wenn eine Seite eine Zeichenkette ist, wird der andere Operand ebenfalls [in eine Zeichenkette umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verkettet.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und eine numerische Addition wird durchgeführt.

Die Zeichenkettenverkettung wird oft als äquivalent zu [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) betrachtet, aber sie sind es nicht. Die Addition führt dazu, dass der Ausdruck in ein _Primitive_ umgewandelt wird, was zuerst [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) aufruft; hingegen zwingen Template-Literale und `concat()` den Ausdruck in einen _String_, was zuerst [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) aufruft. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft die Zeichenkettenverkettung diese mit `"default"` als Hinweis auf, während Template-Literale `"string"` verwenden. Dies ist wichtig für Objekte, die unterschiedliche Zeichenketten- und Primitive-Darstellungen haben — wie [Temporal](https://github.com/tc39/proposal-temporal), dessen `valueOf()` Methode eine Ausnahme wirft.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird geraten, nicht `"" + x` zur Durchführung der [Zeichenkettenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu verwenden.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere nicht-Zeichenketten- und nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Sie können BigInt- und Zahlen-Operanden in der Addition nicht mischen.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Addition mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### Addition mit Zeichenketten

Wenn einer der Operanden eine Zeichenkette ist, wird der andere in eine Zeichenkette umgewandelt und sie werden verkettet:

```js
"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Negationszeichen (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
