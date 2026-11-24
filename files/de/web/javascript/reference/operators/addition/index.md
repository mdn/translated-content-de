---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **Addition (`+`)** bildet die Summe numerischer Operanden oder verkettet Zeichenfolgen.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 11 (Addition). Sein Wert wird entweder in eine Zeichenfolge, einen BigInt oder eine Zahl umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 12 (Multiplikation). Sein Wert wird entweder in eine Zeichenfolge, einen BigInt oder eine Zahl umgewandelt.

### Rückgabewert

Eine Zeichenfolge, ein BigInt oder eine Zahl, die entweder die Verkettung der Zeichenfolgen oder die numerische Summe von `x` und `y` darstellt.

## Beschreibung

Der Operator `+` wird für zwei unterschiedliche Operationen verwendet: numerische Addition und Verkettung von Zeichenfolgen. Bei der Auswertung [wandelt er zunächst beide Operanden in primitive Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Anschließend werden die Typen der beiden Operanden geprüft:

- Wenn einer der Operanden eine Zeichenfolge ist, wird auch der andere Operand [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), und beide werden verkettet.
- Wenn beide Operanden [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sind, wird eine BigInt-Addition durchgeführt. Ist nur einer der Operanden ein BigInt, wird ein {{jsxref("TypeError")}} ausgelöst.
- Andernfalls werden beide Operanden [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und es wird eine numerische Addition durchgeführt.

Bei der numerischen Addition entsprechen die Ergebnisse im Allgemeinen den mathematischen Ergebnissen (abgesehen von Rundungsfehlern). Das gilt auch für Operationen mit `Infinity` (beispielsweise ergibt `Infinity` plus eine beliebige endliche Zahl weiterhin `Infinity`). Einige Sonderfälle:

- Wenn einer der Operanden `NaN` ist, ist das Ergebnis `NaN`.
- `Infinity + -Infinity` ergibt `NaN`.
- Wenn das mathematische Ergebnis 0 ist, wird `0` zurückgegeben – es sei denn, beide Operanden sind `-0`. In diesem Fall wird `-0` zurückgegeben.

Die Verkettung von Zeichenfolgen wird oft als gleichwertig mit [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) oder [`String.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) angesehen. Das ist jedoch nicht der Fall. Bei der Addition wird der Ausdruck in einen _primitiven Wert_ umgewandelt, wobei [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) bevorzugt aufgerufen wird. Template-Literale und `concat()` wandeln den Ausdruck dagegen in eine _Zeichenfolge_ um, wobei [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) bevorzugt aufgerufen wird. Wenn der Ausdruck eine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) besitzt, ruft die Zeichenfolgenverkettung sie mit `"default"` als Hinweis auf, während Template-Literale `"string"` verwenden. Das ist wichtig für Objekte, deren Zeichenfolgen- und primitive Darstellung sich unterscheiden – beispielsweise {{jsxref("Temporal")}}, bei dessen Objekten alle `valueOf()`-Methoden eine Ausnahme auslösen.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Verwenden Sie möglichst nicht `"" + x`, um eine [Umwandlung in eine Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) durchzuführen.

## Beispiele

### Addition mit Zahlen

```js
1 + 2; // 3
```

Andere Werte, die weder Zeichenfolgen noch BigInts sind, werden in Zahlen umgewandelt:

```js
true + 1; // 2
false + false; // 0
```

### Addition mit BigInts

```js
1n + 2n; // 3n
```

Bei der Addition können Sie BigInt-Operanden nicht mit Zahlenoperanden mischen. `null`, `undefined` und boolesche Werte werden in Zahlen umgewandelt und sind daher ebenfalls nicht zulässig.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Zeichenfolgen haben Vorrang vor anderen Typen. Daher führt die Addition einer Zeichenfolge und eines BigInt zu einer Zeichenfolgenverkettung statt zu einem `TypeError`.

```js
"1" + 2n; // "12"
```

Um einen BigInt und einen Nicht-BigInt-Wert zu addieren, wandeln Sie einen der beiden Operanden um:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### Addition mit Zeichenfolgen

Wenn einer der Operanden eine Zeichenfolge ist, wird der andere in eine Zeichenfolge umgewandelt, und beide werden verkettet:

```js
"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"
```

### Fehlende Assoziativität

Achten Sie auf die Reihenfolge der Operationen. Anders als in der Mathematik ist die Addition in JavaScript nicht immer assoziativ, weil Zwischenergebnisse gerundet werden. Beispielsweise gilt `a + (b + c) !== (a + b) + c`:

```js
const a = 1e20;
const b = -1e20;
const c = 0.1;

console.log(a + b + c); // 0.1
console.log(a + (b + c)); // 0
```

{{jsxref("Math.sumPrecise()")}} kann dieses Problem abmildern:

```js
console.log(Math.sumPrecise([a, b, c])); // 0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
