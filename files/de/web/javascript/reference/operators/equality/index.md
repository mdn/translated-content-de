---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** prüft, ob seine beiden Operanden gleich sind und gibt ein Boolesches Ergebnis zurück. Im Gegensatz zum [strengeren Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden unterschiedlicher Typen zu konvertieren und zu vergleichen.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntax

```js-nolint
x == y
```

## Beschreibung

Die Gleichheitsoperatoren (`==` und `!=`) bieten die [IsLooselyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using) Semantik. Diese kann grob wie folgt zusammengefasst werden:

1. Wenn die Operanden vom gleichen Typ sind, werden sie wie folgt verglichen:
   - Objekt: Gibt `true` zurück, nur wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Gibt `true` zurück, nur wenn beide Operanden die gleichen Zeichen in der gleichen Reihenfolge haben.
   - Zahl: Gibt `true` zurück, nur wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert betrachtet. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; somit ist `NaN` niemals gleich `NaN`.
   - Boolean: Gibt `true` zurück, nur wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: Gibt `true` zurück, nur wenn beide Operanden denselben Wert haben.
   - Symbol: Gibt `true` zurück, nur wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt zu einem primitiven Wert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in primitive Werte (einer von String, Number, Boolean, Symbol, und BigInt) konvertiert. Der Rest der Konvertierung wird fallweise durchgeführt.
   - Wenn sie vom selben Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 konvertiert und `false` in 0. Vergleichen Sie dann die beiden Operanden locker erneut.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie nach ihrem numerischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie den String zu einem BigInt mit demselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Lockere Gleichheit ist _symmetrisch_: `A == B` hat immer die gleichen Semantiken wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewandten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strengen Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) ist, dass der strenge Gleichheitsoperator keine Typkonvertierung versucht. Stattdessen betrachtet der strenge Gleichheitsoperator Operanden unterschiedlicher Typen immer als unterschiedlich. Der strenge Gleichheitsoperator führt im Wesentlichen nur Schritt 1 durch und gibt dann `false` für alle anderen Fälle zurück.

Es gibt eine "absichtliche Abweichung" des obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er behandelt, als wäre er `undefined`. Dies bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` `false` ist.

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

Beachten Sie, dass Strings, die mit `new String()` erstellt wurden, Objekte sind. Wenn Sie einen davon mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal konvertiert und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich erfolgreich ist:

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
- [Strenge Gleichheit (`===`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strenge Ungleichheit (`!==`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
