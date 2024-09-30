---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 2f47cbac86cf0eb29c5f44d18790a7e606c64db1
---

{{jsSidebar("Operators")}}

Der **Addition (`+`)** Operator erzeugt die Summe von Zahloperanden oder eine Zeichenkettenkonkatenation.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Syntax

```js-nolint
x + y
```

## Beschreibung

Der `+` Operator ist für zwei verschiedene Operationen überladen: numerische Addition und Zeichenkettenkonkatenation. Bei der Auswertung zwingt er zunächst [beide Operanden zu Primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_coercion). Dann werden die Typen der beiden Operanden getestet:

- Wenn eine Seite eine Zeichenkette ist, wird der andere Operand auch [in eine Zeichenkette umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verknüpft.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere aber nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und es wird eine numerische Addition durchgeführt.

Zeichenkettenkonkatenation wird oft als äquivalent zu [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) angesehen, aber sie sind es nicht. Die Addition zwingt den Ausdruck zu einem _Primitive_, welches priorisiert [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) aufruft; auf der anderen Seite zwingen Template-Literale und `concat()` den Ausdruck zu einer _String_, welches priorisiert [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) aufruft. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft die Zeichenkettenkonkatenation diese mit dem Hinweis `"default"` auf, während Template-Literale `"string"` verwenden. Dies ist wichtig für Objekte, die unterschiedliche String- und Primitive-Darstellungen haben — wie [Temporal](https://github.com/tc39/proposal-temporal), dessen `valueOf()` Methode eine Ausnahme auslöst.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird empfohlen, nicht `"" + x` zur Durchführung von [String-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu verwenden.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere nicht-String, nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Sie können BigInt und Zahl-Operanden bei der Addition nicht mischen.

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

Wenn einer der Operanden eine Zeichenkette ist, wird der andere in eine Zeichenkette umgewandelt und sie werden verknüpft:

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

- [Subtraction (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
