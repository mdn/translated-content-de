---
title: Equality (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** überprüft, ob seine beiden Operanden gleich sind und liefert ein boolesches Ergebnis zurück. Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden verschiedener Typen zu konvertieren und zu vergleichen.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntax

```js-nolint
x == y
```

## Beschreibung

Die Gleichheitsoperatoren (`==` und `!=`) bieten die [IsLooselyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using) Semantik. Diese kann grob wie folgt zusammengefasst werden:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: Liefere `true` nur dann, wenn beide Operanden dasselbe Objekt referenzieren.
   - String: Liefere `true` nur dann, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Nummer: Liefere `true` nur dann, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, liefere `false`; also ist `NaN` niemals gleich `NaN`.
   - Boolean: Liefere `true` nur dann, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: Liefere `true` nur dann, wenn beide Operanden denselben Wert haben.
   - Symbol: Liefere `true` nur dann, wenn beide Operanden dasselbe Symbol referenzieren.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zu liefern. Ansonsten `false`.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertiere das Objekt zu einem primitiven Wert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. An diesem Punkt werden beide Operanden in primitive Werte konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol, aber der andere keines ist, liefere `false`.
   - Wenn einer der Operanden ein Boolean ist, aber der andere nicht, [konvertiere das Boolean zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 und `false` wird zu 0 konvertiert. Vergleichen Sie anschließend die beiden Operanden erneut lose.
   - Zahl zu String: [konvertiere den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Scheitert die Konvertierung, führt dies zu `NaN`, wodurch die Gleichheit `false` garantiert ist.
   - Zahl zu BigInt: Vergleichen Sie anhand ihres numerischen Wertes. Wenn die Zahl ±Infinity oder `NaN` ist, liefere `false`.
   - String zu BigInt: Konvertiere den String zu einem BigInt mit dem gleichen Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor. Wenn die Konvertierung fehlschlägt, liefere `false`.

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewendeten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) ist, dass der strikte Gleichheitsoperator nicht versucht, eine Typkonvertierung durchzuführen. Stattdessen betrachtet der strikte Gleichheitsoperator Operanden unterschiedlicher Typen stets als unterschiedlich. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 aus und liefert dann für alle anderen Fälle `false` zurück.

Es gibt eine "gewollte Verletzung" des obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird es behandelt, als ob es `undefined` wäre. Das bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` `false` ist.

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

### Vergleichen von Strings und String-Objekten

Beachten Sie, dass Strings, die mit `new String()` erstellt wurden, Objekte sind. Wenn Sie eines dieser Objekte mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal konvertiert und deren Inhalt wird verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen dasselbe Objekt referenzieren, damit der Vergleich erfolgreich ist:

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

### Vergleichen von Daten und Strings

```js
const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true
```

### Vergleichen von Arrays und Strings

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
