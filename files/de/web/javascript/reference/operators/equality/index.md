---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** prüft, ob seine beiden Operanden gleich sind und gibt ein Boolean-Ergebnis zurück.
Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden, die unterschiedliche Typen haben, zu konvertieren und zu vergleichen.

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

Die Gleichheitsoperatoren (`==` und `!=`) bieten die [IsLooselyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using)-Semantik. Dies kann grob wie folgt zusammengefasst werden:

1. Haben die Operanden denselben Typ, werden sie wie folgt verglichen:
   - Objekt: Liefert `true` nur, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Liefert `true` nur, wenn beide Operanden dieselben Zeichen in der gleichen Reihenfolge haben.
   - Zahl: Liefert `true` nur, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; `NaN` ist also niemals gleich `NaN`.
   - Boolean: Liefert `true` nur, wenn beide Operanden entweder beide `true` oder beide `false` sind.
   - BigInt: Liefert `true` nur, wenn beide Operanden denselben Wert haben.
   - Symbol: Liefert `true` nur, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Ist einer der Operanden `null` oder `undefined`, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Ansonsten wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt ist und der andere ein primitiver Wert, [konvertiere das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Punkt werden beide Operanden in primitive Werte umgewandelt (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt Fall für Fall.
   - Sind sie vom gleichen Typ, vergleichen Sie sie anhand von Schritt 1.
   - Ist einer der Operanden ein Symbol, der andere aber nicht, wird `false` zurückgegeben.
   - Ist einer der Operanden ein Boolean, der andere aber nicht, [konvertiere den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 umgewandelt und `false` in 0. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [Konvertiere den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was die Gleichheit garantiert zu `false` macht.
   - Zahl zu BigInt: Vergleichen Sie sie nach ihrem mathematischen Wert. Wenn die Zahl ±Unendlich oder `NaN` ist, wird `false` zurückgegeben.
   - String zu BigInt: Konvertieren Sie den String in ein BigInt mit demselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Wenn die Konvertierung fehlschlägt, wird `false` zurückgegeben.

Lockere Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik zu `B == A` für beliebige Werte von `A` und `B` (abgesehen von der Reihenfolge der angewandten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) besteht darin, dass der strikte Gleichheitsoperator keine Typkonvertierung vornimmt. Stattdessen betrachtet der strikte Gleichheitsoperator Operanden verschiedener Typen immer als unterschiedlich. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 aus und gibt dann für alle anderen Fälle `false` zurück.

Es gibt einen "willentlichen Verstoß" gegen den obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er so behandelt, als ob er `undefined` wäre. Das bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` `false` ist.

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

Beachten Sie, dass Strings, die mit `new String()` konstruiert wurden, Objekte sind. Wenn Sie eine dieser mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal konvertiert und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, dann werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich erfolgreich ist:

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
