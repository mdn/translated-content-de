---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Addition-Operator (`+`)** erzeugt die Summe von numerischen Operanden oder eine String-Verkettung.

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

Der `+`-Operator ist überladen für zwei unterschiedliche Operationen: numerische Addition und String-Verkettung. Bei der Auswertung werden zuerst [beide Operanden in Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion). Anschließend werden die Typen der beiden Operanden überprüft:

- Wenn eine Seite ein String ist, wird der andere Operand ebenfalls [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), und sie werden verknüpft.
- Wenn beide Operanden [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Ist eine Seite ein BigInt, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und eine numerische Addition wird durchgeführt.

String-Verkettung wird oft als äquivalent zu [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) betrachtet, was jedoch nicht der Fall ist. Addition zwingt den Ausdruck zu einem _Primitiv_, wodurch [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) mit höherer Priorität aufgerufen wird; hingegen zwingen Template-Literale und `concat()` den Ausdruck zu einem _String_, wodurch [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) mit Priorität aufgerufen wird. Falls der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, nutzt die String-Verkettung `"default"` als Hinweis, während Template-Literale `"string"` verwenden. Dies ist wichtig für Objekte mit unterschiedlichen Repräsentationen für String und Primitives — wie [Temporal](https://github.com/tc39/proposal-temporal), dessen `valueOf()`-Methode einen Fehler auslöst.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Sie sollten davon absehen, `"" + x` zu verwenden, um eine [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) durchzuführen.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere Werte, die weder Strings noch BigInts sind, werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Sie können BigInt- und numerische Operanden nicht mischen.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Addition mit einem BigInt und einem nicht BigInt durchzuführen, konvertieren Sie einen der Operanden:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### Addition mit Strings

Wenn einer der Operanden ein String ist, wird der andere in einen String umgewandelt, und sie werden verknüpft:

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
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
