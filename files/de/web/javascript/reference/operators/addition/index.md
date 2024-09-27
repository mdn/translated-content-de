---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 2f47cbac86cf0eb29c5f44d18790a7e606c64db1
---

{{jsSidebar("Operators")}}

Der **Addition (`+`)** Operator erzeugt die Summe von numerischen Operanden oder eine Zeichenfolgenverkettung.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Syntax

```js-nolint
x + y
```

## Beschreibung

Der `+` Operator wird für zwei verschiedene Operationen überladen: numerische Addition und Zeichenfolgenverkettung. Bei der Auswertung werden zunächst [beide Operanden in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion). Anschließend werden die Typen der beiden Operanden geprüft:

- Wenn eine Seite eine Zeichenfolge ist, wird der andere Operand ebenfalls [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verkettet.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und eine numerische Addition wird durchgeführt.

Die Zeichenfolgenverkettung wird oft als äquivalent zu [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) angesehen, aber sie sind es nicht. Die Addition erzwingt die Umwandlung des Ausdrucks in ein _Primitive_, was priorisiert [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) aufruft; andererseits erzwingen Template-Literals und `concat()` die Umwandlung des Ausdrucks in eine _Zeichenfolge_, was priorisiert [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) aufruft. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode besitzt, ruft die Zeichenfolgenverkettung sie mit dem Hinweis `"default"` auf, während Template-Literals `"string"` verwenden. Dies ist wichtig für Objekte, die unterschiedliche Darstellungen als Zeichenfolge und als Primitive haben — wie [Temporal](https://github.com/tc39/proposal-temporal), dessen `valueOf()`-Methode eine Ausnahme auslöst.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird empfohlen, `"" + x` nicht zur [Zeichenfolgenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu verwenden.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere nicht-zeilenförmige, nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Es ist nicht möglich, BigInt- und Zahlen-Operanden in einer Addition zu mischen.

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

### Addition mit Zeichenfolgen

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
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
