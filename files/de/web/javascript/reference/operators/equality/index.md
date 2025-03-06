---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** überprüft, ob seine beiden Operanden gleich sind und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden, die unterschiedliche Typen haben, zu konvertieren und zu vergleichen.

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

Die Gleichheitsoperatoren (`==` und `!=`) stellen die [IsLooselyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using) Semantik bereit. Dies kann grob wie folgt zusammengefasst werden:

1. Wenn die Operanden den gleichen Typ haben, werden sie wie folgt verglichen:
   - Objekt: Gibt `true` zurück, nur wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Gibt `true` zurück, nur wenn beide Operanden die gleichen Zeichen in derselben Reihenfolge haben.
   - Number: Gibt `true` zurück, nur wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn ein Operand `NaN` ist, wird `false` zurückgegeben; `NaN` ist also nie gleich `NaN`.
   - Boolean: Gibt `true` zurück, nur wenn beide Operanden entweder `true` oder beide `false` sind.
   - BigInt: Gibt `true` zurück, nur wenn beide Operanden denselben Wert haben.
   - Symbol: Gibt `true` zurück, nur wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt ist und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Punkt werden beide Operanden in primitive Werte konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der restliche Konvertierungsprozess erfolgt fallweise.
   - Wenn sie vom gleichen Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, aber der andere nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, aber der andere nicht, [konvertieren Sie das Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 konvertiert, und `false` wird zu 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut locker.
   - Zahl zu String: [konvertieren Sie das String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Number zu BigInt: Vergleichen Sie anhand ihres mathematischen Wertes. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie das String in ein BigInt unter Verwendung des gleichen Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Lockere Gleichheit ist _symmetrisch_: `A == B` hat immer die gleichen Semantiken wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewendeten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) ist, dass der strikte Gleichheitsoperator keine Typkonvertierung versucht. Stattdessen betrachtet der strikte Gleichheitsoperator immer Operanden unterschiedlicher Typen als verschieden. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 durch und gibt dann für alle anderen Fälle `false` zurück.

Es gibt eine "vorsätzliche Verletzung" des obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er so behandelt, als wäre er `undefined`. Das bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` `false` ist.

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

Beachten Sie, dass Strings, die mit `new String()` erstellt wurden, Objekte sind. Wenn Sie einen dieser Strings mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal konvertiert und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen dasselbe Objekt referenzieren, damit der Vergleich erfolgreich ist:

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
