---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** überprüft, ob seine beiden Operanden gleich sind, und gibt ein Boolean-Ergebnis zurück.
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

Die Gleichheitsoperatoren (`==` und `!=`) verwenden die [IsLooselyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using)-Semantik. Diese kann grob wie folgt zusammengefasst werden:

1. Haben die Operanden denselben Typ, werden sie wie folgt verglichen:
   - Object: Es wird nur `true` zurückgegeben, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Es wird nur `true` zurückgegeben, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge enthalten.
   - Number: Es wird nur `true` zurückgegeben, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: Es wird nur `true` zurückgegeben, wenn beide Operanden entweder `true` oder `false` sind.
   - BigInt: Es wird nur `true` zurückgegeben, wenn beide Operanden denselben Wert haben.
   - Symbol: Es wird nur `true` zurückgegeben, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Ist einer der Operanden `null` oder `undefined`, muss auch der andere `null` oder `undefined` sein, um `true` zurückzugeben. Ansonsten wird `false` zurückgegeben.
3. Ist einer der Operanden ein Object und der andere ein primitiver Wert, wird [das Objekt in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden zu primitiven Werten (einem von String, Number, Boolean, Symbol oder BigInt) konvertiert. Die weitere Konvertierung erfolgt fallweise.
   - Sind sie vom selben Typ, werden sie gemäß Schritt 1 verglichen.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, wird `false` zurückgegeben.
   - Wenn einer der Operanden ein Boolean-Wert ist, der andere jedoch nicht, wird [der Boolean-Wert in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 und `false` wird zu 0. Anschließend werden die beiden Operanden erneut locker verglichen.
   - Number zu String: [der String wird in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Führt die Konvertierung zu einem Fehler, entsteht `NaN`, wodurch die Gleichheit garantiert `false` ist.
   - Number zu BigInt: Vergleich nach mathematischem Wert. Ist die Zahl ±Infinity oder `NaN`, wird `false` zurückgegeben.
   - String zu BigInt: Der String wird unter Verwendung derselben Algorithmus wie vom [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor in ein BigInt umgewandelt. Scheitert die Umwandlung, wird `false` zurückgegeben.

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer dieselbe Semantik wie `B == A` für beliebige Werte von `A` und `B` (außer bei der Reihenfolge der angewandten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) ist, dass der strikte Gleichheitsoperator keine Typkonvertierung durchführt. Stattdessen betrachtet der strikte Gleichheitsoperator Operanden unterschiedlicher Typen immer als unterschiedlich. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 durch und gibt in allen anderen Fällen `false` zurück.

Es gibt eine "bewusste Verletzung" des oben genannten Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er so behandelt, als wäre er `undefined`. Das bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` `false` ist.

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

Beachten Sie, dass Strings, die mit `new String()` erstellt wurden, Objekte sind. Wenn Sie eines dieser Objekte mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal umgewandelt und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen, und es muss sich um dasselbe Objekt handeln, damit der Vergleich erfolgreich ist:

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

### Vergleich von Datum und Strings

```js
const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true
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
