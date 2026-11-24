---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Gleichheitsoperator (`==`)** prüft, ob seine beiden Operanden gleich sind, und gibt ein boolesches Ergebnis zurück. Anders als der Operator für [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden unterschiedlichen Typs zu konvertieren und zu vergleichen.

{{InteractiveExample("JavaScript Demo: Expressions - Equality operator")}}

```js interactive-example
console.log(1 == 1);
// Expected output: true

console.log("hello" == "hello");
// Expected output: true

console.log("1" == 1);
// Expected output: true

console.log(0 == false);
// Expected output: true
```

## Syntax

```js-nolint
x == y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 8 (Gleichheit) oder höher.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 9 (relationale Operatoren) oder höher.

### Rückgabewert

`true`, wenn `x` und `y` gemäß der [losen Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using) gleich sind, andernfalls `false`.

## Beschreibung

Die Gleichheitsoperatoren (`==` und `!=`) verwenden die Semantik von [IsLooselyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using). Sie lässt sich grob wie folgt zusammenfassen:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Object: `true` wird nur zurückgegeben, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: `true` wird nur zurückgegeben, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge enthalten.
   - Number: `true` wird nur zurückgegeben, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; `NaN` ist also niemals gleich `NaN`.
   - Boolean: `true` wird nur zurückgegeben, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: `true` wird nur zurückgegeben, wenn beide Operanden denselben Wert haben.
   - Symbol: `true` wird nur zurückgegeben, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss auch der andere `null` oder `undefined` sein, damit `true` zurückgegeben wird. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, wird [das Objekt in einen primitiven Wert konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Punkt sind beide Operanden in primitive Werte konvertiert (jeweils einer der Typen String, Number, Boolean, Symbol und BigInt). Die weitere Konvertierung erfolgt je nach Fall:
   - Wenn sie denselben Typ haben, werden sie gemäß Schritt 1 verglichen.
   - Wenn einer der Operanden ein Symbol ist, der andere aber nicht, wird `false` zurückgegeben.
   - Wenn einer der Operanden ein Boolean ist, der andere aber nicht, wird [der Boolean in eine Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 und `false` zu 0 konvertiert. Anschließend werden die beiden Operanden erneut mit loser Gleichheit verglichen.
   - Number und String: [Der String wird in eine Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Schlägt die Konvertierung fehl, ergibt sie `NaN`; der Gleichheitsvergleich ergibt dann immer `false`.
   - Number und BigInt: Die Operanden werden anhand ihres mathematischen Werts verglichen. Wenn die Zahl ±Infinity oder `NaN` ist, wird `false` zurückgegeben.
   - String und BigInt: Der String wird mit demselben Algorithmus wie beim Konstruktor [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) in einen BigInt konvertiert. Schlägt die Konvertierung fehl, wird `false` zurückgegeben.

Lose Gleichheit ist _symmetrisch_: `A == B` hat für beliebige Werte von `A` und `B` immer dieselbe Semantik wie `B == A` (abgesehen von der Reihenfolge der angewendeten Konvertierungen).

Der wichtigste Unterschied zwischen diesem Operator und dem Operator für [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) besteht darin, dass der Operator für strikte Gleichheit keine Typkonvertierung versucht. Stattdessen betrachtet er Operanden unterschiedlichen Typs immer als ungleich. Im Wesentlichen führt er nur Schritt 1 aus und gibt in allen anderen Fällen `false` zurück.

Es gibt eine „bewusste Abweichung“ vom obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er behandelt, als wäre er `undefined`. Das bedeutet, dass `document.all == null` den Wert `true` ergibt, während `document.all === undefined || document.all === null` den Wert `false` ergibt.

## Beispiele

### Vergleich ohne Typkonvertierung

```js
1 == 1; // true
"hello" == "hello"; // true
```

### Vergleich mit Typkonvertierung

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### Vergleich von Objekten

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
```

### Vergleich von Strings und String-Objekten

Beachten Sie, dass mit `new String()` erzeugte Strings Objekte sind. Wenn Sie eines dieser Objekte mit einem String-Literal vergleichen, wird das `String`-Objekt in einen String konvertiert und der Inhalt verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich erfolgreich ist:

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Vergleich von Dates und Strings

```js
const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); // true
```

### Vergleich von Arrays und Strings

```js
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` converts to string

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ungleichheit (`!=`)](/de/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strikte Gleichheit (`===`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strikte Ungleichheit (`!==`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
