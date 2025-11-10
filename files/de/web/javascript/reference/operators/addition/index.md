---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Addition (`+`)** Operator ergibt die Summe numerischer Operanden oder eine Zeichenfolgen-Verkettung.

{{InteractiveExample("JavaScript Demo: Addition (+) operator")}}

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

Der `+` Operator ist für zwei unterschiedliche Operationen überladen: numerische Addition und Zeichenfolgen-Verkettung. Bei der Auswertung werden beide Operanden zuerst [in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dann werden die Typen der beiden Operanden überprüft:

- Wenn eine Seite eine Zeichenfolge ist, wird der andere Operand auch [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verkettet.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und eine numerische Addition wird durchgeführt.

Zeichenfolgen-Verkettung wird oft als äquivalent zu [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) angesehen, aber das ist nicht der Fall. Bei der Addition wird der Ausdruck zu einem _Primärwert_ umgewandelt, wobei [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) mit Priorität aufgerufen wird; Template-Literale und `concat()` wandeln den Ausdruck hingegen in eine _Zeichenfolge_ um, wobei [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) mit Priorität aufgerufen wird. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft die Zeichenfolgen-Verkettung diese mit "default" als Hinweis auf, während Template-Literale "string" verwenden. Das ist wichtig für Objekte, die unterschiedliche Zeichenfolgen- und Primärwertdarstellungen haben — wie zum Beispiel {{jsxref("Temporal")}}, deren `valueOf()`-Methoden alle einen Fehler werfen.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird empfohlen, nicht `"" + x` zu verwenden, um eine [Zeichenfolgenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) durchzuführen.

## Beispiele

### Addition unter Verwendung von Zahlen

```js
1 + 2; // 3
```

Andere Werte, die keine Zeichenfolgen oder BigInts sind, werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition unter Verwendung von BigInts

```js
1n + 2n; // 3n
```

Sie können in der Addition keine BigInt- und Zahlen-Operanden mischen.

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

### Addition unter Verwendung von Zeichenfolgen

Wenn einer der Operanden eine Zeichenfolge ist, wird der andere in eine Zeichenfolge umgewandelt und sie werden verkettet:

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
