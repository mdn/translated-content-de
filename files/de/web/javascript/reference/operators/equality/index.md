---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: c75926b439f2c2a8228862b8afb99740429c2a7a
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** prüft, ob seine beiden Operanden gleich sind, und gibt ein Boolesches Ergebnis zurück. Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden unterschiedlicher Typen zu konvertieren und zu vergleichen.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntax

```js-nolint
x == y
```

## Beschreibung

Die Gleichheitsoperatoren (`==` und `!=`) stellen die [IsLooselyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using) Semantik bereit. Dies kann grob wie folgt zusammengefasst werden:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: Es wird nur `true` zurückgegeben, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Es wird nur `true` zurückgegeben, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Number: Es wird nur `true` zurückgegeben, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn ein Operand `NaN` ist, wird `false` zurückgegeben; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: Es wird nur `true` zurückgegeben, wenn beide Operanden entweder `true` oder beide `false` sind.
   - BigInt: Es wird nur `true` zurückgegeben, wenn beide Operanden denselben Wert haben.
   - Symbol: Es wird nur `true` zurückgegeben, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [wandeln Sie das Objekt in einen primitiven Wert um](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in primitive Werte umgewandelt (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [wandeln Sie das Boolean in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 umgewandelt, und `false` in 0. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Number zu String: [Wandeln Sie den String in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein fehlgeschlagener Umwandlungsversuch ergibt `NaN`, was die Gleichheit garantiert `false` macht.
   - Number zu BigInt: Vergleichen Sie nach ihrem mathematischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Wandeln Sie den String in ein BigInt um, indem Sie denselben Algorithmus wie beim [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor verwenden. Wenn die Umwandlung fehlschlägt, geben Sie `false` zurück.

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer die gleichen Semantiken wie `B == A` für alle Werte von `A` und `B` (außer für die Reihenfolge der angewandten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) ist, dass der strikte Gleichheitsoperator keine Typkonvertierung versucht. Stattdessen betrachtet der strikte Gleichheitsoperator Operanden unterschiedlicher Typen immer als verschieden. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 aus und gibt dann für alle anderen Fälle `false` zurück.

Es gibt eine "gewillkürte Verletzung" des obigen Algorithmus: wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er behandelt, als wäre er `undefined`. Dies bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` ist `false`.

## Beispiele

### Vergleich ohne Typumwandlung

```js
1 == 1; // true
"hello" == "hello"; // true
```

### Vergleich mit Typumwandlung

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

Beachten Sie, dass mit `new String()` konstruierte Strings Objekte sind. Wenn Sie einen dieser Strings mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal umgewandelt und der Inhalt wird verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich gelingt:

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
