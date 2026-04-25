---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 07395e563a02ae04a61e88b4713bf4348d0c9335
---

Der **Additionsoperator (`+`)** erzeugt entweder die Summe numerischer Operanden oder eine Zeichenfolgenverkettung.

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

Der `+`-Operator ist für zwei verschiedene Operationen überladen: numerische Addition und Zeichenfolgenverkettung. Bei der Auswertung werden zunächst [beide Operanden in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dann werden die Typen der beiden Operanden getestet:

- Wenn eine Seite eine Zeichenfolge ist, wird der andere Operand ebenfalls [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verkettet.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Ansonsten werden beide Seiten [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und eine numerische Addition wird durchgeführt.

Die Zeichenfolgenverkettung wird oft mit [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) gleichgesetzt, aber das ist nicht der Fall. Der Addition-Operator zwingt den Ausdruck zu einem _Primitiven_, was in erster Linie [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) aufruft; dagegen zwingen Template Literals und `concat()` den Ausdruck zu einer _Zeichenfolge_, wodurch in erster Linie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) aufgerufen wird. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft die Zeichenfolgenverkettung sie mit dem Hinweis `"default"` auf, während Template Literals `"string"` verwenden. Dies ist wichtig für Objekte, die unterschiedliche Zeichenfolgen- und Primitive-Darstellungen haben — wie {{jsxref("Temporal")}}, dessen `valueOf()`-Methoden alle Ausnahmen auslösen.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird empfohlen, nicht `"" + x` zu verwenden, um eine [Zeichenfolgenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) durchzuführen.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere Werte, die keine Zeichenfolge und kein BigInt sind, werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Sie können in der Addition keine BigInt- und Zahl-Operanden mischen. `null`, `undefined` und boolesche Werte werden in Zahlen umgewandelt und sind ebenfalls verboten.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Zeichenfolgen haben Vorrang vor anderen Typen, daher führt das Hinzufügen einer Zeichenfolge zu einem BigInt zu einer Zeichenfolgenverkettung statt zu einem `TypeError`.

```js
"1" + 2n; // "12"
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
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
