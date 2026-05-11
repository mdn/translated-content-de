---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: 1133f9e054bad2340b98a608b7894fd7daa62af6
---

Der **Gleichheitsoperator (`==`)** prüft, ob seine beiden Operanden gleich sind und gibt ein booleanes Ergebnis zurück. Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden unterschiedlicher Typen zu konvertieren und zu vergleichen.

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

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: `true` nur, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: `true` nur, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: `true` nur, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert betrachtet. Wenn einer der Operanden `NaN` ist, geben Sie `false` zurück; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: `true` nur, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: `true` nur, wenn beide Operanden denselben Wert haben.
   - Symbol: `true` nur, wenn beide Operanden dasselbe Symbol referenzieren.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls geben Sie `false` zurück.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Schritt werden beide Operanden in primitive Werte (einer von String, Number, Boolean, Symbol und BigInt) konvertiert. Der Rest der Konvertierung erfolgt je nach Fall.
   - Wenn sie den gleichen Typ haben, vergleichen Sie sie gemäß Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 und `false` wird zu 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut locker.
   - Zahl zu String: [Konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie nach ihrem mathematischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie den String in ein BigInt mit demselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Die lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik wie `B == A` für alle Werte von `A` und `B` (außer der Reihenfolge der angewandten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) besteht darin, dass der strikte Gleichheitsoperator keine Typkonvertierung versucht. Stattdessen betrachtet der strikte Gleichheitsoperator immer Operanden unterschiedlicher Typen als unterschiedlich. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 aus und gibt in allen anderen Fällen `false` zurück.

Es gibt eine "absichtliche Verletzung" des oben genannten Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er behandelt, als ob er `undefined` wäre. Dies bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined || document.all === null` ist `false`.

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

Beachten Sie, dass mit `new String()` konstruierte Strings Objekte sind. Wenn Sie eines davon mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal konvertiert und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich erfolgreich ist:

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
