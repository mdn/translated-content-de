---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Gleichheitsoperator (`==`)** prüft, ob seine beiden Operanden gleich sind, und gibt ein Boolesches Ergebnis zurück. Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden unterschiedlichen Typs zu konvertieren und zu vergleichen.

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

## Beschreibung

Die Gleichheitsoperatoren (`==` und `!=`) bieten die [IsLooselyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using) Semantik. Diese kann grob wie folgt zusammengefasst werden:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in der gleichen Reihenfolge haben.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; `NaN` ist also nie gleich `NaN`.
   - Boolescher Wert: gibt `true` nur zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in primitive Werte konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie vom gleichen Typ sind, vergleichen Sie sie nach Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolescher Wert ist, der andere jedoch nicht, [konvertieren Sie den Booleschen Wert in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 konvertiert und `false` in 0. Dann vergleichen Sie die beiden Operanden erneut locker.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was die Gleichheit garantiert `false` sein lässt.
   - Zahl zu BigInt: vergleichen Sie nach ihrem mathematischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: konvertieren Sie den String in ein BigInt unter Verwendung desselben Algorithmus wie der Konstruktor [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt). Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Lockere Gleichheit ist _symmetrisch_: `A == B` hat immer dieselbe Semantik wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewendeten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) besteht darin, dass der strikte Gleichheitsoperator keine Typkonvertierung durchführt. Stattdessen betrachtet der strikte Gleichheitsoperator Operanden unterschiedlichen Typs immer als verschieden. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 durch und gibt dann in allen anderen Fällen `false` zurück.

Es gibt einen "willentlichen Verstoß" gegen den obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird es behandelt, als wäre es `undefined`. Das bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` ist `false`.

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

Beachten Sie, dass Strings, die mit `new String()` konstruiert wurden, Objekte sind. Wenn Sie eines davon mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal konvertiert und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, dann werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich erfolgreich ist:

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

### Vergleich von Daten und Strings

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
