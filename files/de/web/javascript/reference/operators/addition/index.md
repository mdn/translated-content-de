---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Addition (`+`)** Operator erzeugt entweder die Summe numerischer Operanden oder führt eine Zeichenkettenverkettung durch.

{{InteractiveExample("JavaScript Demo: Addition (+) Operator")}}

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

Der `+` Operator ist überladen für zwei unterschiedliche Operationen: numerische Addition und Zeichenkettenverkettung. Bei der Auswertung werden zunächst [beide Operanden in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Anschließend werden die Typen der beiden Operanden überprüft:

- Wenn eine Seite eine Zeichenkette ist, wird der andere Operand ebenfalls [in eine Zeichenkette umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verkettet.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und es wird eine numerische Addition durchgeführt.

Die Zeichenkettenverkettung wird oft als äquivalent zu [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) betrachtet, ist es aber nicht. Addition zwingt den Ausdruck zu einem _Primitiv_, was [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) vorrangig aufruft; hingegen zwingen Template-Literale und `concat()` den Ausdruck zu einem _String_, was [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) vorrangig aufruft. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft die Zeichenkettenverkettung sie mit dem Hinweis `"default"` auf, während Template-Literale `"string"` verwenden. Dies ist wichtig für Objekte, die unterschiedliche Zeichenketten- und Primitive-Darstellungen haben – wie [Temporal](https://github.com/tc39/proposal-temporal), dessen `valueOf()` Methode einen Fehler auslöst.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird empfohlen, nicht `"" + x` zu verwenden, um eine [Zeichenkettenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) durchzuführen.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere nicht-String- und nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Sie können BigInt- und Zahlen-Operanden nicht in der Addition mischen.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Addition mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie entweder Operand:

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
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
