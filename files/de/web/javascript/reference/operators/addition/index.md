---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 1133f9e054bad2340b98a608b7894fd7daa62af6
---

Der **Addition (`+`)** Operator erzeugt die Summe numerischer Operanden oder eine Zeichenfolgenverkettung.

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

Der `+` Operator ist für zwei unterschiedliche Operationen überladen: numerische Addition und Zeichenfolgenverkettung. Bei der Auswertung werden zunächst [beide Operanden zu Primitiven konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Danach werden die Typen der beiden Operanden geprüft:

- Wenn eine Seite eine Zeichenfolge ist, wird der andere Operand ebenfalls [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) und sie werden verkettet.
- Wenn beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Wenn eine Seite ein BigInt ist, die andere jedoch nicht, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Seiten [in Zahlen konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und es wird eine numerische Addition durchgeführt.

Die Zeichenfolgenverkettung wird oft als gleichwertig mit [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) angesehen, aber sie sind es nicht. Die Addition zwingt den Ausdruck zu einem _primitiven_, was [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) mit Priorität aufruft; hingegen zwingen Template-Literale und `concat()` den Ausdruck in eine _Zeichenfolge_, was [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) mit Priorität aufruft. Wenn der Ausdruck eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft die Zeichenfolgenverkettung sie mit dem Hinweis `"default"` auf, während Template-Literale `"string"` verwenden. Dies ist wichtig für Objekte, die unterschiedliche Zeichenfolgen- und Primärdarstellungen haben — wie {{jsxref("Temporal")}}, dessen `valueOf()`-Methoden für alle Objekte eine Ausnahme werfen.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Es wird empfohlen, `"" + x` nicht zu verwenden, um eine [Zeichenfolgenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) durchzuführen.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere nicht-String-, nicht-BigInt-Werte werden in Zahlen konvertiert:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Sie können BigInt- und Nummern-Operanden in der Addition nicht mischen. `null`, `undefined` und boolesche Werte werden in Zahlen konvertiert und sind ebenfalls verboten.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Zeichenfolgen haben Vorrang vor anderen Typen, sodass das Hinzufügen einer Zeichenfolge zu einer BigInt eine Zeichenfolgenverkettung anstelle eines `TypeErrors` verursacht.

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

- [Subtraction (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
